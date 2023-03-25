function sum(a,b){
    return a+b;
}

exports.sum=sum

function sub(a,b){
    return a-b;
}

exports.sub=sub

// exports.sum1=(a,b)=>{
//     return a+b;
// }

// exports.sub1=(a,b)=>{
//     return a-b;
// }

const fs=require('fs');
//  const txt=fs.readFileSync('demo.txt', 'utf-8')
 fs.readFile('demo.txt', 'utf-8', (text,err)=>{
    if(!err) console.log(err);
    console.log( text);
})
 
