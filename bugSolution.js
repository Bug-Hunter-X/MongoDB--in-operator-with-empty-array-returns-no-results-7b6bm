```javascript
// Solution: Check for empty array before using $in operator
const queryArray = someFunctionToGetArray();

let query = {};
if (queryArray.length > 0) {
  query = { field: { $in: queryArray } };
}

db.collection.find(query);
```