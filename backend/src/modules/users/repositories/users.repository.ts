import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) {}

    async register(body: CreateUserDto):Promise<UserDocument> {
        //password hash 
        const user = await this.userModel.create(body);
        return user;
    }
}