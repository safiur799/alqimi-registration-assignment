import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'email', type: String })
    @IsString({message: 'Email must be a string'})
    @IsEmail()
    @IsNotEmpty({message: "Email is required"})
    email: string;

    @ApiProperty({ description: 'email', type: String })
    @IsString({message: 'Email must be a string'})
    @IsEmail()
    @IsNotEmpty({message: "Email is required"})
    firstName: string;

    @ApiPropertyOptional({ description: 'email', type: String })
    @IsString({message: 'Email must be a string'})
    @IsEmail()
    @IsNotEmpty({message: "Email is required"})
    @IsOptional()
    lastName?: string;

    @ApiProperty({ description: 'email', type: String })
    @IsString({message: 'Email must be a string'})
    @IsEmail()
    @IsNotEmpty({message: "Email is required"})
    password: string;
}
