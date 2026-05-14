import {
  BadRequestException,
  Injectable,
} from "@nestjs/common";

import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserRepository {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  async register(body: CreateUserDto): Promise<UserDocument> {
    const existingUser = await this.userModel.findOne({
      email: body.email,
    });

    if (existingUser) {
      throw new BadRequestException(
        "Email already exists"
      );
    }
    const user = await this.userModel.create(body);

    return user;
  }
}