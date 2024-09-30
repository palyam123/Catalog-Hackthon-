# Shamir's Secret Sharing Algorithm Assignment

## Problem Statement

In this project, we implement a simplified version of **Shamir's Secret Sharing Algorithm** to solve for the constant term `c` of a polynomial based on given roots. The algorithm is designed to decode values provided in different numerical bases, apply Lagrange interpolation, and calculate the constant term `c`.

Additionally, the program identifies imposter points (wrong points) in test case 2, which do not lie on the curve.

## Test Cases

### Test Case 1

- We are given `n = 4` roots and `k = 3` (minimum number of roots needed to solve the polynomial).
- The input roots are provided in different bases and need to be decoded to get the `(x, y)` points.
- The goal is to find the constant `c` of the polynomial using Lagrange interpolation.

### Test Case 2

- We are given `n = 9` roots and `k = 6`.
- The input roots are also provided in different bases, and some points may be imposters.
- The goal is to:
  1. Find the constant `c` of the polynomial.
  2. Identify any wrong points that do not lie on the polynomial curve.

## Approach

### 1. Decoding the Roots
Each `y` value in the input is encoded in a specific numerical base. We first decode these `y` values and form the `(x, y)` pairs for further calculations.

### 2. Lagrange Interpolation
We apply **Lagrange interpolation** to find the constant term `c` of the polynomial, which fits the first `k` points.

### 3. Detecting Wrong Points
In Test Case 2, we identify wrong points by comparing the calculated curve with the provided points.

## How to Run

### Prerequisites
- You need **Node.js** installed on your system.
- Clone this repository to your local system.

### Steps to Run:
1. Install the necessary packages by running:
   ```bash
   npm install big-integer
2. Run this command in Terminal or Bash
   node shamir_secret_sharing.js

