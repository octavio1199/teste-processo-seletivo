import {
  IsDefined,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  Max,
  MaxLength,
  Min,
  MIN
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('veiculos')
export class Veiculo {
  // id, placa, chassi, renavam, modelo, marca, ano

  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @IsDefined()
  @Length(7, 9, { message: 'Placa deve ter 7 caracteres' })
  @Column()
  placa: string;

  @IsString()
  @IsDefined()
  @Length(17, 17, { message: 'Chassi deve ter 17 caracteres' })
  @Column()
  chassi: string;

  @IsString()
  @IsDefined()
  @Length(9, 12, { message: 'O renavam deve ter entre 9 e 12 caracteres' })
  @Column()
  renavam: string;
  
  @IsString()
  @IsDefined()
  @Column()
  marca: string;
  
  @IsString()
  @IsDefined()
  @Column()
  modelo: string;

  @IsNumber()
  @Min(1900, { message: 'O ano de fabricação do carro deve ser maior que 1900 '} )
  @Max(new Date().getFullYear() + 1, { message: 'O ano de fabricação do carro pode ser no máximo o ano seguinte ao atual'}) // Validar criação para no máximo o ano seguinte ao atual
  ano: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: number;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: number;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  toString(): string {
    return `${this.id} - ${this.placa} - ${this.chassi} - ${this.renavam} - ${this.marca} - ${this.modelo} - ${this.ano}`;
  }
}
