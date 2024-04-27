let GLOBAL_ROOM_ID = 1;

export class RoomManager {
  constructor() {
    this.rooms = new Map();
  }

  createRoom(user1, user2) {
    const roomId = this.generate().toString();

    this.rooms.set(roomId, { user1, user2 });

    user1.socket.emit("room_generated", {
      roomId,
    });

    user2.socket.emit("room_generated", {
      roomId,
    });

    user1.socket.emit("play_now", {
      id: user2.socket.id,
      name: user2.user,
    });

    user2.socket.emit("play_now", {
      id: user1.socket.id,
      name: user1.user,
    });
  }

  generate() {
    return GLOBAL_ROOM_ID++;
  }
}
