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
exports.fetchPronoteWeekTimetable = fetchPronoteWeekTimetable;
exports.fetchPronoteCourseResources = fetchPronoteCourseResources;
var pawnote_1 = require("pawnote");
var timetable_1 = require("../shared/timetable");
var logger_1 = require("../utils/logger");
function fetchPronoteWeekTimetable(session, accountId, weekNumberRaw, date) {
    return __awaiter(this, void 0, void 0, function () {
        var weekNumber, timetable, mappedCourses, dayMap, _i, mappedCourses_1, course, dayKey, day;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteTimetable');
                    }
                    weekNumber = (0, pawnote_1.translateToWeekNumber)(date, session.instance.firstMonday);
                    return [4 /*yield*/, (0, pawnote_1.timetableFromWeek)(session, weekNumber)];
                case 1:
                    timetable = _a.sent();
                    (0, pawnote_1.parseTimetable)(session, timetable, {
                        withSuperposedCanceledClasses: false,
                        withCanceledClasses: true,
                        withPlannedClasses: true,
                    });
                    mappedCourses = mapCourses(accountId, timetable.classes);
                    dayMap = {};
                    for (_i = 0, mappedCourses_1 = mappedCourses; _i < mappedCourses_1.length; _i++) {
                        course = mappedCourses_1[_i];
                        dayKey = course.from.toISOString().split('T')[0];
                        dayMap[dayKey] = dayMap[dayKey] || [];
                        dayMap[dayKey].push(course);
                    }
                    for (day in dayMap) {
                        dayMap[day].sort(function (a, b) { return a.from.getTime() - b.from.getTime(); });
                    }
                    return [2 /*return*/, Object.entries(dayMap).map(function (_a) {
                            var day = _a[0], courses = _a[1];
                            return ({
                                date: new Date(day),
                                courses: courses,
                            });
                        })];
            }
        });
    });
}
var mapCourses = function (accountId, courses) {
    var _a;
    var courseList = [];
    for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
        var c = courses_1[_i];
        var baseCourse = {
            from: c.startDate,
            to: c.endDate,
            backgroundColor: c.backgroundColor,
            additionalInfo: c.notes,
            createdByAccount: accountId,
        };
        if (c.is === 'lesson') {
            courseList.push(__assign({ subject: c.subject.name, id: c.id, type: timetable_1.CourseType.LESSON, room: c.classrooms.join(', '), teacher: c.teacherNames.join(', '), group: c.groupNames.join(', '), status: mapCourseStatus(c), customStatus: c.status, resourceId: c.lessonResourceID }, baseCourse));
        }
        else if (c.is === 'detention') {
            courseList.push(__assign({ id: c.id, type: timetable_1.CourseType.DETENTION, subject: (_a = c.title) !== null && _a !== void 0 ? _a : 'Detention', room: c.classrooms.join(', ') }, baseCourse));
        }
        else if (c.is === 'activity') {
            courseList.push(__assign({ id: c.id, type: timetable_1.CourseType.ACTIVITY, subject: c.title }, baseCourse));
        }
    }
    return courseList;
};
function fetchPronoteCourseResources(session, course) {
    return __awaiter(this, void 0, void 0, function () {
        var timetableTab, resources;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteCourseResources');
                    }
                    timetableTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Timetable);
                    if (!timetableTab) {
                        (0, logger_1.error)('Timetable tab not found in session', 'fetchPronoteCourseResources');
                    }
                    if (!course.resourceId) {
                        (0, logger_1.error)('Course resource ID is undefined', 'fetchPronoteCourseResources');
                    }
                    return [4 /*yield*/, (0, pawnote_1.resource)(session, course.resourceId)];
                case 1:
                    resources = (_a.sent()).contents;
                    return [2 /*return*/, resources.map(function (r) { return ({
                            title: r.title,
                            description: r.description,
                            category: r.category,
                            attachments: r.files.map(function (a) { return ({
                                type: a.kind,
                                name: a.name,
                                url: a.url,
                                createdByAccount: session.user.resources[0].id,
                            }); }),
                        }); })];
            }
        });
    });
}
var mapCourseStatus = function (course) {
    // eslint-disable-next-line default-case
    switch (course.status) {
        case 'Cours annulé':
        case 'Prof. absent':
        case 'Classe absente':
        case 'Prof./pers. absent':
        case 'Sortie pédagogique':
            return timetable_1.CourseStatus.CANCELED;
    }
    if (course.test) {
        return timetable_1.CourseStatus.EVALUATED;
    }
    return undefined;
};
