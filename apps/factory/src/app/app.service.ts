import { executePins } from '@digipair/engine';
import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  async agent(digipair: string, reasoning: string, body: any): Promise<any> {
    let content: string;
    
    content = await promises.readFile(join(__dirname, `/assets/digipairs/${digipair}/config.json`), 'utf8');
    const config = JSON.parse(content);

    content = await promises.readFile(join(__dirname, `/assets/digipairs/${digipair}/${reasoning}.json`), 'utf8');
    const settings = JSON.parse(content);

    const context = {
      private: config.private,
      variables: {
        ...config.variables,
      },
      request: {
        digipair,
        reasoning,
        body,
      },
    };

    const options = {
      libraries: config.libraries,
    };

    const result = executePins(settings, context, options);

    return result;
  }
}
