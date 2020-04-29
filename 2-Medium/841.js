// 841. Keys and Rooms

// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ...,
// N-1, and each room may have some keys to access the next room. 

// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer
// in [0, 1,..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

// Initially, all the rooms start locked (except for room 0). 

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.

// Example 1:

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// Example 2:

// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.
// Note:

// 1 <= rooms.length <= 1000
// 0 <= rooms[i].length <= 1000
// The number of keys in all rooms combined is at most 3000.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[][]} rooms
// @return {boolean}

const canVisitAllRooms = (rooms) => {
  let lockedRoom = [...Array(rooms.length).keys()].slice(1);
  let keys = [...rooms[0]];

  while (lockedRoom.length !== 0) {
    let x = [...lockedRoom], y = [...keys];
    lockedRoom = [], keys = [];

    for (key of y) {
      x.map(room => {
        if (key === room) {
          keys = [...keys, key];
        } else {
          lockedRoom = [...lockedRoom, room];
        }
      });
    }

    y = [...keys], keys = [];
    for (key of y) {
      keys = [...keys, rooms[key]];
    }

    console.log("x =", x);
    console.log("lockedRoom =", lockedRoom);
    console.log("keys =", keys);
    break;
  }

  return lockedRoom.length === 0 ? true : false;
};



const canVisitAllRooms = (rooms) => {
  let lockedRoom = [...Array(rooms.length).keys()].slice(1);
  let keyBag = [...rooms[0]];
  let man = [];

  while (lockedRoom.length !== 0) {
    // var array = [1,2,3,4]
    // var item = 3

    // var index = array.indexOf(item);
    // if (index !== -1) array.splice(index, 1);

    break;
  }

  return true;
};