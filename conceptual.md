# Conceptual Exercise

Answer the following questions below in Markdown. 
Check out the [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### What is Big O notation and why does it matter?
Big O is a convention by which we can denote time and space complexity. When used to discuss time complexity, it provides a simplified representation of the scale of operations performed. It is a more viable and repeatable metric than other alternatives like timing the actual length a function takes to execute (different between different machines, different between different tests on the same machine, not necessarily granular enough for fast algorithms).

We care about time complexity (denoted by big O notation) because having a time complexity that is very high can slow down our code significantly (often by orders of magnitude depending on the size of the input). In addition, big O notation is fairly easily calculable in simple algorithms, which makes it so that the developer can consistently avoid having to guess which version of an algorithm is more time (or memory in the case of space complexity) efficient.

### What is time complexity?
Time complexity is the metric by which a developer can determine the scale of operations performed in an algorithm (see above for more detail). It can vary based on number and type of inputs, as well as the structure of the algorithm, but the basic types of time complexity (going from fastest to slowest) are as follows:

1. Constant O(1)
2. Logarithmic O(log(n))
3. Linear O(n)
4. Linear-logarithmic O(n log(n))
5. Quadratic O(n^2)
6. Exponential O(2^n)
7. Factorial O(n!)

### What are important differences between arrays and objects?
Arrays are a subtype of object, so basically everything you can do to an object can also be done to an array, but some important differences are as follows:

1. Arrays have an order while objects do not
    * This means that iteration functionality that relies on ordering can be applied to arrays and not objects (e.g. for...of loops)
2. Values in arrays are indexed, while values in objects are not (at least not in the same way).
3. Data in arrays are stored as singular elements, while data in objects are stored as key value pairs (or properties)

### What are important differences between `var` and `let`?
1. `var` is function scoped while `let` is block scoped, which makes it such that `let` allows developers to avoid the creation of accidental global (or incorrectly scoped) variables than `var`.
2. A variable declared with `var` can be redeclared while a variable declared with `let` cannot. This means that if I try to write the code:
    let example = 2;
    let example = 3;
It will throw an error. If I replaced the word `let` with the word `var` above, it would allow me to redeclare example, which can lead to unintended bugs in code (the developer gets less protection from themself).

### What are important differences between `let` and `const`?
1. The key difference is that variables that are declared with `let` can be reassigned, while those declared with `const` cannot.
    * As an important note, even though variables declared with `const` cannot be reassinged, if they are references and not primitives, the actual reference element to which the variable is pointing can be changed (e.g. popping a value off of an array), because doing this does not change the location in memory of that element, which is what is actually stored in the variable.

### What are important differences between arrow functions and regular functions?
1. Arrow functions have to be anonymous functions, while regular functions can have names. If a name is to be assigned to an arrow function, it has to be done by storing the arrow function definition inside of a variable.
2. In a regular function, when using the keyword `this`, the value of that keyword is assinged depending on how the function is invoked, according to the execution context of that function (i.e. it differs if it is a method invocation, the instantiation of a new instance of a class, etc.). An arrow function does not create it's own execution context, so the value of `this` defaults to the outer function that contains the arrow function, which prevents the developer from having to bind the keyword `this` to the instance when used as an instance method.
3. If an arrow function only contains one expression, it contains an implicit `return`. In regular functions, if the `return` keyword is omitted, it will always return undefined. In addition, arrow functions of this kind can omit the curly brackets to denote the function body.

### What is the purpose of the rest operator?
In the context in which a developer wishes to defined a function that with an unknown number of parameters, using the rest operator will make it so that javascript will take all the arguments passed into that function and make them into an array whose length is the number of arguments passed into the function. It can also help in situations where the developer has one or more parameters that are defined independently, followed by an unknown number of additional parameters (e.g. the rest of the parameters), where it then takes those remaining arguments passed in and turns them into an array.

### What is the purpose of the spread operator?
The spread operator functionally does the opposite of the rest operator. It allows an iterable to be spread out in places where an unknown number of arguments is expected. This can be useful when calling functions (rather than defining them), with an unknown number of arguments, and it can be used to spread the values of object literals.

### What is Object Oriented Programming?
Object Oriented Programing (OOP) is a design paradigm wherein the objective is to keep data and functionality closely paired together. It is meant to accoplish four major goals:

1. Abstraction - A means by which a developer can "hide" the nuts and bolts of the functionality behind an object, so that the user of that code only interacts with the part that requires their input (analagous to someone driving a car not having to know how an engine works).
2. Polymorphism - The concept of making it so that the methodology can be easily adapted to perform its purpose in different contexts and sometimes in a different manner depending on the context in which it is used.
3. Inheritance - The basic idea here is to make it so that code doesn't have to be repeated a lot. Inheritance allows a class to be created and have access to the data and/or functionality of some parent class, while still adding its own specific data and/or functionality.
4. Encapsulation - A property by which a developer can restrict access to the data and/or functionality associated with a certain class to only elements that have access to it. It helps protect code from unintended access.

### What is a class? When would you make one?
A class is a "blueprint" of data and/or functionality. You would make one in a context where there are several instances of an object that would benefit from having access to that data and/or functionality. An example of this would be certain types of users in a user base on a website.

### What is an instance?
An instance is the specific term for an object that is created as a new object associated with a certain class. Each instance of a class has access to the data and functionality of that class.

### What is the keyword `this`?
The keyword `this` indicates the object upon which a function (or method) is called. ~90% of the time, that is referring to whatever is to the left side of the decimal place before the method (where that is often the window when called on "nothing"). When a function is defined in a class, the keyword `this` typically refers to the instance of that class upon which it is called. Every function has a value for this (see the difference between regular and arrow functions for how it is assigned in different contexts).

### What does the `bind` function do?
The `bind` function specifies the context for which the keyword `this` is applied. It is specifically used in contexts where the keyword `this` is applied by javascript and not by the developer. This often occurs in context where the function in question is to be used as a callback (event listeners, setTimeout, functions like map and every, etc.).