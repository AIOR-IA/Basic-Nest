import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';
export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'TESLA1',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'TESLA2',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'TESLA3',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'TESLA4',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'TESLA5',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'TESLA6',
    createdAt: new Date().getTime(),
  },
];
