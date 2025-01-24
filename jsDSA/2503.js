const createHeapFromarray = (arr) => {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
};

const heapify = (arr, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] < arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] < arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};

let x = [100, 3, 2, 43, 6, 31, 65, 2, 89, 4];

createHeapFromarray(x);

console.log(x);
