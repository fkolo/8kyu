//Count of positives/ sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let plusArr = [];
    let minusArr = [];
  	
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            plusArr.push(input[i])

        } else if (input[i] < 0) {
            minusArr.push(input[i])
        } 
    }
  return [plusArr.length, minusArr.reduce((acc, c) => acc + c, 0)]
}

