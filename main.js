function outer() {
  
  const fish = 'PEIXE';
  let count = 0;
  
   function inner() {
     count++;
     return `${count} ${fish}`;
   }
  
  return inner;
}

const fun = outer();
console.log(fun());
console.log(fun());
console.log(fun());
