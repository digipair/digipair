import { All, Body, Controller, Get, Param, Req } from '@nestjs/common';

import { AppService } from './app.service';
import { promises } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/assets/silent-check-sso.html')
  async silentCheckSso() {
    const content = await promises.readFile(
      './dist/apps/factory/assets/silent-check-sso.html',
      'utf8',
    );
    return content;
  }

  @All('/:digipair/:reasoning*?')
  api(
    @Param('digipair') digipair: string,
    @Param('reasoning') reasoning: string,
    @Req() request: Request,
    @Body() body: any,
  ) {
    if (digipair === 'favicon.ico' || digipair === 'robots.txt' || digipair === 'sitemap.xml') {
      return null;
    }

    const params = (request as any).params['0']?.replace(/^\//g, '').split('/');
    const method = request.method;
    return this.appService.agent(digipair, reasoning, body, params, method, request.headers);
  }
}
