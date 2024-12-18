// const obj1 ={first:20,sec:30,first:50}
// let n=24;
// let l=0 ,r = 100, ans=n;
// while(l<=r){
//     let mid = Math.floor((l+r)/2);
//     if (mid*mid<=n){
//         ans = mid;
//         l=mid+1;
//     }else{
//         r=mid-1;
//     }
// }
// console.log(ans);

//Q2
const example =({a,b,c}) =>{
    console.log(a,b,c);
};

example(0,1,2);

//q4
// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//q3
const ku = [10, 20, 30, 40, 50];
const first = ku[0];
console.log(first);


const th = [10, 20, 30, 40, 50];
const last = ku[ku.length - 1];
console.log(last);

//Q5


const theesan = [1, [2, [3, [4]], 5], 6];
const Array = Array(theesan);
console.log(Array)

//q8
const kug = {
    first: 'hello',
    second: 42,
  };
  
  for (const [key, value] of Object.entries(kug)) {
    console.log(`${key}: ${value}`);
  }
  

//Q9
  function kug(name,age){
    this.name=name;
    this.age=age;

  }


