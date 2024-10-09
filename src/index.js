/* eslint-disable no-console */
import { printAll } from './display';
import { randomSelect } from './randomSelect';
import { averageForStudent, averageForTest } from './ScoreCalc/averages';
// Candidate data:
const astronauts = ['Fox', 'Turtle', 'Cat', 'Hippo', 'Dog'];

const testTitles = ['Math', 'Fitness', 'Coding', 'Nav', 'Communication'];

const scores = [
  [95, 86, 83, 81, 76],
  [79, 71, 79, 87, 72],
  [94, 87, 87, 83, 82],
  [99, 77, 91, 79, 80],
  [96, 95, 99, 82, 70]
];

// User interface:
const prompts = ['display all scores', 'average the scores for each test', 'average the scores for each astronaut', 'select the next spacewalker'];

for (let i = 0; i < prompts.length; i + 1) {
  console.log(prompts[i]);
  if (i === 0) {
    printAll(astronauts, testTitles, scores);
  } else if (i === 1) {
    for (let j = 0; j < testTitles.length; j + 1) {
      const avg = averageForTest(j, scores);

      console.log(`${testTitles[j]} test average = ${avg}%.`);
    }
  } else if (i === 2) {
    for (let j = 0; j < astronauts.length; j + 1) {
      const avg = averageForStudent(j, scores);

      console.log(`${astronauts[j]}'s test average = ${avg}%.`);
    }
  } else {
    const walker = randomSelect(astronauts);

    console.log(`${walker} is the next spacewalker.`);
  }
}
