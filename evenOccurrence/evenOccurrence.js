/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence(	// 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence (arr) {
 var obj = {};
 var result = null;


for (var i =0; i < arr.length; i++){
   let each = arr[i]
   if (obj[each]){
     obj[each][0] += 1;
     
   } else {
     obj[each] = [1, i]
   }
 }
 
for (var key in obj){
   if (obj[key][0] %2 === 0){
 if (result === null){
     result = key;
  } else if (obj[key][1] < result[1]){
    result = key;
 }
}
 }
  return  result;
}