let numbers = [1, '10', 'hi', 2, 3],
    countString = 0, 
    countNumber=0;


numbers.map(myFunction) ;

function myFunction(num) {
  (typeof num === 'number' && countNumber++);
  
  (typeof num === 'string' && countString++);
  
}


console.log(`count of numbers: ${countNumber}  count of strings: ${countString}` )
