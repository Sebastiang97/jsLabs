import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';

@Injectable()
export class TypesService {
  private types: Type[] = [
    {
      id: 1,
      name: "Eje"
    }
  ];

  create(createTypeDto: CreateTypeDto) {
    return 'This action adds a new type';
  }

  findAll() {
    return `This action returns all types`;
  }

  findOne(id: number) {
    const type: Type = this.types.find(eje => eje.id === id)

    if (!type) throw new NotFoundException("No se encontro un id " + id)

    return type
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
