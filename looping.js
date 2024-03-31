/*
               Looping technique
 1. for loop
 2. while loop
 3. do loop ----> Ignore this one 
 4. for of ----> Array loop krar jonno
 5. for in ----> Object loop krar jonno

*/ 

const friends = ['Alon', 'Mark', 'Bill', 'Waren'];
for(const friend of friends){
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}

const numbers = [232, 4, 54, 54,446, 75, 45, 55, 44, 44];
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

let i = 0 ;

while(i< friends.length){
    // console.log(friends[i]);
    i++;
}


let n = 0;
while(n<numbers.length){
    console.log(numbers[n]);
    n++;
}