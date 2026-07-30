"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capabilities = void 0;
/*
 *
 * Represents the capabilities of a school service plugin.
 * Used to determine what features the plugin supports.
 */
var Capabilities;
(function (Capabilities) {
    Capabilities[Capabilities["REFRESH"] = 0] = "REFRESH";
    Capabilities[Capabilities["HOMEWORK"] = 1] = "HOMEWORK";
    Capabilities[Capabilities["NEWS"] = 2] = "NEWS";
    Capabilities[Capabilities["GRADES"] = 3] = "GRADES";
    Capabilities[Capabilities["ATTENDANCE"] = 4] = "ATTENDANCE";
    Capabilities[Capabilities["ATTENDANCE_PERIODS"] = 5] = "ATTENDANCE_PERIODS";
    Capabilities[Capabilities["CANTEEN_MENU"] = 6] = "CANTEEN_MENU";
    Capabilities[Capabilities["CHAT_READ"] = 7] = "CHAT_READ";
    Capabilities[Capabilities["CHAT_CREATE"] = 8] = "CHAT_CREATE";
    Capabilities[Capabilities["CHAT_REPLY"] = 9] = "CHAT_REPLY";
    Capabilities[Capabilities["TIMETABLE"] = 10] = "TIMETABLE";
    Capabilities[Capabilities["HAVE_KIDS"] = 11] = "HAVE_KIDS";
    Capabilities[Capabilities["CANTEEN_BALANCE"] = 12] = "CANTEEN_BALANCE";
    Capabilities[Capabilities["CANTEEN_HISTORY"] = 13] = "CANTEEN_HISTORY";
    Capabilities[Capabilities["CANTEEN_BOOKINGS"] = 14] = "CANTEEN_BOOKINGS";
    Capabilities[Capabilities["CANTEEN_QRCODE"] = 15] = "CANTEEN_QRCODE";
})(Capabilities || (exports.Capabilities = Capabilities = {}));
