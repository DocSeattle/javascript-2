function averageForStudent (nameIndex, scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i + 1) {
    sum += scores[nameIndex][i];
  }
  const average = sum / scores[nameIndex].length;
  return average;
}

function averageForTest (testIndex, scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i + 1) {
    sum += scores[i][testIndex];
  }
  const average = sum / scores[0].length;
  return average;
}

// TODO: Export all functions within an object.
export { averageForStudent, averageForTest };
