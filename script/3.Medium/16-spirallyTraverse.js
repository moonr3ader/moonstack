// Print a given matrix in spiral form

// [Approach] Using Simulation by Visited Matrix - O(m*n) Time and O(m*n) Space
function spirallyTraverse1(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    const res = [];
    const vis = Array.from({length : m},
                           () => Array(n).fill(false));

    // Arrays to represent the changes in row and column
    // indices: turn right(0, +1), turn down(+1, 0), turn
    // left(0, -1), turn up(-1, 0)
    const dr = [ 0, 1, 0, -1 ];
    const dc = [ 1, 0, -1, 0 ];

    // Initial position in the matrix
    let r = 0, c = 0;

    // Initial direction index (0 corresponds to 'right')
    let idx = 0;

    for (let i = 0; i < m * n; ++i) {
    
        // Add current element to result array
        res.push(mat[r][c]);

        // Mark current cell as visited
        vis[r][c] = true;

        // Calculate the next cell coordinates based on
        // current direction
        const newR = r + dr[idx];
        const newC = c + dc[idx];

        // Check if the next cell is within bounds and not
        // visited
        if (newR >= 0 && newR < m && newC >= 0 && newC < n
            && !vis[newR][newC]) {
            r = newR;
            c = newC;
        }
        else {
        
            // Change direction (turn clockwise)
            idx = (idx + 1) % 4;
            r += dr[idx];
            c += dc[idx];
        }
    }

    return res;
}

// Driver Code
const mat = [
    [ 1, 2, 3, 4 ], 
    [ 5, 6, 7, 8 ], 
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

const res = spirallyTraverse1(mat);
console.log(res.join(" "));

// [Expected Approach] Using Boundary Traversal - O(m*n) Time and O(1) Space
function spirallyTraverse2(mat2) {
    const m = mat.length;
    const n = mat[0].length;

    const res = [];

    // Initialize boundaries
    let top = 0, bottom = m - 1, left = 0, right = n - 1;

    // Iterate until all elements are printed
    while (top <= bottom && left <= right) {

        // Print top row from left to right
        for (let i = left; i <= right; ++i) {
            res.push(mat[top][i]);
        }
        top++;

        // Print right column from top to bottom
        for (let i = top; i <= bottom; ++i) {
            res.push(mat[i][right]);
        }
        right--;

        // Print bottom row from right to left (if exists)
        if (top <= bottom) {
            for (let i = right; i >= left; --i) {
                res.push(mat[bottom][i]);
            }
            bottom--;
        }

        // Print left column from bottom to top (if exists)
        if (left <= right) {
            for (let i = bottom; i >= top; --i) {
                res.push(mat[i][left]);
            }
            left++;
        }
    }

    return res;
}

// Driver Code
const mat2 = [[1, 2, 3, 4], 
             [5, 6, 7, 8], 
             [9, 10, 11, 12], 
             [13, 14, 15, 16]];

const res2 = spirallyTraverse2(mat2);
console.log(res2.join(" "));