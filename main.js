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

    // Bubble solution #0 score: 60
    // Bubble solution #1 score: 50
    // Bubble solution #3 score: 60
    // Bubbles tests: 36
    // Highest bubble score: 69
    // Solutions with highest score: #11, #18

    // let i = 0
    
    // while (i < scores.length) {
    //     output = "Bubble solution #" + i + " score: " + scores[i]
    //     console.log(output);
        
    //     i = i + 1
    // }

    let output;
    let highScore = 0

    for(let i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i]
        console.log(output);
        if (highScore < scores[i]) {
            highScore = scores[i]
        }
        
    }
        
    console.log("Bubbles tests: " + scores.length);
    console.log("Highest bubble score: " + highScore);
    
    
