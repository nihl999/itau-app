import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const start = performance.now();

    res.on('finish', () => {
      const ms = performance.now() - start;
      this.logger.log(`${method} ${originalUrl} ${res.statusCode} - ${ms}ms`);
    });

    next();
  }
}
