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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPronoteCanteenMenu = fetchPronoteCanteenMenu;
var pawnote_1 = require("pawnote");
var logger_1 = require("../utils/logger");
function fetchPronoteCanteenMenu(session, accountId, date) {
    return __awaiter(this, void 0, void 0, function () {
        var weeklyMenu;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteAttendance');
                    }
                    return [4 /*yield*/, (0, pawnote_1.menus)(session, date)];
                case 1:
                    weeklyMenu = _b.sent();
                    if (!((_a = weeklyMenu.days) === null || _a === void 0 ? void 0 : _a.length)) {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/, weeklyMenu.days
                            .map(function (day) { return (__assign({ date: day.date, createdByAccount: accountId }, mapCanteenMenu(day))); })
                            .sort(function (a, b) { return a.date.getTime() - b.date.getTime(); })];
            }
        });
    });
}
function mapCanteenMenu(menu) {
    return {
        lunch: mapMeal(menu.lunch),
        dinner: mapMeal(menu.dinner),
    };
}
function mapMeal(meal) {
    var _a, _b, _c, _d, _e, _f;
    return {
        entry: mapFood(__spreadArray([], ((_a = meal === null || meal === void 0 ? void 0 : meal.entry) !== null && _a !== void 0 ? _a : []), true)),
        main: mapFood(__spreadArray([], ((_b = meal === null || meal === void 0 ? void 0 : meal.main) !== null && _b !== void 0 ? _b : []), true)),
        side: mapFood(__spreadArray([], ((_c = meal === null || meal === void 0 ? void 0 : meal.side) !== null && _c !== void 0 ? _c : []), true)),
        cheese: mapFood(__spreadArray([], ((_d = meal === null || meal === void 0 ? void 0 : meal.fromage) !== null && _d !== void 0 ? _d : []), true)),
        dessert: mapFood(__spreadArray([], ((_e = meal === null || meal === void 0 ? void 0 : meal.dessert) !== null && _e !== void 0 ? _e : []), true)),
        drink: mapFood(__spreadArray([], ((_f = meal === null || meal === void 0 ? void 0 : meal.drink) !== null && _f !== void 0 ? _f : []), true)),
    };
}
function mapFood(meal) {
    return meal.map(function (food) {
        var _a;
        return ({
            name: food.name,
            allergens: ((_a = food.allergens) === null || _a === void 0 ? void 0 : _a.length) ? food.allergens.map(function (allergen) { return allergen.name; }) : undefined,
        });
    });
}
