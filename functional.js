var SIZE=8
var checkPlacement = function(partial,col)
{
	var SIZE=8
	var row = partial.length;
	if (partial)
	{
		var spread = 1;
		
		i=row-1;
		//i=0
		
		for (;i>0;i-=1)
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
	SIZE=8;
	for( var digit in partial )
	{
	var col = parseInt(partial[digit]);
	var lin = '.'.repeat(col-1) + 'Q' +  '.'.repeat(SIZE-col);
	cosole.log(lin);
	}
}
var findSolutions=function() 
{
	var partials = new Array()    ;
	partials.push('');
	while ((partials.length) >= 1)
	{
		var partial = partials.pop(0);
		if (partial.length >= SIZE )
		{
			var solution = partial;
			console.log( partial) ;
		}
		else 
		{
			var col=1;
			l=SIZE+1;
			for (;col<l;col++) 
			{
				if (checkPlacement (partial, col))
				{
           				partials.push(partial+toString(col));
				}
			}
		}
	}
}
findSolutions()
