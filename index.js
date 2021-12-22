var rect = require('./rectangle');

function solveRect(l,b)
{
    console.log("Solving for rectangle with l = " + l + ", and b = " + b);
    if( l<=0 || b<=0 )
    console.log("Please enter dimensions of Rectangle greater than zero!!!!" + "\n");
    else
    console.log("Area of Rectangle = "+ rect.area(l,b) + "\nPerimeter of Rectangle = " + rect.perimeter(l,b) + "\n");
}

solveRect(2,4);
solveRect(0,3);


