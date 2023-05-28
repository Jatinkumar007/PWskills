function correctabug(arr) {
  for (let i = 0; i < arr.length; i++) {
    let double = arr[i] * 2;
    arr.splice(i, 1, double);
  }
  console.log(arr);
}

correctabug([4, 3, 5, 6, 8]);
