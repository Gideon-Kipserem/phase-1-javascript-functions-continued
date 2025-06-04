// code your solution here


//saturday fun
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

//monday work
const mondayWork = function(action = "go to the office") {
  return `This Monday, I will ${action}.`;
};

//wrap adjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}


