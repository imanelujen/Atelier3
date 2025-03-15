const numbers = [1, 7, 10, 9, 8];
console.log(numbers.reduce((min,current)=>
    Math.max(min,current)
  ));
//2eme methode
console.log("le max est :"+numbers.reduce((max,current)=>
  current>max ?current : max)
);