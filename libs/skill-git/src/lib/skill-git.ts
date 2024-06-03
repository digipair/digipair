import { PinsSettings } from '@digipair/engine';
import { simpleGit } from 'simple-git';

class GitService {
  async commit(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const now = new Date();
    const {
      path = context.privates.GIT_PATH || '.',
      selector = '*',
      message = `${now.getUTCFullYear()}-${(now.getUTCMonth() + 1)
        .toString()
        .padStart(2, '0')}-${now.getUTCDate().toString().padStart(2, '0')}-${now
        .getUTCHours()
        .toString()
        .padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')}:${now
        .getUTCSeconds()
        .toString()
        .padStart(2, '0')}:${now.getUTCMilliseconds().toString().padStart(3, '0')}`,
    } = params;

    return await simpleGit(path).add(selector).commit(message);
  }

  async push(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { path = context.privates.GIT_PATH || '.', options = [] } = params;

    return await simpleGit(path).push(options);
  }

  async show(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { path = context.privates.GIT_PATH || '.', options = [] } = params;

    return await simpleGit(path).show(options);
  }

  async log(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.GIT_PATH || '.',
      file,
      format,
      from,
      mailMap,
      maxCount,
      multiLine,
      splitter,
      strictDate,
      symmetric,
      to,
    } = params;

    return await simpleGit(path).log({
      file,
      format,
      from,
      mailMap,
      maxCount,
      multiLine,
      splitter,
      strictDate,
      symmetric,
      to,
    });
  }
}

export const commit = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new GitService().commit(params, pinsSettingsList, context);

export const push = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new GitService().push(params, pinsSettingsList, context);

export const show = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new GitService().show(params, pinsSettingsList, context);

export const log = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new GitService().log(params, pinsSettingsList, context);
