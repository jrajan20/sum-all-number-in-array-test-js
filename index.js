
function sumItems(array) {
  // Sum all the numbers in the array
  var sum = 0;
   array.forEach(function(num){
   	
    if (Array.isArray(num)) {
      sum += sumItems(num); 
    } else{
	   sum += num;
    }
  });
  return sum;
}


module.exports = sumItems;