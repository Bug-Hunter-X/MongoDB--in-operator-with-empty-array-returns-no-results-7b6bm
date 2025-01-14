# MongoDB $in operator with empty array returns no results

This repository demonstrates a common error when using the `$in` operator in MongoDB queries with an empty array.  The `$in` operator is expected to return all documents when the array is empty, as it effectively acts as a no-op, but in some cases it will return no results instead.  This behaviour can be unexpected and lead to logic errors in applications.

The `bug.js` file shows the incorrect usage. The `bugSolution.js` file provides a workaround.

## How to Reproduce

1. Clone this repository.
2. Install MongoDB.
3. Run `bug.js` to reproduce the issue.
4. Run `bugSolution.js` to see how to fix the issue.
