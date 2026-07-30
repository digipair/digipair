"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseStatus = exports.CourseType = void 0;
var CourseType;
(function (CourseType) {
    CourseType[CourseType["LESSON"] = 0] = "LESSON";
    CourseType[CourseType["ACTIVITY"] = 1] = "ACTIVITY";
    CourseType[CourseType["DETENTION"] = 2] = "DETENTION";
    CourseType[CourseType["VACATION"] = 3] = "VACATION";
})(CourseType || (exports.CourseType = CourseType = {}));
var CourseStatus;
(function (CourseStatus) {
    CourseStatus[CourseStatus["CANCELED"] = 0] = "CANCELED";
    CourseStatus[CourseStatus["EDITED"] = 1] = "EDITED";
    CourseStatus[CourseStatus["ONLINE"] = 2] = "ONLINE";
    CourseStatus[CourseStatus["EVALUATED"] = 3] = "EVALUATED";
})(CourseStatus || (exports.CourseStatus = CourseStatus = {}));
