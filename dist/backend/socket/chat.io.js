"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatIO = exports.setChatIO = void 0;
let chatIO = null;
const setChatIO = (io) => {
    chatIO = io;
};
exports.setChatIO = setChatIO;
const getChatIO = () => chatIO;
exports.getChatIO = getChatIO;
