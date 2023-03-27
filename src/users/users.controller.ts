import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger/dist';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.model';
import { UsersService } from './users.service';

@ApiTags("Users")
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({summary: "Creating new user"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: "Getting all users"})
    @ApiResponse({status: 200, type: [User]})
    @Roles("User")
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.userService.getAllUsers();
    }

    @Roles("User")
    @UseGuards(RolesGuard)
    getByEmail(email: string) {
        return this.userService.getUserByEmail(email)
    }
}
