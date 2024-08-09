import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Analytics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Username is required' })
  visitorId: number;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'page name is required' })
  pageName: string;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Time spent is required' })
  timeSpent: string;
}
