function friend(friends){
  //your code here
  let myFriends = [];
  for (i = 0; i < friends.length; i++){
    if (friends[i].length === 4){
      myFriends.push(friends[i]);
    }
  }
  return myFriends;
}
//test
console.log(friend(["mark", "taylor", "prescilla", "brad"]));