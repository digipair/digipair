import {
  All,
  Body,
  Controller,
  DefaultValuePipe,
  Param,
  ParseArrayPipe,
  Req,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('/:digipair/:reasoning*?')
  api(
    @Param('digipair') digipair: string,
    @Param('reasoning') reasoning: string,
    @Req() request: Request,
    @Body() body: any,
  ) {
    const params = (request as any).params['0'].replace(/^\//g, '').split('/');
    return this.appService.agent(digipair, reasoning, body, params);
  }
}
