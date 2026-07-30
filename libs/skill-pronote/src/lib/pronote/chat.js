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
exports.fetchPronoteChats = fetchPronoteChats;
exports.fetchPronoteChatRecipients = fetchPronoteChatRecipients;
exports.fetchPronoteChatMessages = fetchPronoteChatMessages;
exports.sendPronoteMessageInChat = sendPronoteMessageInChat;
exports.fetchPronoteRecipients = fetchPronoteRecipients;
exports.createPronoteMail = createPronoteMail;
var pawnote_1 = require("pawnote");
var logger_1 = require("../utils/logger");
function fetchPronoteChats(session, accountId) {
    return __awaiter(this, void 0, void 0, function () {
        var chats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteChats');
                    }
                    return [4 /*yield*/, (0, pawnote_1.discussions)(session)];
                case 1:
                    chats = _a.sent();
                    return [2 /*return*/, chats.items.map(function (chat) { return ({
                            id: chat.participantsMessageID,
                            subject: chat.subject,
                            creator: chat.creator,
                            recipient: chat.recipientName,
                            date: chat.date,
                            ref: chat,
                            createdByAccount: accountId,
                        }); })];
            }
        });
    });
}
function fetchPronoteChatRecipients(session, chat) {
    return __awaiter(this, void 0, void 0, function () {
        var chatTab, recipients;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteChatRecipients');
                    }
                    chatTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Discussions);
                    if (!chatTab) {
                        (0, logger_1.error)('Chat tab not found in session', 'fetchPronoteChatRecipients');
                    }
                    if (!chat.ref) {
                        (0, logger_1.error)('Chat reference is undefined', 'fetchPronoteChatRecipients');
                    }
                    if (!('participantsMessageID' in chat.ref)) {
                        (0, logger_1.error)('Chat reference is not a Discussion type', 'fetchPronoteChatRecipients');
                    }
                    return [4 /*yield*/, (0, pawnote_1.discussionRecipients)(session, chat.ref)];
                case 1:
                    recipients = _a.sent();
                    return [2 /*return*/, recipients.map(function (recipient) {
                            var _a = recipient.name.split('('), namePart = _a[0], classPart = _a[1];
                            return {
                                id: recipient.id,
                                name: namePart.trim(),
                                class: classPart ? classPart.replace(')', '').trim() : undefined,
                            };
                        })];
            }
        });
    });
}
function fetchPronoteChatMessages(session, accountId, chat) {
    return __awaiter(this, void 0, void 0, function () {
        var chatTab, messages, studentName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteChatMessages');
                    }
                    chatTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Discussions);
                    if (!chatTab) {
                        (0, logger_1.error)('Chat tab not found in session', 'fetchPronoteChatMessages');
                    }
                    if (!chat.ref) {
                        (0, logger_1.error)('Chat reference is undefined', 'fetchPronoteChatMessages');
                    }
                    if (!('participantsMessageID' in chat.ref)) {
                        (0, logger_1.error)('Chat reference is not a Discussion type', 'fetchPronoteChatRecipients');
                    }
                    return [4 /*yield*/, (0, pawnote_1.discussionMessages)(session, chat.ref, true)];
                case 1:
                    messages = _a.sent();
                    studentName = session.user.resources[0].name;
                    return [2 /*return*/, messages.sents.map(function (message) {
                            var _a, _b;
                            return {
                                id: message.id,
                                subject: '',
                                content: message.content,
                                author: (_b = (_a = message.author) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : studentName,
                                date: message.creationDate,
                                attachments: message.files.map(function (attachment) { return ({
                                    type: attachment.kind,
                                    name: attachment.name,
                                    url: attachment.url,
                                    createdByAccount: accountId,
                                }); }),
                            };
                        })];
            }
        });
    });
}
function sendPronoteMessageInChat(session, chat, content) {
    return __awaiter(this, void 0, void 0, function () {
        var chatTab;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteChatMessages');
                    }
                    chatTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Discussions);
                    if (!chatTab) {
                        (0, logger_1.error)('Chat tab not found in session', 'fetchPronoteChatMessages');
                    }
                    if (!chat.ref) {
                        (0, logger_1.error)('Chat reference is undefined', 'fetchPronoteChatMessages');
                    }
                    if (!('participantsMessageID' in chat.ref)) {
                        (0, logger_1.error)('Chat reference is not a Discussion type', 'fetchPronoteChatRecipients');
                    }
                    return [4 /*yield*/, (0, pawnote_1.discussionSendMessage)(session, chat.ref, content)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function fetchPronoteRecipients(session) {
    return __awaiter(this, void 0, void 0, function () {
        var chatTab, alLRecipients, recipients;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) {
                        (0, logger_1.error)('Session is undefined', 'fetchPronoteChatMessages');
                    }
                    chatTab = session.user.resources[0].tabs.get(pawnote_1.TabLocation.Discussions);
                    if (!chatTab) {
                        (0, logger_1.error)('Chat tab not found in session', 'fetchPronoteChatMessages');
                    }
                    return [4 /*yield*/, Promise.all(session.user.resources.flatMap(function (resource) {
                            return [pawnote_1.EntityKind.Teacher, pawnote_1.EntityKind.Personal].map(function (kind) { return (0, pawnote_1.newDiscussionRecipients)(session, kind); });
                        }))];
                case 1:
                    alLRecipients = _a.sent();
                    recipients = alLRecipients.flat();
                    return [2 /*return*/, recipients.map(function (recipient) {
                            var _a = recipient.name.split('('), namePart = _a[0], classPart = _a[1];
                            return {
                                id: recipient.id,
                                name: namePart.trim(),
                                class: classPart ? classPart.replace(')', '').trim() : undefined,
                                ref: recipient,
                            };
                        })];
            }
        });
    });
}
function createPronoteMail(session, accountId, subject, content, recipients) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, pawnote_1.newDiscussion)(session, subject, content, sharedToPronoteRecipient(recipients))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, {
                            id: '',
                            subject: subject,
                            recipient: recipients.map(function (r) { return r.name; }).join(', '),
                            creator: session.user.name,
                            date: new Date(),
                            createdByAccount: accountId,
                        }];
            }
        });
    });
}
function sharedToPronoteRecipient(recipients) {
    return recipients
        .map(function (recipient) { return recipient.ref; })
        .filter(function (ref) { return ref !== undefined; });
}
