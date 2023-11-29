// /* Part 1: Fizz Buzz*/
let x=0;
while(x<=100){
    if((x%3==0) && (x%5==0)){
        console.log(x,":Fizz Buzz");
        x++;
        continue;
    }
    else if(x%3==0){
        console.log(x,":Fizz");
        x++;
        continue;
    }
    else if(x%5==0){
        console.log(x,":Buzz");
        x++;
        continue;

    }
    console.log(x);
    x++;
}
//Part 2: Prime Time
let n=4;//th eprime numner after n 
prime=false;
while(!prime){
    //check if its prime 
    if(n==0){
        n++;
        continue;
    }
    else if(n==1||n==2){
        prime=true;
        continue;
    } 
    //now assume the new n is prime 
    prime=true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // If num is divisible by i, it's not a prime number.
        if (n % i === 0) {
           prime = false;
        }
    }
    if(!prime){
        n++;
    }
}
console.log(n,"is a prime number");



 n=7;//th eprime numner after n 
prime=false;
while(!prime){
    //check if its prime 
    if(n==0){
        n++;
        continue;
    }
    else if(n==1||n==2){
        prime=true;
        continue;
    } 
    //now assume the new n is prime 
    prime=true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // If num is divisible by i, it's not a prime number.
        if (n % i === 0) {
           prime = false;
        }
    }
    if(!prime){
        n++;
    }
}
console.log(n,"is a prime number");
n=8;//th eprime numner after n 
prime=false;

while(!prime){
    //check if its prime 
    if(n==0){
        n++;
        continue;
    }
    else if(n==1||n==2){
        prime=true;
        continue;
    } 
    //now assume the new n is prime 
    prime=true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // If num is divisible by i, it's not a prime number.
        if (n % i === 0) {
           prime = false;
        }
    }
    if(!prime){
        n++;
    }
}
console.log(n,"is a prime number");
const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

  // Split the CSV string into rows using the newline character ("\n") as the delimiter
  const rows = csvString.split('\n');

  // Loop through each row
  for (let i = 0; i < rows.length; i++) {
    // Skip empty rows
    if (rows[i].trim() === '') {
      continue;
    }

    // Split the row into cells using the comma (",") as the delimiter
    const cells = rows[i].split(',');

    // Log each row of data
    console.log("yas", cells[0], cells[1], cells[2], cells[3]);
  }

