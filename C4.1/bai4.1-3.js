let a=3, b=4, c=5;
if (a+b>c && a+c>b && b+c>a){
    if (a==b==c){
        console.log("la tam giac deu");
    }
    else if(a==c|| a==b || c==a){
        console.log("la tam giac can");
    }
    else {
        console.log("la tam giac thuong");
    }
}