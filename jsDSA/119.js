var getRow = function (rowIndex) {
  let result = [];
  for(let i=0;i<rowIndex+1;i++)result[i]=1
  console.log(result)
  for (let i = 1; i < rowIndex; i++)
    for (let j = i; j >= 1; j--) 
      result[j] += result[j - 1];
  return result;
};

console.log(getRow(3));
