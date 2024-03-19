const binarySearch = (arr, searchedValue) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midValue = arr[mid];

    if (midValue === searchedValue) {
      return mid;
    }

    if (midValue < searchedValue) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
