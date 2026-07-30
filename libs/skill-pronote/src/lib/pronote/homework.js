"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getDateRangeOfWeek = getDateRangeOfWeek;
exports.fetchPronoteHomeworks = fetchPronoteHomeworks;
exports.setPronoteHomeworkAsDone = setPronoteHomeworkAsDone;
var pawnote_1 = require("pawnote");
var homework_1 = require("../shared/homework");
var logger_1 = require("../utils/logger");
function getDateRangeOfWeek(weekNumber, year) {
    if (year === void 0) { year = new Date().getFullYear(); }
    var janFirst = new Date(year, 0, 1);
    var daysOffset = (weekNumber - 1) * 7;
    var weekStart = new Date(janFirst.setDate(janFirst.getDate() + daysOffset));
    var day = weekStart.getDay();
    var diff = weekStart.getDate() - day + (day <= 4 ? 1 : 8);
    var start = new Date(weekStart.setDate(diff));
    var end = new Date(start);
    end.setDate(start.getDate() + 6);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
/**
 * Fetches homework assignments from PRONOTE for the current week.
 * @param {SessionHandle} session - The session handle for the PRONOTE account.
 * @param {string} accountId - The ID of the account requesting the homeworks.
 * @returns {Promise<Homework[]>} A promise that resolves to an array of Homework objects.
 */
function fetchPronoteHomeworks(session, accountId, weekNumberRaw) {
    return __awaiter(this, void 0, void 0, function () {
        var result, start, weekNumber, homeworks, _i, homeworks_1, homework;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = [];
                    start = getDateRangeOfWeek(weekNumberRaw).start;
                    weekNumber = (0, pawnote_1.translateToWeekNumber)(start, session.instance.firstMonday);
                    if (!session) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, pawnote_1.assignmentsFromWeek)(session, weekNumber)];
                case 1:
                    homeworks = _a.sent();
                    for (_i = 0, homeworks_1 = homeworks; _i < homeworks_1.length; _i++) {
                        homework = homeworks_1[_i];
                        result.push({
                            id: homework.id,
                            subject: homework.subject.name,
                            content: homework.description,
                            dueDate: homework.deadline,
                            isDone: homework.done,
                            returnFormat: homework.return.kind === 1 ? homework_1.ReturnFormat.PAPER : homework_1.ReturnFormat.FILE_UPLOAD,
                            attachments: homework.attachments.map(function (attachment) { return ({
                                type: attachment.kind,
                                name: attachment.name,
                                url: attachment.url,
                                createdByAccount: accountId,
                            }); }),
                            evaluation: false,
                            custom: false,
                            createdByAccount: accountId,
                        });
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/, result];
            }
        });
    });
}
function setPronoteHomeworkAsDone(session, homework, status) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (homework.fromCache) {
                        (0, logger_1.error)("You can't set data from cache as done.");
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, pawnote_1.assignmentStatus)(session, homework.id, status || !homework.isDone)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    (0, logger_1.error)(String(err_1));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, __assign(__assign({}, homework), { isDone: status || !homework.isDone, progress: (status || !homework.isDone) === true ? 1 : 0 })];
            }
        });
    });
}
