import { Module } from '@nestjs/common';
import { EjeController } from './eje.controller';
import { EjeService } from './eje.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Eje, EjeSchema } from './entities/eje.entity';

@Module({
  controllers: [EjeController],
  providers: [EjeService],
  imports: [
    MongooseModule.forFeature([{
      name: Eje.name,
      schema: EjeSchema
    }])
  ]
})
export class EjeModule { }
