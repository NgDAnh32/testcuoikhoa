
// bài 2
function merge2String(a,b) {
    let result="";
    for (let i = 0; i < a.length||i<b.length; i++) {
        if (i<a.length ){
            result+=a[i];
        }
        if (i<b.length) {
            result+=b[i];
        }
        
    }
    return result;
} 

console.log(merge2String("abc","123"));
console.log(merge2String("abc","0123"));
console.log(merge2String("abcd","123"));

