let GLOBAL_ROOM_ID = 1;

export class RoomManager {
  static rooms;
  constructor() {
    this.rooms = new Map();
 }

  createRoom(user1, user2) {
    const roomId = this.generate().toString();
    const board = Array(9).fill(null);

    this.rooms.set(roomId, { user1, user2, board });

    user1.socket.emit("room_generated", {
      roomId,
    });

    user2.socket.emit("room_generated", {
      roomId,
    });

    user1.socket.emit("play_now", {
      id: user2.socket.id,
      name: user2.user,
      symbol: "O",
      board : this.rooms.get(roomId).board
    });

    user2.socket.emit("play_now", {
      id: user1.socket.id,
      name: user1.user,
      symbol: "X",
      board : this.rooms.get(roomId).board
    });

  }
  updateBoard(mark, index, roomId){
    console.log("RoomID", roomId)
    console.log(this.rooms)
    
    // //update board state
    //   let newboard = this.rooms.get(roomId).board;
    //   newboard[index] = mark
    //   this.rooms.set(roomId).board = newboard;


    // // emit the changes to users

    //   socket.emit("boardUpdated", board)

  }

  generate() {
    return GLOBAL_ROOM_ID++;
  }
}
