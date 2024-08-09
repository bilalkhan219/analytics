import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Analytics } from './entities/analytics.entity';
import { Repository } from 'typeorm';
import { validateOrReject } from 'class-validator';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Analytics)
    private analyticsRepository: Repository<Analytics>,
  ) {}

  async create(createAnalyticsDto: CreateAnalyticsDto): Promise<Analytics> {
    console.log('hereeeee', createAnalyticsDto);
    try {
      const newAnalytics = this.analyticsRepository.create(createAnalyticsDto);
      await validateOrReject(newAnalytics);

      const analytics = await this.analyticsRepository.save(newAnalytics);
      return analytics;
    } catch (err) {
      return err.message;
    }
  }

  async findAll(
    pageName: string,
  ): Promise<{
    totalAnalytics: number;
    uniqueVisitors: number;
    averageTimeSpent: number;
  }> {
    try {
      console.log(pageName);
      const analytics =
        pageName === 'all'
          ? await this.analyticsRepository.find()
          : await this.analyticsRepository.find({ where: { pageName } });

      const totalAnalytics = analytics.length;

      const uniqueVisitors = new Set(analytics.map((item) => item.visitorId))
        .size;

      const totalTimesSpent = analytics.reduce(
        (acc, item) => acc + parseFloat(item.timeSpent),
        0,
      );
      const averageTimeSpent = totalTimesSpent / totalAnalytics;

      return {
        totalAnalytics,
        uniqueVisitors,
        averageTimeSpent,
      };
    } catch (err) {
      err.message;
    }
  }
}
