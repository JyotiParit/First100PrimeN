function PrimeNum(num){
    if(num<2){           //1 & 0 are not prime numbers
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i==0){       //check if number is dividiable by any other number, if yes then it is not a Primeno  
            return false;
        }
    }
    return true;
} 

var arr=[];
var x=0;
while(arr.length<100){
    if(PrimeNum(x)){
        arr.push(x);
    }
    x++;
}
console.log("First 100 Prime No's"+" ");
console.log(arr);
