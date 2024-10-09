import { printAll } from './display.js';
import { randomSelect } from './randomSelect.js';
import { averageForStudent, averageForTest } from './ScoreCalc/averages.js';
//Candidate data:
let astronauts = ['Fox','Turtle','Cat','Hippo','Dog'];

const testTitles = ['Math','Fitness','Coding','Nav','Communication'];

let scores = [[95, 86, 83, 81, 76],[79, 71, 79, 87, 72],[94, 87, 87, 83, 82],[99, 77, 91, 79, 80],[96, 95, 99, 82, 70]];

//User interface:
let prompts = ['display all scores', 'average the scores for each test', 'average the scores for each astronaut','select the next spacewalker'];

for (let i = 0; i<prompts.length; i++){
  console.log(prompts[i])
    if (i===0){
      //TODO: Call 'printAll' here and pass in all necessary arguments.
      printAll(astronauts, testTitles, scores);
    } else if (i===1){
      for (let j = 0; j<testTitles.length; j++){
        let avg = averageForTest(j, scores);//TODO Call 'averageForTest' here. Pass in j and scores as arguments.
        
        console.log(`${testTitles[j]} test average = ${avg}%.`);
      }
    } else if (i===2){
      for (let j = 0; j<astronauts.length; j++){
        let avg = averageForStudent(j, scores);//TODO Call 'averageForStudent' here. Pass in j and scores as arguments.
        
        console.log(`${astronauts[j]}'s test average = ${avg}%.`);
      }
    } else {
      let walker = randomSelect(astronauts);//Call 'randomSelect' to pick a spacewalker from the astronauts array.
      
      console.log(`${walker} is the next spacewalker.`);
    }
}
