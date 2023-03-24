import { ApiProperty } from "@nestjs/swagger/dist";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/entity/roles.model";
import { UserRoles } from "src/roles/entity/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: "1", description: "Unique Id"})
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number;

    @ApiProperty({example: "example@email.com", description: "Email (gmail, yahhoo, ect)"})
    @Column( {type: DataType.STRING, unique:true, allowNull: false})
    email:string;

    @ApiProperty({example: "mypassword123", description: "Password - Dont tell anyone"})
    @Column( {type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: "true", description: "If true user can use his/her account anymore"})
    @Column( {type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: "For N Words", description: "Why we gave ban to user"})
    @Column( {type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}