var searchRange = function (nums, target) {
  return nums.reduce(
    (arr, val, index) => {
      if (target === val) {
        if (arr[0] === -1) {
          arr[0] = index;
        }
        arr[1] = index;
      }
      return arr;
    },
    [-1, -1]
  );
};

console.log(searchRange([1, 2, 3, 2, 3, 4, 1, 2, 5, 4], 2));
