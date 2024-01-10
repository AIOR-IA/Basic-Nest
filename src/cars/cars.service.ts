import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      model: 'NISSAN',
    },
    {
      id: uuid(),
      model: 'TOYOTA',
    },
    {
      id: uuid(),
      model: 'COROLLA',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getByIdCar(id: string) {
    console.log(id);
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new BadRequestException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.unshift(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getByIdCar(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const carDB = this.getByIdCar(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return `Car with id ${id} was eliminated`;
  }
}
