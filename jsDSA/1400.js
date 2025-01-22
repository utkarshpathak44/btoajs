function charFrequencyMap(str){
    return str.split("").reduce((freq,char)=>{
        freq[char] = (freq[char] || 0) + 1;
        return freq;
    },{})
}

function canConstruct(str,num){
    //each string need to have an even number of the characters, except one central characters
    //each palindromic string can have at max one lonely character
    // if the number of odd character occurances are greater than k
    if(str.length<num){
        return 0;
    }
    let k=Object.entries(charFrequencyMap(str))
    // k.sort((a,b)=>a[1]-b[1])
    const lonelyItems=k.reduce((prev,curr,index)=>{
        if(curr[1]%2==1)return prev+1
        return prev
    },0)  
    return lonelyItems<=num?true:false
}
console.log(canConstruct("thisisarealstring"))