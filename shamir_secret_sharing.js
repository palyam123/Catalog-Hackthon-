const BigInt = require('big-integer'); // For dealing with large integers

// Function to convert base to decimal
const decodeValue = (base, value) => {
    return parseInt(value, base);
};

// Parsing and decoding the test case values
const parseTestCase = (testCase) => {
    let points = [];
    for (let key in testCase) {
        if (!testCase[key].base) continue;
        const x = parseInt(key); // x value
        const y = decodeValue(parseInt(testCase[key].base), testCase[key].value); // Decode y based on base
        points.push([x, y]);
    }
    return points;
};

// Lagrange Interpolation function to solve the polynomial and find 'c'
const lagrangeInterpolation = (points, k) => {
    const n = points.length;

    // L function, computes the Lagrange basis polynomials
    const L = (x_i, i) => {
        let result = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                result *= (x_i - points[j][0]) / (points[i][0] - points[j][0]);
            }
        }
        return result;
    };

    let constantC = 0;

    // Iterate over the first 'k' points to compute the Lagrange interpolation
    for (let i = 0; i < k; i++) {
        const L_i = L(points[i][0], i);
        constantC += L_i * points[i][1]; // yi * Li(x)
    }

    return Math.round(constantC);
};

// Function to find the wrong points in test case 2
const findWrongPoints = (points, k) => {
    let wrongPoints = [];
    const constantC = lagrangeInterpolation(points, k);

    for (let i = k; i < points.length; i++) {
        const predictedY = lagrangeInterpolation(points.slice(0, k), k);
        if (predictedY !== points[i][1]) {
            wrongPoints.push(points[i]);
        }
    }

    return wrongPoints;
};

// Main function to find the secret 'c'
const findSecret = (testCase) => {
    const points = parseTestCase(testCase);
    const k = testCase.keys.k;
    return lagrangeInterpolation(points, k);
};

// Main function to process both test cases and output answers
const processTestCases = () => {
    // Sample Test Case 1
    const testCase1 = {
        "keys": {
            "n": 4,
            "k": 3
        },
        "1": {
            "base": "10",
            "value": "4"
        },
        "2": {
            "base": "2",
            "value": "111"
        },
        "3": {
            "base": "10",
            "value": "12"
        },
        "6": {
            "base": "4",
            "value": "213"
        }
    };

    // Sample Test Case 2
    const testCase2 = {
        "keys": {
            "n": 9,
            "k": 6
        },
        "1": {
            "base": "10",
            "value": "28735619723837"
        },
        "2": {
            "base": "16",
            "value": "1A228867F0CA"
        },
        "3": {
            "base": "12",
            "value": "32811A4AA0B7B"
        },
        "4": {
            "base": "11",
            "value": "917978721331A"
        },
        "5": {
            "base": "16",
            "value": "1A22886782E1"
        },
        "6": {
            "base": "10",
            "value": "28735619654702"
        },
        "7": {
            "base": "14",
            "value": "71AB5070CC4B"
        },
        "8": {
            "base": "9",
            "value": "122662581541670"
        },
        "9": {
            "base": "8",
            "value": "642121030037605"
        }
    };

    // Output for Test Case 1
    const secret1 = findSecret(testCase1);
    console.log('Output for testcase 1');
    console.log(secret1);

    // Output for Test Case 2
    const secret2 = findSecret(testCase2);
    console.log('Output for testcase 2');
    console.log(secret2);

    // Find wrong points in Test Case 2
    const pointsTestCase2 = parseTestCase(testCase2);
    const wrongPoints = findWrongPoints(pointsTestCase2, testCase2.keys.k);
    console.log('Wrong points in testcase 2 in (x,y) format');
    console.log(wrongPoints.map(point => `(${point[0]}, ${point[1]})`).join(", "));
};

// Run the test case processor
processTestCases();
