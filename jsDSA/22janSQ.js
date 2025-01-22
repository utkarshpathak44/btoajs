// You are given a string of comma-separated words, e.g., "apple,banana,orange,apple,grape,banana". Write a function to:
// 	1.	Convert the string into an array of unique words.
// 	2.	Sort the words in alphabetical order.
// 	3.	Return the sorted array as a single string of comma-separated values.

// const fun1=str=>(str.split(",").reduce((arr,ele)=>{
//     if(!arr.includes(ele))
//         arr.push(ele)
//     return arr
// },[]).sort()) .join(",")


// console.log(fun1("apple,banana,orange,apple,grape,banana"))


const fun1=(date)=>{ 
    return new Date(date).getMonth()+1+"/"+new Date(date).getDate()+"/"+new Date(date).getFullYear()
}
const dateStr = '2025-01-22T07:42:14.159Z'

// console.log(fun1('2025-01-22T07:42:14.159Z'))

// console.log(new Date().toLocaleDateString())
// console.log(new Date().toUTCString())


// Write a function to count the occurrences of each category and return an object where
//  the keys are the categories and the values are their counts.

const inputCategories = ["fruit", "vegetable", "fruit", "meat", "fruit", "vegetable", "meat"];


// const fun2=(inputCategories)=>{ 
//     return inputCategories.reduce((obj,ele)=>{
//         if(!obj[ele]){
//             (obj[ele]=1)
//         }
//         else {
//             obj[ele]=obj[ele]+1
//         }
//         return obj
//     },{})
// }


const fun2 = (inputCategories) => 
    inputCategories.reduce((obj, ele) => {
        obj[ele] = (obj[ele] || 0) + 1;
        return obj;
    }, {});

// console.log(fun2(inputCategories))

const a1= [1, 4, 7]
const a2 = [2, 5, 8]
const a3 = [3, 6, 9]

const fun3=(a1,a2,a3)=>[...a1,...a2,...a3].sort()


// console.log(fun3(a1,a2,a3))


const fun4=(students)=>{
    return students.reduce((arr,row)=>{
        if(!arr.find((ele)=>ele.name===row.name)){
            arr=[...arr,{name:row["name"],scores:{[row.subject]:(row.score)}}]
        }else{
            arr.find((ele)=>ele.name==row.name).scores[row.subject]=(row.score)
        }
        return arr
    },[])
}


// console.log(fun4([
//     { name: "Alice", subject: "Math", score: 85 },
//     { name: "Bob", subject: "Math", score: 90 },
//     { name: "Alice", subject: "English", score: 78 },
//     { name: "Bob", subject: "English", score: 82 },
//     { name: "Alice", subject: "Science", score: 92 },
//     { name: "Bob", subject: "Science", score: 88 }
//    ]))


const fun5=(num)=>{
    return {min:Math.min(...num),max:Math.max(...num),avg:num.reduce((acc,val)=>acc+val,0)/num.length}
}

// console.log(fun5([15, 20, 35, 40, 50, 65, 80]))


const fun6=(strings,substr)=>{
    return strings.filter((str)=>str.includes(substr))
}

// console.log(fun6(["apple", "banana", "grape", "pineapple", "orange"],"app"))

const fun7=(num)=>{
return num.map((num)=>num*num+1)
}


// console.log(fun7([1, 2, 3, 4, 5]))

const fun8=()=>{

}

console.log(fun8())