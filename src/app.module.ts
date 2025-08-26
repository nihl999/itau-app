import { MiddlewareConsumer, Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { CoreModule } from './modules/core/core.module';
import { LoggerMiddleware } from './modules/shared/infra/middlewares/http-logger.middleware';

@Module({
  imports: [CoreModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
