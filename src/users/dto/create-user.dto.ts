import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: "example@gmail.com", description: "Should be email"})
    readonly email: string;
    
    @ApiProperty({example: "mypassword123", description: "Should be password"})
    readonly password: string;
}