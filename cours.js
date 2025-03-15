//list 
let mylist = [2,3,4,5,6];
console.log(mylist);

console.log(mylist.map((n)=>n*n));
//reduce

var compt=0;
console.log(mylist.reduce(
    (sum,val) =>{
        return sum+val;
    }
));

//map
console.log(mylist.filter((n)=>n %2 == 0));

mylist.forEach((n)=>{
    console.log(n*7);
})
//une focntion impure : qui deffere a cha que appel
function getRandomNumber() {
    return Math.random();
}

//console.log(getRandomNumber()); // Différent à chaque exécution

function dosom(a){
       a+=10;return a;
}
var b=5;
console.log(b);
console.log(dosom(b));
console.log("lop"+b);
//function pure 
function addtolid(mylist){
    (mylist.push(15));
}
addtolid(mylist);
console.log(mylist);

//freeze 
const myfunction = (obj)=>{
    obj.age =50;return obj;
}
let myobj=Object.freeze( {nom:'lina',age:30}) ;
console.log(myobj);
console.log(myfunction(myobj));
console.log(myobj);
//declarative
let numbers =  [34, -7, 23, 12, -5, 11, 19, 0, 3, -2, 17];

function isPrime(num){
    if(num<=1) return false;
    if(num === 2) return true;
    for(let i=2;i<num;i++){
      if(num%i===0) return false;
    }
      return true;
    }
    var count = 1 ;
    const result =  numbers.sort((a,b) => a - b ).
    filter( (n)=> n > 0 ). // posotives 
    filter((n)=> n %2 != 0 ) // valeurs impaire
    .filter((n)=> isPrime(n)  ) // 
    .reduce( (p ,n ) =>{
        count++ ;
        return p+n ;
    
    } )  ;
    
    console.log(result/count);

    //foction premier class
    function miniscule(msg){
        return msg.toLowerCase(msg);
    }
    function majiscule(msg){
        return msg.toUpperCase(msg);
    }
    function traitement(myfunction,msg){
        return myfunction(msg)
    }
    console.log(traitement(majiscule,"Hello LSI"));

    //jkol
    

