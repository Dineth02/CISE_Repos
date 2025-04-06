import { Controller, Get } from '@nestjs/common';
'@nestjs/common'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + ' My name is John! <--changes made';
  }
}
