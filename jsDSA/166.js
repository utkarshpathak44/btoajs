var fractionToDecimal = function (numerator, denominator) {
  if(parseInt(numerator/denominator)==numerator/denominator)
    return (numerator/denominator)+"";
  let i = 0;
  let stack = [];
  let fractionalPart = "";
  let doubleCarry=true
  while (i < 20) {
    if (stack.includes(numerator)) break;
    stack.push(numerator);
    if (numerator > denominator) {
    doubleCarry=true
      fractionalPart += parseInt(numerator / denominator);
      numerator = numerator % denominator;
      if(numerator==0){
        return parseInt(4 / 333) + "." + fractionalPart;
      }
    }
    else if (numerator < denominator) {
      numerator *= 10;
      doubleCarry=!doubleCarry;
      if(doubleCarry){
        fractionalPart+="0"
      }
    }
  }
  return parseInt(numerator/denominator) + ".(" + fractionalPart + ")";
};

console.log(fractionToDecimal(1,6))
