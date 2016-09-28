var SIZE=8
var checkPlacement = function(partial,col)
{
	//var SIZE=8
	var row = partial.length;
	if (partial)
	{
		var spread = 1;
		
		var i=row-1;
		//i=0
		for (;i>=0;i-=1)
		{
			var prow=i;
			var a = parseInt(partial[prow])
			if ((a == col) || (a ==col-spread) || (a == col+spread))
			{
      	 			return false;
			}
      			spread += 1;
		}  
	}
	return true;
}
var printBoard=function(partial) 
{
//	SIZE=8;
	for( var digit in partial )
	{
	var col = parseInt(partial[digit]);
	var lin = '.'.repeat(col-1) + 'Q' +  '.'.repeat(SIZE-col);
	cosole.log(lin);
	}
}
var findSolutions=function() 
{
	var partials=[''];
	//var SIZE=8;
	while (partials.length != 0)
	{
		var partial = partials.pop(0);
		if (partial.length >= SIZE )
		{
			var solution = partial;
			console.log( partial) ;
	//		console.log('a')

		}
		else 
		{
			var col=1;
			l=SIZE+1;
			for (;col<l;col++) 
			{
				if (checkPlacement (partial, col))
				{
           				partials.push(partial+col);
				}
			}
		}
	}
}
var start = new Date().getTime();
findSolutions();
var end = new Date().getTime();
var t = end-start
//t= t * Math.pow(10,-4,-2)
console.log("Time taken :%dms",t);

