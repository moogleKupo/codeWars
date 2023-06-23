const areYouPlayingBanjo = function(name) { 
  let response = "";
if (name[0] === "R" || name[0] === "r") {
  response = `${name} plays banjo`;
} else {response = `${name} does not play banjo`;
  }
  return response;
};
//test 
console.log(areYouPlayingBanjo("Rodney"));
console.log(areYouPlayingBanjo("Jeffrey"));
console.log(areYouPlayingBanjo(4));
console.log(areYouPlayingBanjo(true));