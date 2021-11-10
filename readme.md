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
https://careerkarma.com/blog/javascript-for-loop/

```
initialExpression]; [endingCondition]; [incrementalExpression]

simple for loop’s repetitive statements will be executed until [endingCondition] returns false
```
* Initialization: declare a counter variable. keeps track how many times loop has been executed.

* Condition condition thats evaluated before each loop starts. If condition equals true, code loop runs. If condition false, loop stops running.

* Increment updates loop counter each time loop executed.


= vs == vs === 

= assigns values to a variable in JavaScript. 
== comparison between two variables irrespective of datatype of variable. 
=== comparision between two variables but checks strict type, checks datatype and compare two values

