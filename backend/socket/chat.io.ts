import type { Server } from "socket.io";

let chatIO: Server | null = null;

export const setChatIO = (io: Server) => {
  chatIO = io;
};

export const getChatIO = () => chatIO;