import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/entity/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { User } from './entity/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Role]),
      RolesModule
  ]
})
export class UsersModule {}
