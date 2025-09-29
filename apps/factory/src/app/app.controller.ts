import { All, Body, Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { promises } from 'fs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/public/*')
  async public(@Res() res: Response, @Req() req: Request) {
    const filePath = `${__dirname}/assets/public${req.url.replace('/public', '')}`;

    res.sendFile(filePath, err => {
      if (err) {
        res.status(404).send('File not found');
      }
    });
  }

  @All('*')
  async domain(
    @Res() res: Response,
    @Req() request: Request,
    @Body() body: any,
    @Query() query: any,
  ) {
    const assets = process.env.DIGIPAIR_FACTORY_PATH || './factory';
    const host = request.headers.host.split(':')[0];
    const path = request.params['0'];
    let params: string[], digipair: string, reasoning: string;

    const domains = JSON.parse(await promises.readFile(`${assets}/domains.json`, 'utf8'));

    if (path === 'favicon.ico') {
      return res.send(null);
    }

    params = path.split('/');
    if (domains[host]) {
      digipair = domains[host].digipair;
      reasoning = params[0];
      params = params.slice(1);

      if (!reasoning) {
        res.redirect(`/${domains[host].reasoning}`);
        return;
      }
    } else if (params.length < 2) {
      res.redirect(`/studio/workers`);
      return;
    } else {
      digipair = params[0];
      reasoning = params[1];
      params = params.slice(2);
    }

    try {
      const skillProcess = require('@digipair/skill-process');
      const { id, signal } = skillProcess.add(digipair, reasoning, null);
      const method = request.method;

      res.on('close', () => {
        skillProcess.remove(id);
      });

      const result = await this.appService.agent(
        `${assets}/digipairs`,
        digipair,
        reasoning,
        body,
        params,
        query,
        method,
        request.headers,
        {},
        request,
        res,
        signal,
        true,
      );
      
      res.send(result);
    } catch (error) {
      if (error.type !== 'DIGIPAIR_KEEPALIVE') {
        throw error;
      }
    }
  }
}
