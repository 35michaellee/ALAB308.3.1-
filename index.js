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