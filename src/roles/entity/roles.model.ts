import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/entity/user.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: "roles"})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: "1", description: "Unique Id"})
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number;

    @ApiProperty({example: "Admin", description: "Here should be user roles"})
    @Column( {type: DataType.STRING, unique:true, allowNull: false})
    value:string;

    @ApiProperty({example: "Admin can do everything", description: "Here should be description"})
    @Column( {type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}