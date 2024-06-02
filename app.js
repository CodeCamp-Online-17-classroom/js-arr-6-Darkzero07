const alphabets = ["a", "b", "a", "c", "a", "d"];
// expexted result: [0, 2, 4]

let arr = new Array();

alphabets.forEach((item, index) => {
  if (item === "a") {
    arr.push(index);
  }
});

console.log(arr);
