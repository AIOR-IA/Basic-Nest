import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars';
import { BRANDS_SEED } from './data/brands';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private carService: CarsService,
    private brandsService: BrandsService,
  ) {}

  populateSeed() {
    this.carService.fillCarsWithSeed(CARS_SEED);
    this.brandsService.fillCarsWithSeed(BRANDS_SEED);

    return 'SEED LOAD';
  }
}
