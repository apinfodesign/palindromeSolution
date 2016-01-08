//pal2 - this is the algorithm to implement
//ignore other file 

var pal1 = "xaba";
var pal2 = "abbascd";
var pal3 = "dacxcabbbca";
var pal4 = "ablewasIereIsawelba"
var pal5 = "XablewasIereIsawelbaksksks;lllhele5"
var pal6 = "xabbahelloworldracecarabcdefghijihgfedcba"
var pal7 = "asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%"
var pal8 = "dkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkja;lkajidiei38984hgvkdjhellolloh"
var collector=[];

  	//inverts elements of any string
	//See: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
	var invert = function(test){
		var invertTest = '';
	  	for (var i = test.length - 1; i >= 0; i--)
	    invertTest += test[i];
		//console.log("invertTest is: ", invertTest, ' and test is: ', test);
		return invertTest;
	}

	//compare two arrays, returns true if equal
	var pairwisecompare = function(test,invertTest){
	    if ((test !== invertTest ) || (test.length<2)){	
	    	return false;
	    }
 	  	console.log("Palindrome: ", invertTest);
	  	return true;
	}

	//sort by length to select longest palindrome
	var selectbest = function(collector){
  		collector.sort(function(a, b){
  			return b.length - a.length; // ASC -> a - b; DESC -> b - a
			});
		console.log("The longest palindrome is: ", collector.shift() );
	}

	//generate all possible combinations for invert and compare		 
	var findpalindrome = function(test){
 		console.log('Given string: ', test);
		var test = test.slice('');
		//iterate over all positions -- i represents start position
		for(i=0; i<test.length; i++){
			//on each start position iterate over all combinations to right
	 		for(j=0; j<(test.length-i); j++){
				caseTest = test.slice(j, (test.length-i) );//Note! -i, not -j
			 	invertTest=invert(caseTest);
				if(pairwisecompare(caseTest,invertTest)===true){ 
	 				//console.log('Found a match ******');
	 				collector.push(caseTest);
 	 			}
	 		}
		}
		//select longest
		selectbest(collector);
	};

findpalindrome(pal5);

