let arr = [1,2,2,3,1,2];

let count:any={};

for(let i of arr){
    count[i]=(count[i]||0)+1;
}

console.log(count);