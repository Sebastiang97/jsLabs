import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Eje extends Document {

    @Prop({
        unique: true,
        index: true
    })
    name: string

    @Prop()
    type: string

    @Prop()
    message: string

}

export const EjeSchema = SchemaFactory.createForClass(Eje)