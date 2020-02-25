function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = "I can\'t hear you!";
  var uppercase = "YESINDEED!";
  var love = "I love you, too.";
  if (sayHiToGrandma(string) === string.toLowerCase) {
    return lowercase;
  } else if (sayHiToGrandma(string) === string.toUpperCase) {
      return uppercase;
    }
      else if (sayHiToGrandma(string) === "I love you, Grandma.") {
        return love}
}
