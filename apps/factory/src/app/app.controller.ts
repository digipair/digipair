import { All, Body, Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('/:digipair/:reasoning')
  api(@Param('digipair') digipair: string, @Param('reasoning') reasoning: string, @Body() body: any) {
    return this.appService.agent(digipair, reasoning, body);
  }
}
