import { ApiProperty } from "@nestjs/swagger";

export class  CreateRoleDto {
    @ApiProperty({example: "Admin", description: "Type of role"})
    readonly value: string;
    
    @ApiProperty({example: "Admin can do everything", description: "describe about role"})
    readonly description: string;
}