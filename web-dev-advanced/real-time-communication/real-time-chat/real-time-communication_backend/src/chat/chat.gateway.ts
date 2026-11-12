import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

// @WebSocketGateway() tells NestJS that this class handles WebSocket / Socket.io communication.

// CORS allows the React frontend (running on a different port) to connect to the backend.

// origin: '*' means that any origin is allowed.
// Without an allowed origin, the browser blocks the handshake before Socket.io runs.
// This is fine for development, but in production you should allow only your real frontend URL.

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  // @WebSocketServer() injects the underlying Socket.io server instance / gives us access to the server.
  // We can use this to send events to clients.
  @WebSocketServer()
  server: Server;

  private messagesByRoom: Record<string, string[]> = {};

  constructor() {
    console.log('ChatGateway instantiated');
  }

  @SubscribeMessage('joinRoom')
  handleJoin(@MessageBody() roomId: string, @ConnectedSocket() socket: Socket) {
    socket.join(roomId);
  }

  // @SubscribeMessage('message') tells NestJS:
  // "When a client sends an event called 'message', run this method."
  @SubscribeMessage('message')
  handleMessage(
    // @MessageBody() takes the data that the client sent with the event.
    // For example: socket.emit('message', 'Hello!'); message will then contain "Hello!"
    @MessageBody() data: { roomId: string; message: string },
  ) {
    console.log('Received:', data); // hier
    // Create the array for this room if it doesn't exist yet.
    if (!this.messagesByRoom[data.roomId]) {
      this.messagesByRoom[data.roomId] = [];
    }

    console.log(
      'Emitting to room',
      data.roomId,
      this.messagesByRoom[data.roomId],
    ); // hier

    // Add the new message to that room's array.
    this.messagesByRoom[data.roomId].push(data.message);

    // Send the message to all connected clients (broadcasting).
    // "message" is the event name. message is the data we send.
    this.server
      .to(data.roomId)
      .emit('messages', this.messagesByRoom[data.roomId]);
  }
}

// to send messages only to one client:
// handleMessage(
//   @MessageBody() message: string,
//   @ConnectedSocket() socket: Socket,
// ) {
//   socket.emit('message', message);
// }
