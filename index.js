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
  var lowercase = 'I can\'t hear you!';
  var uppercase = "YES INDEED!";
  var love = "I love you, too."
  if (sayHiToGrandma(string.toLowerCase) === string)) {
    return lowercase;
  } if (sayHiToGrandma(string.toUpperCase) === string)) {
      return uppercase;
    }
      if (string === "I love you, Grandma.") {
        return love;}
}
