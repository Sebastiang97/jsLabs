import { IsString, MinLength } from "class-validator"


export class CreateEJEDTO {

    @IsString({ message: 'the name is required and must be a string ' })
    readonly name: string

    @IsString()
    readonly type: string

    @IsString()
    @MinLength(3)
    readonly message: string
}