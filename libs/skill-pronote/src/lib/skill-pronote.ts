/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';
import { Pronote } from './pronote';
import { News, Period } from 'pawnote';
import { Attendance } from './shared/attendance';
import { CanteenMenu } from './shared/canteen';
import { Chat, Recipient, Message } from './shared/chat';
import { PeriodGrades } from './shared/grade';
import { Homework } from './shared/homework';
import { CourseDay, CourseResource } from './shared/timetable';

class PronoteService {
  async connection(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { pronoteURL, username, password } = params;
    return new Pronote('', {
      pronoteURL,
      username,
      password,
      deviceUUID: '74cc9a22-37ce-4789-998d-c736d54555a4',
    });
  }

  async getHomeworks(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Homework[]> {
    const { connection = context.privates.PRONOTE, weekNumber } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;
    return instance.getHomeworks(weekNumber);
  }

  async getNews(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<News[]> {
    const { connection = context.privates.PRONOTE } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getNews() as any;
  }

  async getGradesForPeriod(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<PeriodGrades> {
    const { connection = context.privates.PRONOTE, period } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getGradesForPeriod(period);
  }

  async getGradesPeriods(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Period[]> {
    const { connection = context.privates.PRONOTE } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getGradesPeriods() as any;
  }

  async getAttendanceForPeriod(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Attendance> {
    const { connection = context.privates.PRONOTE, period } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getAttendanceForPeriod(period);
  }

  async getAttendancePeriods(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Period[]> {
    const { connection = context.privates.PRONOTE } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getAttendancePeriods() as any;
  }

  async getWeeklyCanteenMenu(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<CanteenMenu[]> {
    const { connection = context.privates.PRONOTE, startDate } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getWeeklyCanteenMenu(startDate) as any;
  }

  async getWeeklyTimetable(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<CourseDay[]> {
    const { connection = context.privates.PRONOTE, weekNumber, date } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getWeeklyTimetable(weekNumber, date) as any;
  }

  async getCourseResources(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<CourseResource[]> {
    const { connection = context.privates.PRONOTE, course } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getCourseResources(course) as any;
  }

  async getChats(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<Chat[]> {
    const { connection = context.privates.PRONOTE } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getChats() as any;
  }

  async getChatRecipients(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Recipient[]> {
    const { connection = context.privates.PRONOTE, chat } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getChatRecipients(chat) as any;
  }

  async getChatMessages(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Message[]> {
    const { connection = context.privates.PRONOTE, chat } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getChatMessages(chat) as any;
  }

  async getRecipientsAvailableForNewChat(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Recipient[]> {
    const { connection = context.privates.PRONOTE } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.getRecipientsAvailableForNewChat() as any;
  }

  async sendMessageInChat(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<void> {
    const { connection = context.privates.PRONOTE, chat, content } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    await instance.sendMessageInChat(chat, content);
  }

  async setNewsAsAcknowledged(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<News> {
    const { connection = context.privates.PRONOTE, news } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.setNewsAsAcknowledged(news) as any;
  }

  async setHomeworkCompletion(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<Homework> {
    const { connection = context.privates.PRONOTE, homework, state } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.setHomeworkCompletion(homework, state) as any;
  }

  async createMail(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<Chat> {
    const { connection = context.privates.PRONOTE, subject, content, recipients } = params;

    const instance = (await executePinsList(
      connection,
      context,
      `${context.__PATH__}.connection`,
    )) as Pronote;

    return instance.createMail(subject, content, recipients) as any;
  }
}

export const connection = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().connection(params, pinsSettingsList, context);

export const getHomeworks = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getHomeworks(params, pinsSettingsList, context);

export const getNews = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getNews(params, pinsSettingsList, context);

export const getGradesForPeriod = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getGradesForPeriod(params, pinsSettingsList, context);

export const getGradesPeriods = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getGradesPeriods(params, pinsSettingsList, context);

export const getAttendanceForPeriod = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new PronoteService().getAttendanceForPeriod(params, pinsSettingsList, context);

export const getAttendancePeriods = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getAttendancePeriods(params, pinsSettingsList, context);

export const getWeeklyCanteenMenu = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getWeeklyCanteenMenu(params, pinsSettingsList, context);

export const getWeeklyTimetable = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getWeeklyTimetable(params, pinsSettingsList, context);

export const getCourseResources = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getCourseResources(params, pinsSettingsList, context);

export const getChats = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getChats(params, pinsSettingsList, context);

export const getChatRecipients = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getChatRecipients(params, pinsSettingsList, context);

export const getChatMessages = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().getChatMessages(params, pinsSettingsList, context);

export const getRecipientsAvailableForNewChat = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new PronoteService().getRecipientsAvailableForNewChat(params, pinsSettingsList, context);

export const sendMessageInChat = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().sendMessageInChat(params, pinsSettingsList, context);

export const setNewsAsAcknowledged = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new PronoteService().setNewsAsAcknowledged(params, pinsSettingsList, context);

export const setHomeworkCompletion = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new PronoteService().setHomeworkCompletion(params, pinsSettingsList, context);

export const createMail = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PronoteService().createMail(params, pinsSettingsList, context);
