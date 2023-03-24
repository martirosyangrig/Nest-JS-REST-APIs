import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/entity/user.model';
import { Role } from './entity/roles.model';
import { UserRoles } from './entity/user-roles.model';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles])
    ],
    exports: [
        RolesService
    ]
})
export class RolesModule {}
