let n = Math.floor(Math.random() * 100);
let x = prompt("Input a number from 0 to " + n);
while (x != n || isNaN(x)) {
  if (isNaN(x)) {
    alert("No!");
  } else if (x < n) {
    alert("You lose! Number so smoll");
  } else {
    alert("You lose! Number so high");
  }
  x = prompt("Input a number");
}
alert("You win!");
