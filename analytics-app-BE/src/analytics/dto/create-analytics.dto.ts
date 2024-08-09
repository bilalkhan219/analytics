import { IsNotEmpty } from 'class-validator';

export class CreateAnalyticsDto {
  @IsNotEmpty({ message: 'visitor id is required' })
  visitorId: number;

  @IsNotEmpty({ message: 'page name is required' })
  pageName: string;

  @IsNotEmpty({ message: 'timespent is required' })
  timeSpent: string;
}
