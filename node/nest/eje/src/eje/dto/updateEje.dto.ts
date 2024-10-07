import { IsString, MinLength, IsOptional, IsInt } from "class-validator"


export class UpdateEJEDTO {

    @IsInt()
    @IsOptional()
    readonly id?: number

    @IsString({ message: 'the name is required and must be a string ' })
    @IsOptional()
    readonly name?: string

    @IsString()
    @IsOptional()
    readonly type?: string

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly message?: string
}