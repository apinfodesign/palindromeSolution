//pal2 - this is the algorithm to implement
//ignore other file 

(function(){

	// 'use strict';
	var pal1 = "xaba";
	var pal2 = "abbascd";
	var pal3 = "dacxcabbbca";
	var pal4 = "ablewasIereIsawelba"
	var pal5 = "XablewasIereIsawelbaksksks;lllhele5"
	var pal6 = "racecararacecarisasiisasiabeautifulpooloop"
	var pal7 = "asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%asdlfkjka;kdsjfadsklfjdkdkasd;lkfj393928882345%$@#@#$%"
	var pal8 = "dkdkddkdkdkja;lkajidiei38984hgvkdjhellolloh"
	var collector=[];


		//generate all possible combinations for invert and compare		 
		function findpalindrome(test){
	 		console.log('Given string: ', test);
			//var test = test.slice('');
			//iterate over all positions -- i represents start position
				//make this method
			for(var i=0; i<test.length; i++){
				//on each start position iterate over all combinations to right

				var maxend = test.length-i;
		 		for(var j = 0; j < maxend; j++){    //avoid less than two here

					var caseTest = test.slice(j, maxend );//Note! -i, not -j
				 	invertTest = invert(caseTest);
					if(pairwisecompare(caseTest,invertTest) ){ 
		 				//console.log('Found a match ******');
		 				collector.push(caseTest);
	 	 			}
		 		}
			}
			////////////////to here

			//select longest
			selectbest(collector);
		};

	  	//inverts elements of any string
		//See: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
		function invert(test){
			var invertTest = '';
		  	for (var i = test.length - 1; i >= 0; i--)
		    invertTest += test[i];
			//console.log("invertTest is: ", invertTest, ' and test is: ', test);
			return invertTest;
		}

		//compare two arrays, returns true if equal
		function pairwisecompare(test,invertTest){
			//switch these
		    if ((test !== invertTest ) || (test.length<2)){	
		    	return false;
		    }
	 	  	console.log("Palindrome: ", invertTest);
		  	return true;
		}

		//look for npm debug library
		//sort by length to select longest palindrome
		//use reduce

		function selectbest(collector){
	  		collector.sort(function(a, b){
	  			return b.length - a.length; // ASC -> a - b; DESC -> b - a
				});
			console.log("The longest palindrome is: ", collector.shift() );
		}


	findpalindrome(pal6);

})();  //self executing
