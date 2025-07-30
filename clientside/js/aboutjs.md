# What is JS ?
--> It's a Scripting Language
--> No 1 lang on web dev.
--> Used for client side scripting.
--> Used for server side scripting with Node.js

# Installation :
    -> https://nodejs.org/en/download

# Basic Linux Commands :
    -> node -v      - to check version of node
    -> npm -v       - to check version of node package manager
    -> pwd          - to check present woring dir
    -> ls           -> to list all dir/files of your current folder/dir
    -> cd           -> to change directory
    -> node filename -> to run js files

# There is Two type of JS :
    1) DOM      -> Document Object Model
    2) BOM      -> Browser object Model

-------------------------------------------------------------------------------------------
# BOM - Browser Object Mode

# How to print in js ?
    -> console.log(argument);

# Variables :
    -> Container
    -> variables | object | parameter | property
    -> FirstLetter Small case
    -> No Space
    -> No Special Character (_)

    How to Define Variables :
    1) var 
        var VariableNAme = value;
        global | temp | old version

    2) let
        let VaribaleName = value;
        local | new version  | temp

    3) const
        const VariableName = value;
        local | new version | perm


# Data Types  :
    1) Number       -> int, float 
    2) String      -> text, word, sentence
    3) Boolean     -> true, false
    4) Null        -> nothing, empty
    5) Undefined   -> not assigned
    6) Object      -> collection of data -> it can store multiple + multy Type of data
        6.1) Array / list -> []
        6.2) Object / dict -> {}

# to check which type of -> typeof(argument)

# Operators

    1) Arithmatic -> + - * / **
    2) Assignment -> = += -= *= /= %= **=
    3) Comparison -> == != === !== > < >= <=
    4) Logical -> && || !
    5) Bitwise -> & |
    6) string  -> +
    7) typeof  -> typeof()

# Conditions 
    if(conditions) { code }
    else if(conditions) { code }
    ....
    else { code/default value }

# Loop
    .. while -> 3 lines
    .. for -> 1 line

# Functions 
    -> Normal fucntions
            -> function funName() { code }

    -> Arrow Function
            -> l/v/c funName = () => { code }
    
    -> Call Back
            -> function() {}
            -> ()=>{}

# Function of String:
        string.function('arguments')
            String length
            String slice()
            String substring()
            String substr()
            String replace()
            String replaceAll()
            String toUpperCase()
            String toLowerCase()
            String concat()
            String trim()
            String trimStart()
            String trimEnd()
            String padStart()
            String padEnd()
            String charAt()
            String charCodeAt()
            String split()

# Function of array : 
        concat()	Joins arrays and returns an array with the joined arrays
        constructor	Returns the function that created the Array object's prototype
        copyWithin()	Copies array elements within the array, to and from specified positions
        entries()	Returns a key/value pair Array Iteration Object
        every()	Checks if every element in an array pass a test
        fill()	Fill the elements in an array with a static value
        filter()	Creates a new array with every element in an array that pass a test
        find()	Returns the value of the first element in an array that pass a test
        findIndex()	Returns the index of the first element in an array that pass a test
        forEach()	Calls a function for each array element
        from()	Creates an array from an object
        includes()	Check if an array contains the specified element
        indexOf()	Search the array for an element and returns its position
        isArray()	Checks whether an object is an array
        join()	Joins all elements of an array into a string
        keys()	Returns a Array Iteration Object, containing the keys of the original array
        lastIndexOf()	Search the array for an element, starting at the end, and returns its position
        length	Sets or returns the number of elements in an array
        map()	Creates a new array with the reasult of calling a function for each array element
        pop()	Removes the last element of an array, and returns that element
        prototype	Allows you to add properties and methods to an Array object
        push()	Adds new elements to the end of an array, and returns the new length
        reduce()	Reduce the values of an array to a single value (going left-to-right)
        reduceRight()	Reduce the values of an array to a single value (going right-to-left)
        reverse()	Reverses the order of the elements in an array
        shift()	Removes the first element of an array, and returns that element
        slice()	Selects a part of an array, and returns the new array
        some()	Checks if any of the elements in an array pass a test
        sort()	Sorts the elements of an array
        splice()	Adds/Removes elements from an array
        toString()	Converts an array to a string, and returns the result
        unshift()	Adds new elements to the beginning of an array, and returns the new length
        valueOf()	Returns the primitive value of an array

>> Date Methods : 
    new Date()
        new Date(date string)
        new Date(year,month)
        new Date(year,month,day)
        new Date(year,month,day,hours)
        new Date(year,month,day,hours,minutes)
        new Date(year,month,day,hours,minutes,seconds)
        new Date(year,month,day,hours,minutes,seconds,ms)
        new Date(milliseconds)

    >> Math :
        floor(x)	Returns x, rounded downwards to the nearest integer
        max(x, y, z, ..., n)	Returns the number with the highest value
        min(x, y, z, ..., n)	Returns the number with the lowest value
        pow(x, y)	Returns the value of x to the power of y
        random()	Returns a random number between 0 and 1
    round(x)	Rounds x to the nearest integer

    abs(x)	Returns the absolute value of x 
    acos(x)	Returns the arccosine of x, in radians
    acosh(x)	Returns the hyperbolic arccosine of x
    asin(x)	Returns the arcsine of x, in radians
    asinh(x)	Returns the hyperbolic arcsine of x
    atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
    atan2(y, x)	Returns the arctangent of the quotient of its arguments
    atanh(x)	Returns the hyperbolic arctangent of x
    cbrt(x)	Returns the cubic root of x
    ceil(x)	Returns x, rounded upwards to the nearest integer
    cos(x)	Returns the cosine of x (x is in radians)
    cosh(x)	Returns the hyperbolic cosine of x
    exp(x)	Returns the value of Ex
    log(x)	Returns the natural logarithm (base E) of x
    sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
    sin(x)	Returns the sine of x (x is in radians)
    sinh(x)	Returns the hyperbolic sine of x
    sqrt(x)	Returns the square root of x
    tan(x)	Returns the tangent of an angle
    tanh(x)	Returns the hyperbolic tangent of a number
    trunc(x)	Returns the integer part of a number (x)

-------------------------------------------------------------------------------
# DOM -> Document object Model

-> How to print in document using js
    --> document.write('argument');

-> to print on specific locagtion
    --> document.getElementById(idName)
        -> html
        -> text
        -> style

-> To get data from Form and validate 
    -> doucument.forms['formName']['FieldId'].value

--> Events :
    - onsubmit 
    - onclick
    - mouse
    - online
    - offline

--> Fetch :

    fetch(url)


--> Session Storage :

        ..> to generate session -> sessionStorage.setItem("object",data(string))