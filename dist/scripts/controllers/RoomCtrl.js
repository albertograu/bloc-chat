(function () {
  function RoomCtrl(Room, Message) {
    this.chatRooms = Room.all;
    this.currentRoom = null;


    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
      console.log("Clicked on" + " " + room.name);
    }

    this.addRoom = function(){
      Room.add(this.name);
      this.name = '';
    }

    this.newMessage = function(currentRoom){
      Message.send(this.content, currentRoom.$id);
      console.log('New message added to ' + currentRoom.name + ": " + this.content);
      this.content = "type your message... ";
    }
  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
