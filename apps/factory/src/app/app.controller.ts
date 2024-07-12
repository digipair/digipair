import { All, Body, Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { promises } from 'fs';
import { AppService } from './app.service';

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

  @All('*')
  async domain(@Res() res: Response, @Req() request: Request, @Body() body: any) {
    const assets = process.env.DIGIPAIRAI_ASSETS_PATH || './dist/apps/factory/assets';
    const host = request.headers.host.split(':')[0];
    const path = request.params['0'];
    let params: string[], team: string, digipair: string, reasoning: string;

    const domains = JSON.parse(await promises.readFile(`${assets}/domains.json`, 'utf8'));

    if (path === 'favicon.ico') {
      return res.send(null);
    }

    if (domains[host]) {
      params = path.split('/');
      team = domains[host].team;
      digipair = domains[host].digipair;
      reasoning = params[0];
      params = params.slice(1);

      if (!reasoning) {
        res.redirect(`/${domains[host].reasoning}`);
        return;
      }
    } else {
      params = path.split('/');
      team = params[0];
      digipair = params[1];
      reasoning = params[2];
      params = params.slice(3);
    }

    const method = request.method;
    res.send(
      await this.appService.agent(
        assets,
        digipair,
        reasoning,
        body,
        params,
        method,
        request.headers,
      ),
    );
  }
}
