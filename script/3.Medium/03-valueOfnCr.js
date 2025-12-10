// nCr.js - handles multiple test cases, returns exact BigInt results.
//
// Input formats supported:
// 1) Single case: "5 2"  (two numbers only)
// 2) Multiple pairs without count: "5 2\n2 4\n5 0"  (any even number of tokens -> pairs)
// 3) First token is t (odd token count): "3\n5 2\n2 4\n5 0"
//
// Output: one line per case with exact nCr value.
//
// Strategy:
// - If maxN <= MAX_PASCAL_N and number of cases > 1, precompute Pascal's triangle up to maxN (O(maxN^2) time).
// - Otherwise compute each case using multiplicative method with BigInt and using symmetry r = min(r, n-r).

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).filter(Boolean).map(Number);
if (input.length === 0) {
  process.exit(0);
}

// parse input into array of [n,r] pairs
let pairs = [];
if (input.length === 2) {
  pairs.push([input[0], input[1]]);
} else if (input.length % 2 === 1) {
  // assume first token is t
  const t = input[0];
  let idx = 1;
  for (let i = 0; i < t && idx + 1 < input.length; i++) {
    pairs.push([input[idx], input[idx + 1]]);
    idx += 2;
  }
  // if parsing produced fewer pairs than t, but input had pairs anyway, we still use parsed pairs
} else {
  // even number of tokens -> treat as sequential pairs
  for (let i = 0; i < input.length; i += 2) {
    pairs.push([input[i], input[i + 1]]);
  }
}

// find max n and counts
let maxN = 0;
for (const [n, r] of pairs) {
  if (Number.isNaN(n) || Number.isNaN(r)) continue;
  if (n > maxN) maxN = n;
}

const CASES = pairs.length;

// Heuristic: if maxN is reasonably small (<= 2000) and there are multiple cases,
// Pascal precompute is fast and gives O(1) per query.
// Otherwise use multiplicative BigInt per-case.
const MAX_PASCAL_N = 2000;

function computeWithPascal(maxN, queries) {
  // Build Pascal triangle rows 0..maxN (only up to k <= n)
  // store as BigInt arrays
  const C = new Array(maxN + 1);
  C[0] = [1n];
  for (let n = 1; n <= maxN; n++) {
    const row = new Array(n + 1);
    row[0] = 1n;
    row[n] = 1n;
    for (let k = 1; k < n; k++) {
      row[k] = C[n - 1][k - 1] + C[n - 1][k];
    }
    C[n] = row;
  }
  // answer queries
  return queries.map(([n, r]) => {
    if (r < 0 || n < 0) return '0';
    if (r > n) return '0';
    return C[n][r].toString();
  });
}

function computeMultiplicative(queries) {
  // For each query use product formula with BigInt:
  // C(n, r) = product_{i=1..r} (n-r+i)/i  (do with BigInt and choose r = min(r, n-r))
  return queries.map(([nRaw, rRaw]) => {
    let n = Number(nRaw), r = Number(rRaw);
    if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0) return '0';
    if (r > n) return '0';
    if (r === 0 || r === n) return '1';
    r = Math.min(r, n - r);
    let res = 1n;
    for (let i = 0; i < r; i++) {
      // multiply by (n - i) then divide by (i + 1)
      // use BigInt arithmetic; division will be exact
      res = res * BigInt(n - i) / BigInt(i + 1);
    }
    return res.toString();
  });
}

// choose strategy
let outputs;
if (maxN <= MAX_PASCAL_N && CASES > 1) {
  outputs = computeWithPascal(maxN, pairs);
} else {
  outputs = computeMultiplicative(pairs);
}

// print results, one per line
console.log(outputs.join('\n'));
