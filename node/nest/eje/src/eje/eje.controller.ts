import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { EjeService } from './eje.service';
import { CreateEJEDTO } from './dto/createEje.dto';
import { UpdateEJEDTO } from './dto/updateEje.dto';

@Controller('eje')
export class EjeController {
    constructor(private readonly ejeService: EjeService) { }
    @Get()
    getAllEjemplo() {
        return this.ejeService.getAll()
    }

    @Get(':id')
    getById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        // throw new Error("Jesuscrist")
        let ejemplo = this.ejeService.getById(id)
        if (ejemplo) {
            return ejemplo
        }

        return {
            error: "not Found ejemplo with id " + id
        }

    }

    @Post()
    // @UsePipes(ValidationPipe)
    create(@Body() body: CreateEJEDTO) {
        console.log({ body })
        return this.ejeService.create(body)
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: UpdateEJEDTO
    ) {
        return this.ejeService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.ejeService.delete(id)
    }

}
