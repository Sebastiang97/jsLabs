import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjeModule } from './eje/eje.module';
import { TypesModule } from './types/types.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EjeModule,
    TypesModule,
    SeedModule,
    MongooseModule.forRoot('mongodb://sebs:js@localhost:27017')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
