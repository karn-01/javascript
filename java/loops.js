//counting 1 to 100   it is same as the other
for(let i=1;i<=5;i++){
    console.log(i);
}
console.log("*********************************")

//reverse counting
for( let k=5;k>=1;--k){
    console.log(k)
}
console.log("*********************************")
for(let i =1 ;i<=5;i++){
    if(i==4){          //ab ye jab hamara i=4 ayega toh break the loop out and no further print
        break;           
    }
    console.log(i)             // 1 2 3 
}


console.log("*********************************")

for(let i =1 ;i<=5;i++){
    if(i==4){          // jab continue hit tab hi //ab jab hamra i=4 hoga ye jo bhi continue ka niche likha h ausha skip kar dega 
        continue;           
    }
    console.log(i)             // 1 2 3 5
}


console.log("*********************************")

for(let i =1 ;i<=5;i++){
    console.log(i)   //1 2 3 4 5
    if(i==4){  
        continue;         //niche koi code hi nhi ishka upar hi toh print    
    }
}

 
console.log("*********************************")
let i=1;
while(i<=10){
    console.log(i)
    i++;
}
