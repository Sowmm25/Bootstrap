function b() {
  var myvar;
  console.log(myvar);
}

function b() {
  var myvar = 2;
  console.log(myvar);
  b();
}

var myvar = 1;
console.log(myvar);

a();
console.log(myvar);
