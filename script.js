function threeSum(arr, target) {
// write your code here
  let n=arr.length;
	let temp=Number.MAX_VALUE; 
	
	let add=0;
	for(let i=0; i<=n-3; i++){
		for(let j=0; j<3;j++){
			add=add+arr[j];
		}
		let diff=math.abs(add-target);
		if(temp>diff){
			temp=diff;
		}
		add=0;
	}
	return temp;
}

module.exports = threeSum;
