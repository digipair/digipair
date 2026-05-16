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
exports.Pronote = void 0;
var pawnote_1 = require("pawnote");
var attendance_1 = require("./attendance");
var canteen_1 = require("./canteen");
var chat_1 = require("./chat");
var grades_1 = require("./grades");
var homework_1 = require("./homework");
var news_1 = require("./news");
var refresh_1 = require("./refresh");
var timetable_1 = require("./timetable");
var types_1 = require("../shared/types");
var logger_1 = require("../utils/logger");
var Pronote = /** @class */ (function () {
    function Pronote(accountId, authData) {
        this.accountId = accountId;
        this.authData = authData;
        this.displayName = 'PRONOTE';
        this.capabilities = [types_1.Capabilities.REFRESH];
        this.session = undefined;
        this.tokenExpiration = new Date().getTime() + 5 * 60 * 1000;
    }
    Pronote.prototype.checkTokenValidty = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refreshAccount(this.authData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Pronote.prototype.refreshAccount = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var refresh, tabCapabilities, _i, _a, tab, capability;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, (0, refresh_1.refreshPronoteAccount)(this.accountId, credentials)];
                    case 1:
                        refresh = _d.sent();
                        this.authData = refresh.auth;
                        this.session = refresh.session;
                        tabCapabilities = (_b = {},
                            _b[pawnote_1.TabLocation.Assignments] = types_1.Capabilities.HOMEWORK,
                            _b[pawnote_1.TabLocation.Discussions] = [
                                types_1.Capabilities.CHAT_READ,
                                types_1.Capabilities.CHAT_REPLY,
                                types_1.Capabilities.CHAT_CREATE,
                            ],
                            _b[pawnote_1.TabLocation.Grades] = types_1.Capabilities.GRADES,
                            _b[pawnote_1.TabLocation.Notebook] = [types_1.Capabilities.ATTENDANCE, types_1.Capabilities.ATTENDANCE_PERIODS],
                            _b[pawnote_1.TabLocation.News] = types_1.Capabilities.NEWS,
                            _b[pawnote_1.TabLocation.Menus] = types_1.Capabilities.CANTEEN_MENU,
                            _b[pawnote_1.TabLocation.Timetable] = types_1.Capabilities.TIMETABLE,
                            _b);
                        for (_i = 0, _a = this.session.user.authorizations.tabs; _i < _a.length; _i++) {
                            tab = _a[_i];
                            capability = tabCapabilities[tab];
                            if (capability) {
                                (_c = this.capabilities).push.apply(_c, (Array.isArray(capability) ? capability : [capability]));
                            }
                        }
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Pronote.prototype.getHomeworks = function (weekNumber) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, homework_1.fetchPronoteHomeworks)(this.session, this.accountId, weekNumber)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getHomeworks');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getNews = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, news_1.fetchPronoteNews)(this.session, this.accountId)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getNews');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getGradesForPeriod = function (period) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, grades_1.fetchPronoteGrades)(this.session, this.accountId, period)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getGradesForPeriod');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getGradesPeriods = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, grades_1.fetchPronoteGradePeriods)(this.session, this.accountId)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getGradesPeriods');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getAttendanceForPeriod = function (period) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, attendance_1.fetchPronoteAttendance)(this.session, this.accountId, period)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getAttendanceForPeriod');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getAttendancePeriods = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, attendance_1.fetchPronoteAttendancePeriods)(this.session, this.accountId)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getAttendancePeriods');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getWeeklyCanteenMenu = function (startDate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, canteen_1.fetchPronoteCanteenMenu)(this.session, this.accountId, startDate)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getWeeklyCanteenMenu');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getWeeklyTimetable = function (weekNumber, date) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, timetable_1.fetchPronoteWeekTimetable)(this.session, this.accountId, weekNumber, date)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getWeeklyTimetable');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getCourseResources = function (course) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, timetable_1.fetchPronoteCourseResources)(this.session, course)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getWeeklyTimetable');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getChats = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, chat_1.fetchPronoteChats)(this.session, this.accountId)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getChats');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getChatRecipients = function (chat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, chat_1.fetchPronoteChatRecipients)(this.session, chat)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getChatRecipients');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getChatMessages = function (chat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, chat_1.fetchPronoteChatMessages)(this.session, this.accountId, chat)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getChatMessages');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.getRecipientsAvailableForNewChat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, chat_1.fetchPronoteRecipients)(this.session)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.getRecipientsAvailableForNewChat');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.sendMessageInChat = function (chat, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (!this.session) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, chat_1.sendPronoteMessageInChat)(this.session, chat, content)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        (0, logger_1.error)('Session is not valid', 'Pronote.sendMessageInChat');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.setNewsAsAcknowledged = function (news) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, news_1.setPronoteNewsAsAcknowledged)(this.session, news)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.setNewsAsAcknowledged');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.setHomeworkCompletion = function (homework, state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, homework_1.setPronoteHomeworkAsDone)(this.session, homework, state)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Pronote.setHomeworkCompletion');
                        return [2 /*return*/];
                }
            });
        });
    };
    Pronote.prototype.createMail = function (subject, content, recipients) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTokenValidty()];
                    case 1:
                        _a.sent();
                        if (this.session) {
                            return [2 /*return*/, (0, chat_1.createPronoteMail)(this.session, this.accountId, subject, content, recipients)];
                        }
                        (0, logger_1.error)('Session is not valid', 'Skolengo.createMail');
                        return [2 /*return*/];
                }
            });
        });
    };
    return Pronote;
}());
exports.Pronote = Pronote;
