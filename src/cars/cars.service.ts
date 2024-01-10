import { BadRequestException, Get, Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            model: 'NISSAN',
        },
        {
            id: 2,
            model: 'TOYOTA',
        },
        {
            id: 3,
            model: 'COROLLA',
        }
    ];

    getAllCars() {
        return this.cars;
    }

    getByIdCar(id: number) {
        const car = this.cars.find( car => car.id === id);
        if( !car ) throw new BadRequestException(`Car with id ${id} not found`);
        return car;
    }
}
