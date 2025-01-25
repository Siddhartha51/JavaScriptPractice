const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (nums) => nums+5)
//     console.log(newNums);

// const newNums = []
// myNums.forEach((num) => {
//     newNums.push(num+5
// });
//console.log(newNums);

const newNums = myNums
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) => num>50)
console.log(newNums);
