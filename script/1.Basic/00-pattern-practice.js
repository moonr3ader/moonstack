// PATTERN PROBLEMS MUST BE DONE BEFORE STARTING DSA
/* why important b/fore starting DSA?
- One thing common in all of DSA is LOOPS, if you do not understand Loops in depth and cannot improvise with loops then there will be a problem when doing DSA
- That is why patterns are so important because if you want to master something like Loops you want to understand how loops work, if you know how to play around it then you can get very very good at DSA
- To master Loops you have to do patterns
 */

// 4-STEPS TO PRINT ANY PATTERN -> Always remember: Patters = Nested Loops
// outer loop = rows, inner loop = columns
// 1. For the outer loop, count the numebr of lines
// 2. For the inner loop, focus on the columns and connect them somehow to the rows
// 3. Whatever you're printing, print them inside the inner for loop
// 4. Observe symmetry in case of some patterns [optional]

function tempES(n){
    /* pattern tempES will print

    * * * * 
    * * * * 
    * * * * 
    * * * * 

    */
    //Using ES6 Repeat and template literals to print square of stars
    const rowOfSquare = '* '.repeat(n);

    //using template literals, \n is used for next line
    const square = `${rowOfSquare}\n`.repeat(n);
    // printing the square
    console.log(square);
}

function print1(n){
    /* pattern print1 will print

    * * * * *
    * * * * *
    * * * * *
    * * * * *

    */
    for(let i = 0; i <= n; i++){
        //Outer loop for rows
        let row = "";
        //Inner loop for colums
        for(let j = 0; j < n; j++){
            // Add start and space for spacing
            row+="* ";
        }
        console.log(row);
    }
}

function print2(n){
    /* pattern print2 will print

    * 
    * *
    * * *
    * * * * 
    * * * * *

    */
    for(let i=1; i<=n;i++){
        let row = "";
        for(let j=0;j<i;j++){
            row+="* ";
        }
        console.log(row);
    }
}

function print3(n){
    /* pattern print3 will print

    1 
    1 2 
    1 2 3
    1 2 3 4
    1 2 3 4 5

    */
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=0;j<i;j++){
            row+=`${j+1} `;
        }
        console.log(row);
    }
}

function print4(n){
    /* pattern print4 will print

    1 
    2 2 
    3 3 3
    4 4 4 4
    5 5 5 5 5

    */
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=0;j<i;j++){
            row+=`${i} `;
        }
        console.log(row);
    }
}

function print5(n){
    /* pattern print5 will print

    * * * * *
    * * * *
    * * *
    * *
    *

    */
    for(let i=1;i<=n;i++){
        let row="";
        for(let j = 0;j < n-i+1; j++){
            row+="* ";
        }
        console.log(row);
    }
}

function print6(n){
    /* pattern print6 will print

    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1

    */
    for(let i = 1;i <= n;i++){
        let row="";
        for(let j = 1;j <= n-i+1; j++){
            row+=j;
        }
        console.log(row);
    }
}

function print7(n){
    /* pattern print5 will print

         *
        * *
       * * *
      * * * *
     * * * * *
    */
    for(let i=0;i<=n;i++){
        // space
        let str = "";

        for(let j = i; j < n; j++){
            str += "  ";
        }
        // stars
        for(let j=1;j<=(2*i+1);j++){
            str += "* ";
        }

        console.log(str);
    }
}

function print8(n){
    
}

// PRINTING FROM SINGLE TEST
let t = 5;
print1(t);


// // ONLINE COMPILER'S BACKEND WILL LOOK MORE LIKE THIS
// let testCases = [4, 6];
// for(let i = 0; i < t; i++){
//     let n = testCases[i];
//     print3(n); 
//     //WILL RUN THROUGH ALL TEST CASES USING LOOP
// }
