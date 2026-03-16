import {
  assignmentsFromWeek,
  assignmentStatus,
  SessionHandle,
  translateToWeekNumber,
} from 'pawnote';

import { Homework, ReturnFormat } from '../shared/homework';
import { error } from '../utils/logger';

export function getDateRangeOfWeek(weekNumber: number, year = new Date().getFullYear()) {
  const janFirst = new Date(year, 0, 1);
  const daysOffset = (weekNumber - 1) * 7;
  const weekStart = new Date(janFirst.setDate(janFirst.getDate() + daysOffset));
  const day = weekStart.getDay();
  const diff = weekStart.getDate() - day + (day <= 4 ? 1 : 8);
  const start = new Date(weekStart.setDate(diff));
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}

/**
 * Fetches homework assignments from PRONOTE for the current week.
 * @param {SessionHandle} session - The session handle for the PRONOTE account.
 * @param {string} accountId - The ID of the account requesting the homeworks.
 * @returns {Promise<Homework[]>} A promise that resolves to an array of Homework objects.
 */
export async function fetchPronoteHomeworks(
  session: SessionHandle,
  accountId: string,
  weekNumberRaw: number,
): Promise<Homework[]> {
  const result: Homework[] = [];

  const { start } = getDateRangeOfWeek(weekNumberRaw);
  const weekNumber = translateToWeekNumber(start, session.instance.firstMonday);
  if (session) {
    const homeworks = await assignmentsFromWeek(session, weekNumber);
    for (const homework of homeworks) {
      result.push({
        id: homework.id,
        subject: homework.subject.name,
        content: homework.description,
        dueDate: homework.deadline,
        isDone: homework.done,
        returnFormat: homework.return.kind === 1 ? ReturnFormat.PAPER : ReturnFormat.FILE_UPLOAD,
        attachments: homework.attachments.map(attachment => ({
          type: attachment.kind,
          name: attachment.name,
          url: attachment.url,
          createdByAccount: accountId,
        })),
        evaluation: false,
        custom: false,
        createdByAccount: accountId,
      });
    }
  }

  return result;
}

export async function setPronoteHomeworkAsDone(
  session: SessionHandle,
  homework: Homework,
  status?: boolean,
): Promise<Homework> {
  if (homework.fromCache) {
    error("You can't set data from cache as done.");
  }

  try {
    await assignmentStatus(session, homework.id, status || !homework.isDone);
  } catch (err) {
    error(String(err));
  }
  return {
    ...homework,
    isDone: status || !homework.isDone,
    progress: (status || !homework.isDone) === true ? 1 : 0,
  };
}
