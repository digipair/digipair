/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { spawn } from 'child_process';

class MaikitdownService {
  async convert(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      file,
      path = context.privates?.MARKITDOWN_PATH ?? process.env['MARKITDOWN_PATH'] ?? 'markitdown',
    } = params;

    return new Promise((resolve, reject) => {
      // Spawn the markitdown process
      const markitdown = spawn(path);

      let markdown = '';
      let errorOutput = '';

      // Listen for data from the stdout stream
      markitdown.stdout.on('data', data => {
        markdown += data.toString();
      });

      // Listen for data from the stderr stream
      markitdown.stderr.on('data', data => {
        errorOutput += data.toString();
      });

      // Handle the close event
      markitdown.on('close', code => {
        if (code !== 0) {
          return reject(new Error(`markitdown process exited with code ${code}: ${errorOutput}`));
        }
        resolve(markdown);
      });

      // Write the decoded PDF content to stdin
      markitdown.stdin.write(Buffer.from(file.replace(/^data:.*;base64,/, ''), 'base64'));
      markitdown.stdin.end();
    });
  }
}

export const convert = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MaikitdownService().convert(params, pinsSettingsList, context);
