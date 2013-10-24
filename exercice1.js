function adder()
{
	var args = Array.prototype.slice.call(arguments);
	
	return function(v)
	{
		var result=0;
		args.forEach(function(val)
		{
			result = result + val(v);
			});
		return result;
		
		}
	
	}

function mult(v){
	return function(e){
		return v*e;
		}
	}
function sub(a)
{
	return function(b)
	{
		return a-b;
		}
	
	}

console.log(adder(mult(2), mult(4))(2));
console.log(sub(0)(0));
console.log(sub(2)(1));
console.log(sub(2)(2));
console.log(sub(2)(4));
console.log(adder()(0));
console.log(adder()(1));
console.log(mult(2)(1));
console.log(adder(mult(2), mult(2))(1));
console.log(adder(mult(2), mult(2), mult(2))(1));
console.log(adder(mult(2), sub(2), mult(2))(1));
