function generateExcuse() {
  let who = ["the dog", "my grandma", "his turtle", "my bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["ate", "pissed on", "crushed", "broke"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];

  let excuse =
    randomWho + " " + randomWhat + " " + randomWhen + " " + randomAction;

  document.getElementById("excuse").innerHTML = excuse;
}

document.addEventListener("DOMContentLoaded", generateExcuse);
