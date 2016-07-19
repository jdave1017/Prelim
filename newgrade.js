const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade: ', (grade) => {
  // TODO: Log the answer in a database

    var grade= parseInt(grade);
      console.log(grade);
      
      
    deductgrade(grade,3);
    deductgrade(grade,2);
    addgrade(grade,3);
    addgrade(grade,5);
 
  rl.close();
});
function deductgrade(grade,decrement){
 var test1 = grade - decrement;
  var test2 = grade + increment;
  
if(test1<75){
    console.log(decrement);
}
else if(test1>=75){
    console.log(increment);    
}





module.exports = {
    computegrade :grades
   };
   }