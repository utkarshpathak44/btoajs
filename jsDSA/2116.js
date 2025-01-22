// var canBeValid = function(s, locked) {
//     if(s.length===0) return false
//     let stack=[]
//     let lockedCount=0

//     for(let i=0;i<s.length;i++){
//         if(s[i] === '(' && locked[i] === 0) {
//             stack.push('(')
//         } else if (s[i] === ')' && locked[i] === 0) {
//             if(stack.length === 0) return false
//                 stack.pop()
//         } else if (s[i] === '(' && locked[i] === 1) {
//             lockedCount++
//             } else if (s[i] === ')' && locked[i] === 1) {
//                 if(lockedCount === 0) return false
//                     lockedCount--
//             }
//         console.log(stack)
//     }
//     return stack.length + lockedCount === 0
// };


var canBeValid = function(s, locked) {
    //applying the logic on the fact that a changeable parentheses can affect and fix uneven locked parentheses
    let changeable=0;
    let unchangeable=0
    s.split("").forEach((element, index) => {
        if(locked[index]==0){//these are the unchangeable elements
            changeable++;
        }else{//if it is a locked string
            if(element==="("){
                unchangeable++;
            }
            else{
                if(changeable==0&&unchangeable<0)
                    return false
            }
        }
    });


    console.log(unchangeable+" "+changeable)
    if(Math.abs(changeable)%2===0&&changeable>=0&&chan){
        return true;
    }

    return false
};

console.log(canBeValid("())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(","100011110110011011010111100111011101111110000101001101001111"))




const isValidPara=(str,locked)=>{
    let unlocked=0
    let lockOpen=0;
    let lockClose=0
    str.split("").forEach((element,index)=>{
        if(locked[index]==1){
            if(element=='('){
                lockOpen++
            }else{
                lockClose++
                if(unlocked>0){
                    unlocked--
                }
            }
        }
        else{
            unlocked++;
        }
    })
    console.log(unlocked)
}