// 0 => 60
// 1 => 50
// 2 => 60
// 3 => 58
// 4 => 54
// 5 => 54
// 6 => 58
// 7 => 50
// 8 => 52
// 9 => 54

// const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

// console.log(scores[0]);
// console.log(scores[2]);

// const pets = ["dog", "cat", "rat"];

// console.log(pets[2]);
// console.log(pets[3]);

// console.log(pets.length);
// console.log(scores.length);

// pets[2] = "parrot";
// console.log(pets);

// function getRandomElement(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }
// const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
// const words2 = ["любит есть", "хочет погрызть", "всегда ищет"];
// const words3 = ["морковку", "макороны", "косточку"];
// const words4 = ["Мой хомяк", "Моя крыса", "Мой енот"]

// function makePhrases(param1, param2, param3) {
//  const result = getRandomElement(param1) + " " + getRandomElement(param2) + " " + getRandomElement(param3);
//  return result;
// }

// alert(makePhrases(words4, words2, words3));




const scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

const costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25, 
    .25, .25, .27, .25, .26, .29];    

    // Bubble solution #0 score: 60
    // Bubble solution #1 score: 50
    // Bubble solution #3 score: 60
    // Bubbles tests: 36
    // Highest bubble score: 69
    // Solutions with highest score: #11, #18

    // Bubble Solution #11 is the most cost effective;

    // let i = 0
    
    // while (i < scores.length) {
    //     output = "Bubble solution #" + i + " score: " + scores[i]
    //     console.log(output);
        
    //     i = i + 1
    // }


    function getBestScores(array, maxValue) {
        const bestSolutions = []

    for(let i = 0; i < array.length; i++) {
        if(array[i] === maxValue) {
            bestSolutions.push(i)
        } 
    }
    return bestSolutions
    }

    function printAndGetHighScore(array) {
        let output;
        let highScore = 0
        let minScore = array[0]
        for(let i = 0; i < array.length; i++) {
            output = "Bubble solution #" + i + " score: " + array[i]
            console.log(output);
            if (highScore < array[i]) {
                highScore = array[i]
            } else if (minScore > array[i]) {
                minScore = array[i]
            }
            
        }
        return highScore
       }

       function getMostCostEffectiveSolution(resultArray, costsArray, maxValue) {
        let index;
        const bestSolutions = getBestScores(resultArray, maxValue)
        if(costsArray[bestSolutions[0]] < costsArray[bestSolutions[1]]){
            index = bestSolutions[0]
        } else {
            index = bestSolutions[1]
        }
        return index
       }


    //print scores and get high score   
   const minScore = printAndGetHighScore(scores) 
   const highScore = printAndGetHighScore(scores)

   console.log("Bubbles tests: " + scores.length);
   console.log("Highest bubble score: " + highScore);
   console.log("Min bubble score: " + minScore);

   //get best scores
  const bestSolutions = getBestScores(scores, highScore)
  console.log("Solutions with highest score: " + bestSolutions)
    
//get most cost effective solution
const mostCostEffecttive = getMostCostEffectiveSolution(scores, costs, highScore)
console.log("Bubble solution #" + mostCostEffecttive + " is the most cost effective");
