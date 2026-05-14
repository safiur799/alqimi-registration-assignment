import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { compareSync, genSalt, genSaltSync, hashSync } from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import { synchronizeNameFields } from 'src/helper/utils.helper';

@Schema({versionKey: false, timestamps: true})
export class User {
    @Prop({type: String, required: true, unique: true})
    email: string;

    @Prop({type: String, required: true})
    firstName: string;

    @Prop({type: String, required: true})
    lastName: string;

    @Prop({type: String, required: true})
    password: string;
    
    @Prop({type: String, required: true})
    organization: string;
    
    @Prop({type: String, required: true})
    phoneNumber: string;
      
    @Prop({type: String , required:false})
    position: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ email: 1, isDeleted: 1 }, { unique: true, partialFilterExpression: { isDeleted: false } });

UserSchema.methods.validPassword = function (password: string) {
    return compareSync(password, this.password);
};
UserSchema.methods.generateHash = function (password: string) {
    const saltRounds = parseInt(process.env.SALT_ROUND || '10', 10);
    return hashSync(password, genSaltSync(saltRounds));
};

UserSchema.pre('save', async function () {
    let user = this as Partial<UserDocument>;

    user = synchronizeNameFields(user);

    if (!user || !user.isModified || !user.isModified('password')) {
        return;
    }

    const salt = await genSalt(10);
    const hash = hashSync(user.password || "", salt);

    user.password = hash;
});

UserSchema.pre('findOneAndUpdate', async function (next: any) {
    let update = this.getUpdate() as Partial<UserDocument>;
    if (!update) return next();
    update = synchronizeNameFields(update);
    if (update.password) {
        const salt = await genSalt(10);
        update.password = hashSync(update.password, salt);
    }
    this.setUpdate(update);
    next();
});

export type UserDocument = HydratedDocument<User> & {
    validPassword: (password: string) => boolean;
    generateHash: (password: string) => string;
};
 