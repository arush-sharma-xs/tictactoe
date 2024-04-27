import { RoomManager } from "./roomManager.js";

export class UserManager {
  users;

  constructor() {
    this.users = [];
    this.roomManager = new RoomManager();
  }

  addUser(user, socket) {
    this.users.push({ user, socket });
    this.startGame(socket.id);
  }

  startGame(currentUserSocketId) {
    if (this.users.length < 2) {
      return;
    }

    let user1 = this.users.find(
      (user) => user.socket.id === currentUserSocketId
    );

    let user2 = this.users.find(
      (user) => user.socket.id !== currentUserSocketId
    );

    this.users = this.users.filter(
      (user) =>
        user.socket.id !== user1.socket.id && user.socket.id !== user2.socket.id
    );

    if (!user1 || !user2) {
      return;
    }

    console.log(user1.socket.id, user2.socket.id);

    this.roomManager.createRoom(user1, user2);
  }

  showAllUser() {
    this.users.forEach((user) => {
      console.log(user);
    });
  }
}
