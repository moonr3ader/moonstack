function multiply(mat1, mat2) {
    let n = mat1.length;
    let m = mat1[0].length;
    let q = mat2[0].length;

    // Initialize the result matrix with 
    // dimensions n×q, filled with 0s
    let res = Array.from({ length: n }, () => Array(q).fill(0));

    // Loop through each row of mat1
    for (let i = 0; i < n; i++) {

        // Loop through each column of mat2
        for (let j = 0; j < q; j++) {

            // Compute the dot product of 
            // row mat1[i] and column mat2[][j]
            for (let k = 0; k < m; k++) {
                res[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }

    return res;
}

// Driver code

let mat1 = [[1, 2, 3],[4, 5, 6]];
let mat2 = [[7, 8],[9, 10],[11, 12]];

let res = multiply(mat1, mat2);
for (let i = 0; i < res.length; i++) {
    console.log(res[i].join(" "));
}
