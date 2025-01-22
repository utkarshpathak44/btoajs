var countPalindromicSubsequence = function(str) {
    //we only want the palindromes which are of length 3
    //so if a char is repeated, and there is one or more than one characters in b/w then there exists palindromic strings
    
    //finding the first and last occuracne of a character in the string
    
    // let map = new Map();
    let mySet = new Set();
    const strarr=str.split("")
    //lets find the first and last occurance of each character
    const occurances={}
    strarr.forEach((char,index)=>{
        if(!occurances[char]){
            //find the first and the last occurance here andstore its indexes in occurances
            for(let i=strarr.length-1;i>index;i--){
                if(strarr[i]==char){
                    occurances[char]=[index,i]
                    break;
                }
            }
        }
    })
    Object.keys(occurances).forEach(key => {
        for(let i=occurances[key][0]+1;i<occurances[key][1];i++){
            mySet.add(key+strarr[i]+key)
        }
    });
    // console.log(mySet)
    return mySet.size

};

console.log(countPalindromicSubsequence("aabca"))