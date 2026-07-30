"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPronoteAttendance = fetchPronoteAttendance;
exports.fetchPronoteAttendancePeriods = fetchPronoteAttendancePeriods;
var pawnote_1 = require("pawnote");
var logger_1 = require("../utils/logger");
/**
 * Fetches student Notebook from PRONOTE for a specified periot.
 * @param {SessionHandle} session - The session handle for the PRONOTE session.
 * @param {string} period - The name of the period to fetch attendance for.
 * @param {string} accountId - The ID of the account making the request.
 * @return {Promise<Attendance>} - A promise that resolves to the attendance data for the specified period.
 */
function fetchPronoteAttendance(session, accountId, period) {
    return __awaiter(this, void 0, void 0, function () {
        var attendanceTab, pawnotePeriod, attendance, delays, absences, punishments, observations;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteAttendance');
                    }
                    attendanceTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Notebook);
                    if (!attendanceTab) {
                        (0, logger_1.error)('Attendance tab not found in session', 'fetchPronoteAttendance');
                    }
                    pawnotePeriod = attendanceTab.periods.find(function (p) { return p.name === period; });
                    if (!pawnotePeriod) {
                        (0, logger_1.error)("Period \"".concat(period, "\" not found in attendance tab"), 'fetchPronoteGrades');
                    }
                    return [4 /*yield*/, (0, pawnote_1.notebook)(session, pawnotePeriod)];
                case 1:
                    attendance = _a.sent();
                    delays = mapDelays(attendance.delays, accountId).sort(function (a, b) { return a.givenAt.getTime() - b.givenAt.getTime(); });
                    absences = mapAbsences(attendance.absences, accountId).sort(function (a, b) { return a.from.getTime() - b.from.getTime(); });
                    punishments = mapPunishments(attendance.punishments, accountId).sort(function (a, b) { return a.givenAt.getTime() - b.givenAt.getTime(); });
                    observations = mapObservations(attendance.observations).sort(function (a, b) { return a.givenAt.getTime() - b.givenAt.getTime(); });
                    return [2 /*return*/, {
                            delays: delays,
                            absences: absences,
                            punishments: punishments,
                            observations: observations,
                            createdByAccount: accountId,
                        }];
            }
        });
    });
}
/**
 * Fetches all attendance periods from PRONOTE.
 * @param {SessionHandle} session - The session handle for the PRONOTE session.
 * @param {string} accountId - The ID of the account making the request.
 * @return {Promise<Array<Period>>} - A promise that resolves to an array of attendance periods.
 */
function fetchPronoteAttendancePeriods(session, accountId) {
    return __awaiter(this, void 0, void 0, function () {
        var attendanceTab;
        return __generator(this, function (_a) {
            attendanceTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Notebook);
            if (!attendanceTab) {
                (0, logger_1.error)('Attendance tab not found in session', 'fetchPronotePeriods');
            }
            return [2 /*return*/, attendanceTab.periods.map(function (p) { return ({
                    id: p.id,
                    name: p.name,
                    start: p.startDate,
                    end: p.endDate,
                    createdByAccount: accountId,
                }); })];
        });
    });
}
/**
 * Maps a NotebookObservation[] to a shared Observation[].
 * @param observations
 */
function mapObservations(observations) {
    return observations.map(function (o) {
        var _a;
        return ({
            id: o.id,
            givenAt: o.date,
            sectionName: o.name,
            sectionType: o.kind,
            subjectName: (_a = o.subject) === null || _a === void 0 ? void 0 : _a.name,
            shouldParentsJustify: o.shouldParentsJustify,
            reason: o.reason,
        });
    });
}
/**
 * Maps NotebookDelay[] to shared Delay[].
 * @param delays
 */
function mapDelays(delays, accountId) {
    return delays.map(function (d) { return ({
        id: d.id,
        givenAt: d.date,
        reason: d.reason,
        justified: d.justified,
        duration: d.minutes,
        createdByAccount: accountId,
    }); });
}
/**
 * Maps NotebookAbsence[] to shared Absence[].
 * @param absences
 */
function mapAbsences(absences, accountId) {
    return absences.map(function (a) { return ({
        id: a.id,
        from: a.startDate,
        to: a.endDate,
        reason: a.reason,
        justified: a.justified,
        timeMissed: a.hoursMissed * 60 + a.minutesMissed,
        createdByAccount: accountId,
    }); });
}
/**
 * Maps NotebookPunishment[] to shared Punishment[].
 * @param punishments
 * @param accountId
 */
function mapPunishments(punishments, accountId) {
    return punishments.map(function (p) { return ({
        id: p.id,
        givenAt: p.dateGiven,
        givenBy: p.giver,
        exclusion: p.exclusion,
        duringLesson: p.isDuringLesson,
        homework: {
            text: p.workToDo,
            documents: p.workToDoDocuments.map(function (attachment) { return ({
                type: attachment.kind,
                name: attachment.name,
                url: attachment.url,
                createdByAccount: accountId,
            }); }),
        },
        reason: {
            text: p.reasons.join(', '),
            circumstances: p.circumstances,
            documents: p.circumstancesDocuments.map(function (attachment) { return ({
                type: attachment.kind,
                name: attachment.name,
                url: attachment.url,
                createdByAccount: accountId,
            }); }),
        },
        nature: p.title,
        duration: p.durationMinutes,
    }); });
}
