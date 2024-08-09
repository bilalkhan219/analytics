import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  @IsNotEmpty({ message: 'Username is required' })
  userName: string;

  @Column({ unique: true, nullable: false })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @Column({ nullable: false })
  @MinLength(7, { message: 'Password must be at least 7 characters long' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
