import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repositories/users.repository';
import { MailerService } from 'src/helper/mailer.helper';


@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly mailerService: MailerService,
  ) {}

  async create(body: CreateUserDto) {

  const user = await this.userRepo.register(body);
  await this.mailerService.sendMail(
    'safiurrahaman799@gmail.com',
    body.email,
    'Welcome!',
    'welcome',
    { name: body.firstName }
  );

  return user;
}
}