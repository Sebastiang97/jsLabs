import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { CreateEJEDTO } from './dto/createEje.dto';
import { UpdateEJEDTO } from './dto/updateEje.dto';
import { Eje } from './entities/eje.entity';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

type Ejemplo = {
    id: number
    name: string
    type: string
    message: string
}

@Injectable()
export class EjeService {
    private ejemplo = [
        {
            id: 1,
            name: "ejemplo1",
            type: "eje",
            message: "otro message 1"
        }, {
            id: 2,
            name: "ejemplo2",
            type: "eje",
            message: "otro message 2"
        }
    ]

    constructor(
        @InjectModel(Eje.name)
        private readonly ejeModel: Model<Eje>
    ) { }

    getById(id: number): Ejemplo {
        const ejemplo: Ejemplo = this.ejemplo.find(eje => eje.id === id)

        if (!ejemplo) throw new NotFoundException("No se encontro un id " + id)

        return ejemplo
    }

    getAll(): Ejemplo[] {
        return [...this.ejemplo]
    }

    async create(eje: CreateEJEDTO) {
        // let newEje: Ejemplo = {
        //     id: this.ejemplo[this.ejemplo.length - 1].id + 1,
        //     ...eje
        // }

        // this.ejemplo.push(newEje)
        try {
            return await this.ejeModel.create(eje)
        } catch (err) {
            if (err.code === 11000) {
                throw new BadRequestException("El Eje ya existe")
            }
            console.log(err)
            throw new InternalServerErrorException("Error de server")

        }


    }

    update(id: number, update: UpdateEJEDTO): Ejemplo[] {

        let updateEje: Ejemplo = this.getById(id)

        if (update.id && update.id !== updateEje.id) {
            throw new BadRequestException('Eje id is not valid with the parameter  ')
        }

        this.ejemplo = this.ejemplo.map(eje => {
            if (eje.id === id) {
                updateEje = {
                    ...updateEje,
                    ...update,
                    id
                }
                eje = { ...updateEje }
            }
            return eje
        })

        return this.ejemplo
    }

    delete(id: number) {
        return this.ejemplo.filter(eje => eje.id !== id)

    }
}
