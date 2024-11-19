// Tính và in ra 
let n=100;
//c1: for
let s=0;
for (let x=1;x<=n;x=x+2){
    s=s+x
} 
console.log("Tong: "+s);


//c2:while
let m=100;
let t=0;
let i=2;
while(i<=m){
    s=s+i
    i=i+2
}
console.log("Tong: "+t)

//c3:do...while
let z=100;
let c=0;
let y=2;
do {
    s=s+y;
    y=y+2;
}while(y<=z)
    console.log("Tong: "+c)



/*Tính và in lên màn hình tổng các số nguyên chẵn trong dãy số từ 1 đến n.

a. Cách for

b. Cách while

c. Cách do .. while



let n=100;
//Cach 1: for
let s=0;
for (let i=2; i<=n; i=i+2)
   s+=i;
console.log("Tong = " + s);

//Cach 2: while
s=0;
let i=2;
while (i<=n){  
   s+=i;
   i+=2;
}
console.log("Tong = " + s);

//Cach 3: do .. while
s=0;
i=2;
do{
   s+=i;
   i+=2;
}while (i<=n);
console.log("Tong = " + s)*/