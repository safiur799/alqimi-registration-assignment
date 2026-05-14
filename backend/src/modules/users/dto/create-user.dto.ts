import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'email', type: String })
    @IsString({message: 'Email must be a string'})
    @IsEmail()
    @IsNotEmpty({message: "Email is required"})
    email: string;

    @ApiProperty({ description: 'First Name', type: String })
    @IsString({message: 'firstname must be a string'})
    @IsEmail()
    @IsNotEmpty({message: "First Name is required"})
    firstName: string;

    @ApiPropertyOptional({ description: 'Password', type: String })
    @IsString({message: 'Password must be a string'})
    @IsNotEmpty({message: "Email is required"})
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Password too weak'})
    password: string;

    @ApiProperty({ description: 'Last Name', type: String })
    @IsString({message: 'Last Name must be a string'})
    @IsNotEmpty({message: "lastname Name is required"})
    lastName: string;

    @ApiProperty({ description: 'Organization', type: String })
    @IsString({message: 'Organization must be a string'})
    @IsNotEmpty({message: "Organization Name is required"})
    organization: string;

    @ApiProperty({ description: 'Phone Number', type: String })
    @IsString({message: 'Phone Number must be a string'})
    @IsNotEmpty({message: "Phone Number  is required"})
    phoneNumber: string;

    @ApiProperty({ description: 'Position', type: String })
    @IsOptional()
    position: string;
}
