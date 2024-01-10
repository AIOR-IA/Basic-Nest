import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService:CarsService) 
    {}

    @Get()
    getAllCars() {
        return this.carsService.getAllCars();
    }

    @Get(':id')    
    getCarById( @Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.getByIdCar(id);
    }

    @Post()
    @UsePipes( ValidationPipe )
    createCar( @Body() createCarDto: CreateCarDto ) {
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar( 
        @Body() body: any,
        @Param('id', ParseIntPipe) id: number
        ) {
            console.log(id)
        return body
    }

    @Delete(':id')
    deleteCar(
        @Param('id', ParseIntPipe) id: number
    ) {
        console.log(`delete ${id}`)
    }


}
