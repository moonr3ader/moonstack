function rotateMatrix(mat) {
    const n = mat.length;

    // Create an auxiliary matrix
    const res = Array.from({ length: n }, () => 
                                    Array(n).fill(0));

    // Move mat[i][j] to mat[n-i-1][n-j-1]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = mat[n - i - 1][n - j - 1];
        }
    }

    // Copy result back to original matrix
    for (let i = 0; i < n; i++) {
        mat[i] = res[i].slice();
    }
}

// Driver code
const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotateMatrix(mat);
mat.forEach(row => console.log(row.join(" ")));
