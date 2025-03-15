//Exercice 1 :
const numbers = [1, 7, 10, 9, 8 , 2];
console.log(numbers);
//pair, 
console.log(numbers.filter(n=>n%2==0));
//Exercice 2:
const numbers2 = [1,3 , 4];
function fact(n){
    res=1;
   for(let i=1;i<=n;i++){
      res*=i;
   }
   return res;
}
//recursuve fact 
function fact2(n){
if(n==1)
    return 1;
else 
return n*fact2(n-1);
}

console.log(numbers2.map(n=>fact2(n)));