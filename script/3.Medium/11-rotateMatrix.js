// Reversing Rows and Transposing - O(n2) Time and O(1) Space

function rotateMatrix(mat) {
    const n = mat.length;

    // Reverse each row
    for (let i = 0; i < n; i++) {
        mat[i].reverse();
    }

    // Performing Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        }
    }
}

// Driver code
const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

rotateMatrix(mat);

for (const row of mat) {
    console.log(row.join(" "));
}
