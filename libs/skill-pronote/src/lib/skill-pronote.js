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
exports.createMail = exports.setHomeworkCompletion = exports.setNewsAsAcknowledged = exports.sendMessageInChat = exports.getRecipientsAvailableForNewChat = exports.getChatMessages = exports.getChatRecipients = exports.getChats = exports.getCourseResources = exports.getWeeklyTimetable = exports.getWeeklyCanteenMenu = exports.getAttendancePeriods = exports.getAttendanceForPeriod = exports.getGradesPeriods = exports.getGradesForPeriod = exports.getNews = exports.getHomeworks = exports.connection = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
var engine_1 = require("@digipair/engine");
var pronote_1 = require("./pronote");
var PronoteService = /** @class */ (function () {
    function PronoteService() {
    }
    PronoteService.prototype.connection = function (params, _pinsSettingsList, _context) {
        return __awaiter(this, void 0, void 0, function () {
            var pronoteURL, username, password;
            return __generator(this, function (_a) {
                pronoteURL = params.pronoteURL, username = params.username, password = params.password;
                return [2 /*return*/, new pronote_1.Pronote('', {
                        pronoteURL: pronoteURL,
                        username: username,
                        password: password,
                        deviceUUID: '74cc9a22-37ce-4789-998d-c736d54555a4',
                    })];
            });
        });
    };
    PronoteService.prototype.getHomeworks = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, weekNumber, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, weekNumber = params.weekNumber;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, connection.getHomeworks(weekNumber)];
                }
            });
        });
    };
    PronoteService.prototype.getNews = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getNews()];
                }
            });
        });
    };
    PronoteService.prototype.getGradesForPeriod = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, period, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, period = params.period;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getGradesForPeriod(period)];
                }
            });
        });
    };
    PronoteService.prototype.getGradesPeriods = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getGradesPeriods()];
                }
            });
        });
    };
    PronoteService.prototype.getAttendanceForPeriod = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, period, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, period = params.period;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getAttendanceForPeriod(period)];
                }
            });
        });
    };
    PronoteService.prototype.getAttendancePeriods = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getAttendancePeriods()];
                }
            });
        });
    };
    PronoteService.prototype.getWeeklyCanteenMenu = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, startDate, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, startDate = params.startDate;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getWeeklyCanteenMenu(startDate)];
                }
            });
        });
    };
    PronoteService.prototype.getWeeklyTimetable = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, weekNumber, date, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, weekNumber = params.weekNumber, date = params.date;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getWeeklyTimetable(weekNumber, date)];
                }
            });
        });
    };
    PronoteService.prototype.getCourseResources = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, course, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, course = params.course;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getCourseResources(course)];
                }
            });
        });
    };
    PronoteService.prototype.getChats = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getChats()];
                }
            });
        });
    };
    PronoteService.prototype.getChatRecipients = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, chat, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, chat = params.chat;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getChatRecipients(chat)];
                }
            });
        });
    };
    PronoteService.prototype.getChatMessages = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, chat, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, chat = params.chat;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getChatMessages(chat)];
                }
            });
        });
    };
    PronoteService.prototype.getRecipientsAvailableForNewChat = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.getRecipientsAvailableForNewChat()];
                }
            });
        });
    };
    PronoteService.prototype.sendMessageInChat = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, chat, content, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, chat = params.chat, content = params.content;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [4 /*yield*/, instance.sendMessageInChat(chat, content)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PronoteService.prototype.setNewsAsAcknowledged = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, news, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, news = params.news;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.setNewsAsAcknowledged(news)];
                }
            });
        });
    };
    PronoteService.prototype.setHomeworkCompletion = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, homework, state, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, homework = params.homework, state = params.state;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.setHomeworkCompletion(homework, state)];
                }
            });
        });
    };
    PronoteService.prototype.createMail = function (params, _pinsSettingsList, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, connection, subject, content, recipients, instance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = params.connection, connection = _a === void 0 ? context.privates.PRONOTE : _a, subject = params.subject, content = params.content, recipients = params.recipients;
                        return [4 /*yield*/, (0, engine_1.executePinsList)(connection, context, "".concat(context.__PATH__, ".connection"))];
                    case 1:
                        instance = (_b.sent());
                        return [2 /*return*/, instance.createMail(subject, content, recipients)];
                }
            });
        });
    };
    return PronoteService;
}());
var connection = function (params, pinsSettingsList, context) {
    return new PronoteService().connection(params, pinsSettingsList, context);
};
exports.connection = connection;
var getHomeworks = function (params, pinsSettingsList, context) {
    return new PronoteService().getHomeworks(params, pinsSettingsList, context);
};
exports.getHomeworks = getHomeworks;
var getNews = function (params, pinsSettingsList, context) {
    return new PronoteService().getNews(params, pinsSettingsList, context);
};
exports.getNews = getNews;
var getGradesForPeriod = function (params, pinsSettingsList, context) {
    return new PronoteService().getGradesForPeriod(params, pinsSettingsList, context);
};
exports.getGradesForPeriod = getGradesForPeriod;
var getGradesPeriods = function (params, pinsSettingsList, context) {
    return new PronoteService().getGradesPeriods(params, pinsSettingsList, context);
};
exports.getGradesPeriods = getGradesPeriods;
var getAttendanceForPeriod = function (params, pinsSettingsList, context) { return new PronoteService().getAttendanceForPeriod(params, pinsSettingsList, context); };
exports.getAttendanceForPeriod = getAttendanceForPeriod;
var getAttendancePeriods = function (params, pinsSettingsList, context) {
    return new PronoteService().getAttendancePeriods(params, pinsSettingsList, context);
};
exports.getAttendancePeriods = getAttendancePeriods;
var getWeeklyCanteenMenu = function (params, pinsSettingsList, context) {
    return new PronoteService().getWeeklyCanteenMenu(params, pinsSettingsList, context);
};
exports.getWeeklyCanteenMenu = getWeeklyCanteenMenu;
var getWeeklyTimetable = function (params, pinsSettingsList, context) {
    return new PronoteService().getWeeklyTimetable(params, pinsSettingsList, context);
};
exports.getWeeklyTimetable = getWeeklyTimetable;
var getCourseResources = function (params, pinsSettingsList, context) {
    return new PronoteService().getCourseResources(params, pinsSettingsList, context);
};
exports.getCourseResources = getCourseResources;
var getChats = function (params, pinsSettingsList, context) {
    return new PronoteService().getChats(params, pinsSettingsList, context);
};
exports.getChats = getChats;
var getChatRecipients = function (params, pinsSettingsList, context) {
    return new PronoteService().getChatRecipients(params, pinsSettingsList, context);
};
exports.getChatRecipients = getChatRecipients;
var getChatMessages = function (params, pinsSettingsList, context) {
    return new PronoteService().getChatMessages(params, pinsSettingsList, context);
};
exports.getChatMessages = getChatMessages;
var getRecipientsAvailableForNewChat = function (params, pinsSettingsList, context) { return new PronoteService().getRecipientsAvailableForNewChat(params, pinsSettingsList, context); };
exports.getRecipientsAvailableForNewChat = getRecipientsAvailableForNewChat;
var sendMessageInChat = function (params, pinsSettingsList, context) {
    return new PronoteService().sendMessageInChat(params, pinsSettingsList, context);
};
exports.sendMessageInChat = sendMessageInChat;
var setNewsAsAcknowledged = function (params, pinsSettingsList, context) { return new PronoteService().setNewsAsAcknowledged(params, pinsSettingsList, context); };
exports.setNewsAsAcknowledged = setNewsAsAcknowledged;
var setHomeworkCompletion = function (params, pinsSettingsList, context) { return new PronoteService().setHomeworkCompletion(params, pinsSettingsList, context); };
exports.setHomeworkCompletion = setHomeworkCompletion;
var createMail = function (params, pinsSettingsList, context) {
    return new PronoteService().createMail(params, pinsSettingsList, context);
};
exports.createMail = createMail;
