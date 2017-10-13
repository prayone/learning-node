function isEvenordd(number,callback){
	if(typeof number==='number'){
			if(number%2){
				callback(null,'当前传入的是奇数')
			} else {
				callback(null,'当前传入的是偶数')
			}

	} else {
		callback(new Error('你传入的不是数字'))
	}
}

isEvenordd(99,(error,data)=>{
	if(error) {
		throw error;
	}else{
		console.log(data)
	}
})