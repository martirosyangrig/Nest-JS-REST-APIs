import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entity/roles.model';
import { RolesService } from './roles.service';

@ApiTags("Roles")
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: "Creating new Role"})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({summary: "Geting role by its value"})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    gtByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}
