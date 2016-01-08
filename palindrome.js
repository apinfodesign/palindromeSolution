//first try - ignore this one - see other file

var pal1 = "xabacd";
var pal2 = "abbascd";
var pal3 = "dacxcabbbca";

//eval current letter 0 to length
evalpal = function evalpal(pal){

	var pal = pal.split("");   //array from string
	console.log(pal, pal.length);  
	var plusfactor = 1;
	var minusfactor = 1;
	var foundPal=[];

	for (i=0; i<pal.length; i++){

		console.log('');
		console.log("i is: ", i, " and letter is: ", pal[i]);
		console.log("evaluate these two: ", pal[i-minusfactor], " ", pal[i+plusfactor] )	

		if (( i-minusfactor > -1 ) && (i+plusfactor < pal.length)){ 

			console.log('found in range to compare....');

			if(pal[i-minusfactor] === pal[i+plusfactor]){

				console.log(pal[i-minusfactor], " ", pal[i+plusfactor] )	
				console.log('found equal values on each side');
 
				//assemble palindrome (begin to end) and push to array
 				


				//foundPal = assembledPal.push;
				console.log("xxxxx foundPal is: ", foundPal);
			}

		}

		else (console.log ("out of range comparison") );
	}
}

//eval plus increments 1 to half of string length

	//get increment plus one and minus one

		//If plus or minus null, stop

		//if plus/minus one equal , push to found pal array

		//if current equals plus, increment plus factor

		//if current equals minus, increment minus factor


//after all letters eval

	//iterate through found pal array

		//find longest somehow

	//console log (longest)

evalpal(pal1);

