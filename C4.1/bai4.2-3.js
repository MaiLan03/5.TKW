const so  =[1,2,3,4,5,6,7,8,9];
let t=0;
for(let i=0;i<so.length;i++){
    if(so[i]%2!=0){
        t=t+so[i];
    }
}
console.log("Tong so le: "+t)