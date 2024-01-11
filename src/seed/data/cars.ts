import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    model: 'TESLA1',
  },
  {
    id: uuid(),
    model: 'TESLA2',
  },
  {
    id: uuid(),
    model: 'TESLA3',
  },
  {
    id: uuid(),
    model: 'TESLA4',
  },
  {
    id: uuid(),
    model: 'TESLA5',
  },
  {
    id: uuid(),
    model: 'TESLA6',
  },
];
