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
exports.fetchPronoteGrades = fetchPronoteGrades;
exports.fetchPronoteGradePeriods = fetchPronoteGradePeriods;
var pawnote_1 = require("pawnote");
var attachment_1 = require("../shared/attachment");
var logger_1 = require("../utils/logger");
/**
 * Fetches grades from PRONOTE for a specified period.
 * @param {SessionHandle} session - The session handles for the PRONOTE account.
 * @param {string} accountId - The ID of the account requesting the homeworks.
 * @param {string} period - The name of the period for which to fetch grades.
 * @returns {Promise<PeriodGrades>} A promise that resolves to PeriodGrades.
 */
function fetchPronoteGrades(session, accountId, period) {
    return __awaiter(this, void 0, void 0, function () {
        var gradeTab, pawnotePeriod, grades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteGrades');
                    }
                    gradeTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Grades);
                    if (!gradeTab) {
                        (0, logger_1.error)('Grades tab not found in session', 'fetchPronoteGrades');
                    }
                    pawnotePeriod = gradeTab.periods.find(function (p) { return p.name === period.name; });
                    if (!pawnotePeriod) {
                        (0, logger_1.error)("Period \"".concat(period, "\" not found in grades tab"), 'fetchPronoteGrades');
                    }
                    return [4 /*yield*/, (0, pawnote_1.gradesOverview)(session, pawnotePeriod)];
                case 1:
                    grades = _a.sent();
                    return [2 /*return*/, {
                            studentOverall: mapGradeValueToScore(grades.overallAverage),
                            classAverage: mapGradeValueToScore(grades.classAverage),
                            subjects: mapSubjectGrades(grades, accountId),
                            createdByAccount: accountId,
                        }];
            }
        });
    });
}
/**
 * Fetches all grade periods from PRONOTE.
 * @param {SessionHandle} session - The session handle for the PRONOTE session.
 * @param {string} accountId - The ID of the account making the request.
 * @return {Promise<Array<Period>>} - A promise that resolves to an array of grade periods.
 */
function fetchPronoteGradePeriods(session, accountId) {
    return __awaiter(this, void 0, void 0, function () {
        var accountTab;
        return __generator(this, function (_a) {
            accountTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Grades);
            if (!accountTab) {
                (0, logger_1.error)('Grades tab not found in session', 'fetchPronotePeriods');
            }
            return [2 /*return*/, accountTab.periods.map(function (p) { return ({
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
 * Maps the grade overview to an array of subjects with their respective grades.
 * @param grades
 * @param accountId
 */
function mapSubjectGrades(grades, accountId) {
    var subjects = [];
    var allMappedGrades = grades.grades.map(function (g) {
        var _a, _b;
        return ({
            id: g.id,
            subjectId: g.subject.id,
            subjectName: g.subject.name,
            description: g.comment,
            givenAt: g.date,
            subjectFile: g.subjectFile
                ? __assign(__assign({}, g.subjectFile), { type: attachment_1.AttachmentType.FILE, createdByAccount: accountId }) : undefined,
            correctionFile: g.correctionFile
                ? __assign(__assign({}, g.correctionFile), { type: attachment_1.AttachmentType.FILE, createdByAccount: accountId }) : undefined,
            bonus: (_a = g.isBonus) !== null && _a !== void 0 ? _a : false,
            optional: (_b = g.isOptional) !== null && _b !== void 0 ? _b : false,
            outOf: mapGradeValueToScore(g.outOf),
            coefficient: g.coefficient,
            studentScore: mapGradeValueToScore(g.value),
            averageScore: mapGradeValueToScore(g.average),
            minScore: mapGradeValueToScore(g.min),
            maxScore: mapGradeValueToScore(g.max),
            createdByAccount: accountId,
        });
    });
    var _loop_1 = function (average) {
        var subjectId = average.subject.id;
        var subjectGrades = allMappedGrades.filter(function (g) { return g.subjectId === subjectId; });
        subjects.push({
            id: subjectId,
            name: average.subject.name,
            studentAverage: mapGradeValueToScore(average.student),
            classAverage: mapGradeValueToScore(average.class_average),
            maximum: mapGradeValueToScore(average.max),
            minimum: mapGradeValueToScore(average.min),
            outOf: mapGradeValueToScore(average.outOf),
            grades: subjectGrades,
        });
    };
    for (var _i = 0, _a = grades.subjectsAverages; _i < _a.length; _i++) {
        var average = _a[_i];
        _loop_1(average);
    }
    return subjects;
}
/**
 * Maps a GradeValue to a GradeScore.
 * @param grade
 */
function mapGradeValueToScore(grade) {
    var _a;
    if (typeof grade === 'undefined') {
        return { value: 0, disabled: true, status: 'Inconnu' };
    }
    switch (grade.kind) {
        case pawnote_1.GradeKind.Grade:
            return { value: (_a = grade.points) !== null && _a !== void 0 ? _a : 0 };
        case pawnote_1.GradeKind.NotGraded:
            return { value: 0, disabled: true, status: 'N. Not.' };
        case pawnote_1.GradeKind.Absent:
            return { value: 0, disabled: true, status: 'Abs.' };
        case pawnote_1.GradeKind.AbsentZero:
            return { value: 0, disabled: false, status: 'Abs.*' };
        case pawnote_1.GradeKind.Exempted:
            return { value: 0, disabled: true, status: 'Disp.' };
        case pawnote_1.GradeKind.Unfit:
            return { value: 0, disabled: true, status: 'Disp.' };
        case pawnote_1.GradeKind.Unreturned:
            return { value: 0, disabled: true, status: 'N. Rendu' };
        case pawnote_1.GradeKind.UnreturnedZero:
            return { value: 0, disabled: false, status: 'N. Rendu*' };
        default:
            return { value: 0, disabled: true, status: 'Inconnu' };
    }
}
