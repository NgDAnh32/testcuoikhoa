// bài 1:
function findOppositeNumber(n,inputNumber) {
    if (inputNumber<n/2)
    return inputNumber+(n/2)

    else return inputNumber-(n/2)
}
console.log(findOppositeNumber(10,6))
console.log(findOppositeNumber(10,2))
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
// bài 3 :
function lucky(){
    let randomNumber= Math.floor(Math.random() * 11);
    console.log(randomNumber);
    let button=document.getElementById("submitBtn").addEventListener("click",()=>{
        let input=document.getElementById("input").value
        if(input==""){
            alert("xin mời nhập lại ")
        }if(input>10){
            alert("xin mời nhập lại số từ 0 đến 10")
        }
    })
}
lucky()