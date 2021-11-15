# Repo of essential algorithms to gain a deeper competency in problem solving algorithmically along with elementary javascript "things".


https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

# VAR
 * globally scoped(outside function) vs function/locally scoped(where can be used).

 * can be re-declared and updated
 * var can be redefined which can cause problems.

# LET
* declared in a block only available in the block.
* unless defined in different scope updateable but can't be re-declared within its scope cause treated as different variables

# CONST
* same as let, maintain constant values.
* initialised at time of decleration cant be updated or re-declared.

# SCOPING
  * global
  * function 
  * block

# HOISTING
  * moved to top of the scope

# FOR LOOPS
 https://medium.com/swlh/javascripts-for-vs-for-in-vs-for-of-in-depth-a589feb88bdd


## FOR LOOP…

##  FOR-IN LOOP…
iterate through properties of objects (if a particular property is enumerable). If an Array or String type variable is provided, indexes are taken as keys as usual

## FOR OF LOOP_
 creates a loop on iterable objects.

* If counters/indexes are needed while accessing an array or indexes related logical stuff use for loop.
* If need to access properties/keys regardless of the order use for-in.
* If need to iterate through data items of an iterable(also if need to apply some changes maybe) for-of. 

```
initialExpression]; [endingCondition]; [incrementalExpression]

simple for loop’s repetitive statements will be executed until [endingCondition] returns false
```
* Initialization: declare a counter variable. keeps track how many times loop has been executed.

* Condition condition thats evaluated before each loop starts. If condition equals true, code loop runs. If condition false, loop stops running.

* Increment updates loop counter each time loop executed.

## FOR VS WHILE LOOP
use for loop when you know how many times the loop should run. 
use while loop when you want the loop to break based on a condition other than the number of times it runs

# = vs == vs === 

* = assigns values to a variable in JavaScript. 
* == comparison between two variables irrespective of datatype of variable. 
* === comparision between two variables but checks strict type, checks datatype and compare two values

# in operator

* an inbuilt operator used to check whether some property exists in an object or not.
