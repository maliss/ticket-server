import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;
  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly qty: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly price: number;
}
