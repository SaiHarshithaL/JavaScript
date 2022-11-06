const n=[1,2,3,4,5,6,7,8];
const nn=n.map(i=>i*i
    );
console.log("map example")
console.log(nn)
console.log("filter example")
const nf=nn.filter(i=>i%2==0);
console.log(nf)
console.log("reduce example")
const s=nf.reduce(function(r,i){
    return r+i;
},0);
console.log(s)
// Online Javascript Editor for free

console.log("map example returns new array")
var users=[{user:"hello1",age:23},{user:"hello",age:10},{user:"hello3",age:20}]
let ud=users.map((user)=>{
    let m=Math.random()*100;
    user.mark=m;
    return user;
})
console.log(ud);
var sc=ud.filter(u=>{
    if(u.mark>30){
        return u;
    }
});
console.log("filter example")
console.log(sc);
var r=users.reduce((f,u)=>{
    if(u.age>10){
        f.push(u.user);
    }
    return f;
},[]);
console.log("reduce example")
console.log(r);
