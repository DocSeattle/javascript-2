/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// TODO: Export ONLY the printAll function.

export default function printAll (names, tests, scores) {
  let header = 'Name';
  let row = '';

  for (let i = 0; i < tests.length; i + 1) {
    header += `\t${tests[i]}`;
  }
  console.log(header);

  for (let name = 0; name < names.length; name + 1) {
    row = names[name];
    for (let score = 0; score < scores[name].length; score + 1) {
      row += `\t${scores[name][score]}`;
    }
    console.log(row);
  }
}

function printStudentScores (index, students, tests, scores) {
  console.log(`Test results for ${students[index]}:`);
  for (let i = 0; i < tests.length; i + 1) {
    console.log(`${tests[i]} = ${scores[index][i]}%.`);
  }
}

function printTestScores (index, test, students, scores) {
  console.log(`Class results for ${test} test:`);
  for (let i = 0; i < students.length; i + 1) {
    console.log(`${students[i]} = ${scores[i][index]}%.`);
  }
}
