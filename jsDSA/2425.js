// var xorAllNums = function(nums1, nums2) {
//     let res=[]
//     nums1.forEach(element1 => {
//         nums2.forEach(element2=>{
//             res.push(element1^element2)
//         })
//     });
//     return res.reduce((xor,val)=>{
//         return xor^val
//     },0)
// };


var xorAllNums = function(nums1, nums2) {
    //if the numbers are repeated even times then xor dosent matter
    //if the numbers are repeated odd times then xor matters
    let xor = 0;
    if(nums1.length%2!==0){
        nums2.forEach(element1 => {
            xor^=element1
        })
    }
    if(nums2.length%2!==0){
        nums1.forEach(element1 => {
            xor^=element1
        })
    }
    return xor
};

console.log(xorAllNums([2,1,3],[10,2,5,0]))