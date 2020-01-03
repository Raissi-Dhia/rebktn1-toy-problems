/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
	
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
	var max = [0, 0];
	var current = [0, 0];
 
	for (var i = 1; i < string.length; i++) {
	   let prev = string[i - 1];
	   let gap = max[1] - max[0];
	   let gapOne = current[1] - current[0];

	   if (prev === string[i]) {
		   	current[1] = i;
		   	if (gapOne >= gap) {
		   		max = current;
	   		}
	   }
	   // else if (prev !== string[i]) {
		 
		 // }
	    else {
	   		current = [i, i];
	   }
	}
	return max ;
}
