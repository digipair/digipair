import { SessionHandle } from 'pawnote';

import { Pronote } from '../pronote';
import { Attendance } from './attendance';
import {
  Booking,
  BookingDay,
  CanteenHistoryItem,
  CanteenKind,
  CanteenMenu,
  QRCode,
} from './canteen';
import { Chat, Message, Recipient } from './chat';
import { Period, PeriodGrades } from './grade';
import { Homework } from './homework';
import { News } from './news';
import { Course, CourseDay, CourseResource } from './timetable';

import { Balance } from './balance';
import { Kid } from './kid';

/** Represents a plugin for a school service.
 *
 * @property {string} displayName - The name of the service displayed to the user.
 * @property {Services} service - The identifier for the service.
 * @property {function} refreshAccount - Function used to refresh the account credentials.
 */
export interface SchoolServicePlugin {
  displayName: string;
  capabilities: Capabilities[];
  session:
    | SessionHandle
    | undefined;

  refreshAccount: () => Promise<
    Pronote
  >;
  getKids?: () => Kid[];
  getCanteenKind?: () => CanteenKind;
  getHomeworks?: (weekNumber: number) => Promise<Homework[]>;
  getNews?: () => Promise<News[]>;
  getGradesForPeriod?: (period: Period, kid?: Kid) => Promise<PeriodGrades>;
  getGradesPeriods?: () => Promise<Period[]>;
  getAttendanceForPeriod?: (period: string) => Promise<Attendance>;
  getAttendancePeriods?: () => Promise<Period[]>;
  getWeeklyCanteenMenu?: (startDate: Date) => Promise<CanteenMenu[]>;
  getChats?: () => Promise<Chat[]>;
  getChatRecipients?: (chat: Chat) => Promise<Recipient[]>;
  getChatMessages?: (chat: Chat) => Promise<Message[]>;
  getRecipientsAvailableForNewChat?: () => Promise<Recipient[]>;
  getCourseResources?: (course: Course) => Promise<CourseResource[]>;
  getWeeklyTimetable?: (weekNumber: number, date: Date) => Promise<CourseDay[]>;
  sendMessageInChat?: (chat: Chat, content: string) => Promise<void>;
  setNewsAsAcknowledged?: (news: News) => Promise<News>;
  setHomeworkCompletion?: (homework: Homework, state?: boolean) => Promise<Homework>;
  createMail?: (
    subject: string,
    content: string,
    recipients: Recipient[],
    cc?: Recipient[],
    bcc?: Recipient[],
  ) => Promise<Chat>;
  getCanteenBalances?: () => Promise<Balance[]>;
  getCanteenTransactionsHistory?: () => Promise<CanteenHistoryItem[]>;
  getCanteenQRCodes?: () => Promise<QRCode>;
  getCanteenBookingWeek?: (weekNumber: number) => Promise<BookingDay[]>;
  setMealAsBooked?: (meal: Booking, booked?: boolean) => Promise<Booking>;
}

/*
 *
 * Represents the capabilities of a school service plugin.
 * Used to determine what features the plugin supports.
 */
export enum Capabilities {
  REFRESH,
  HOMEWORK,
  NEWS,
  GRADES,
  ATTENDANCE,
  ATTENDANCE_PERIODS,
  CANTEEN_MENU,
  CHAT_READ,
  CHAT_CREATE,
  CHAT_REPLY,
  TIMETABLE,
  HAVE_KIDS,
  CANTEEN_BALANCE,
  CANTEEN_HISTORY,
  CANTEEN_BOOKINGS,
  CANTEEN_QRCODE,
}

/**
 * Represents a generic interface for objects that have a createdByAccount property.
 *
 * @property {string} createdByAccount - The local account that created the object, useful for the manager.
 */
export interface GenericInterface {
  createdByAccount: string;
  fromCache?: boolean;
  kidName?: string;
}

export type FetchOptions<T> = {
  clientId?: string;
  fallback?: () => Promise<T>;
  saveToCache?: (data: T) => Promise<void>;
};
