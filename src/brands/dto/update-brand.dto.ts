import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto {
  @IsString()
  @MinLength(5)
  name: string;
}
