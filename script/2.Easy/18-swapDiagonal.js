// [Approach 1] Diagonal Buffer Swap - O(n) Time and O(n) Space

function swapDiagonal1(mat) {
    const size = mat.length;
    const majorDia = new Array(size);
    const minorDia = new Array(size);

    // Store major and minor diagonal elements
    for (let i = 0; i < size; i++) {
        majorDia[i] = mat[i][i];
        minorDia[i] = mat[i][size - i - 1];
    }

    // Swap the diagonals by placing stored values
    for (let i = 0; i < size; i++) {
        mat[i][i] = minorDia[i];
        mat[i][size - i - 1] = majorDia[i];
    }
}

const mat = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];

swapDiagonal1(mat);
for (let row of mat) {
    console.log(row.join(' '));
}

// [Approach 2] Two-Pointer Diagonal Swap - O(n) Time and O(1) Time

function swapDiagonal2(mat) {
    const size = mat.length;

    for (let i = 0; i < size; i++) {
        
        // Swap major and minor diagonal elements
        let temp = mat[i][i];
        mat[i][i] = mat[i][size - i - 1];
        mat[i][size - i - 1] = temp;
    }
}

swapDiagonal2(mat);
for (let row of mat) {
    console.log(row.join(' '));
}