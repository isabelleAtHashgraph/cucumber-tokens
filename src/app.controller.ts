import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInformation(): string {
    return this.appService.getAllInformation();
  }

  @Post()
  create(): string {
    return this.appService.createMessage();
  }
}
