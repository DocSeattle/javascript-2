function randomFromArray(arr){
    //TODO: Your code here to select a random element from the array passed to the function.
    return arr[Math.floor(Math.random() * arr.length)];
  }
    //TODO: Export the randomFromArray with name randomSelect function.
export { randomFromArray as randomSelect }