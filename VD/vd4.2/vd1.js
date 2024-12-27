
const m=[5,-10,3,4,8,11,-2];
let t=0;
let s=0;
for (let i=0; i<m.length; i++){
    if (m[i]%2==0){
        t+=1;
        s+=m[i];
    }
}
let tbc=s/t;
console.log("so nguyen chan: "+t);
console.log("Trung binh cong so nguyen chan: " + tbc);
for (let i=0; i<m.length; i++){
    if(m[i]==5){
        m[i]=10;
    }
}
console.log(m);
m.push(10);
m.push(11);
m.push(12);
console.log(m);


// const m = [5, -10, 3, 4, 8, 11, -2];
// let t = 0;
// let s = 0;
// let tbc = 0;
// songuyenchan = (m) => {
//     for (let i = 0; i < m.length; i++) {
//         if (m[i] % 2 == 0) {
//             t += 1;
//         }
//     };
//     return t
// }
// TBC = (m,t) => {
//     for (let i = 0; i < m.length; i++) {
//         if (m[i] % 2 == 0) {
//             s += m[i];
//         }
//     };
//     t = songuyenchan(m);
//     tbc = s / t;
//     return tbc
// }


// thay = (m) => {
//     for (let i = 0; i < m.length; i++) {
//         if (m[i] == 5) {
//             m[i] = 10;
//         }
//     }
//     return m
// }
// them = (m) => {
//     m.push(10);
//     m.push(11);
//     m.push(12);
//     return m
// }
// console.log("so nguyen chan: " + songuyenchan(m));
// console.log("Trung binh cong so nguyen chan: " + TBC(m,t));
// console.log(thay(m));
// console.log(them(m));

/*
let t=0 ,s=0, tbc=0;
function dem(m) {
    for (let i = 0; i < m.length; i++) {
        if (m[i] % 2 == 0) {
            t += 1;
        }
    };
    return t
}
function dem1(m,t){
    for (let i = 0; i < m.length; i++) {
        if (m[i] % 2 == 0) {
            s += m[i];
        }
    };
    // t = dem(m);
    tbc = s / t;
    return tbc
}
const m = [5, -10, 3, 4, 8, 11, -2];
console.log(dem(m))
console.log(dem1(m,t))*/