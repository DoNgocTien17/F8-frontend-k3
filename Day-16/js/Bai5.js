var n = 10;
var count = 0;
var output = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    count++;
    output += count + " ";
  }

  output += "<br/>";
}

document.write(output);
console.log(output);
