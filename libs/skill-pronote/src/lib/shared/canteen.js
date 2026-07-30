"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanteenKind = exports.QRType = void 0;
var QRType;
(function (QRType) {
    QRType[QRType["QRCode"] = 0] = "QRCode";
    QRType[QRType["Barcode"] = 1] = "Barcode";
})(QRType || (exports.QRType = QRType = {}));
var CanteenKind;
(function (CanteenKind) {
    CanteenKind[CanteenKind["FORFAIT"] = 0] = "FORFAIT";
    CanteenKind[CanteenKind["ARGENT"] = 1] = "ARGENT";
})(CanteenKind || (exports.CanteenKind = CanteenKind = {}));
