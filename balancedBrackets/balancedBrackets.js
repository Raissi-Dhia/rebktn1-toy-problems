/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
	var count1 = 0; 
	var count2 = 0;
	var count3 = 0;
	var count = count1 + count2 + count3 ;

	for (i = 0; i < str.length; i++) {
		if (count1 < 0) {
			return false
		}
		 if (str[i] === '('){
			count1 = count1 +1;
		}
		  if (str[i] === ')') {
			count1 = count1 - 1; 
		}

			 if (str[i] === '{'){
			count2 = count2 +1;
		}
		  if (str[i] === '}') {
			count2 = count2 - 1; 
		}

			 if (str[i] === '['){
			count3 = count3 +1;
		}
		  if (str[i] === ']') {
			count3 = count3 - 1; 
		}
		
	}

	if (count === 0) {
		return true;
	}
	 return false 
	
};
