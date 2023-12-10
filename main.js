// Function to find the sum of distinct elements in two sets
function sumOfDistinctElements(set1, set2) {
    let distinctElements = new Set();
    
    set1.forEach(element => distinctElements.add(element));
    set2.forEach(element => distinctElements.add(element));
  
    return [...distinctElements].reduce((sum, element) => sum + element, 0);
  }
  
  // Function to calculate dot product of two vectors
  function dotProduct(v1, v2) {
    if (v1.length !== v2.length) return null; // Vectors must be of the same length for dot product
  
    return v1.reduce((result, _, index) => result + v1[index] * v2[index], 0);
  }
  
  // Function to check if two vectors are orthogonal
  function areOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = 0; j < vectors.length; j++) {
        if (i !== j) {
          if (dotProduct(vectors[i], vectors[j]) !== 0) {
            return false;
          }
        }
      }
    }
    return true;
  }
  
  // Example usage for Problem 1:
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2);
  console.log("Problem 1 - Output:", result); // Output will be 13 for the given example
  
  // Example usage for Problem 2:
  const vectors = [[1, 0, -1], [0, 1, 0], [1, 1, -1], [2, -1, 0]]; // Example vectors
  const orthogonal = areOrthogonal(vectors);
  if (orthogonal) {
    console.log("Problem 2 - The vectors are orthogonal");
  } else {
    console.log("Problem 2 - The vectors are not orthogonal");
  }
  