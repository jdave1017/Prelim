const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade: ', (grade) => {
  // TODO: Log the answer in a database

    var grade= parseInt(grade);
      console.log(grade);
      
  
  rl.close();
});
