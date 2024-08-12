# Calc library API

## **sum(a,b)**

Funtion returns the sum of two numbers. Numbers are passed as parameters a and b.

perameters:

- a number, -500 =< a <= 500
- b number, -500 =< b <= 500

returns:

sum of given numbers a and b

If parameter is missing, throws an exception `'parameter missing'`
If parameters are not numbers, throws an exception `'only number allowed'`

## Test cases

### sum with integers

- sum(1,1) returns 2
- sum(2, 3) returns 5

### Sum with floats

```math

a, b, result
   [2.5, 4.5, 7],
    [2.5, -4.5, -2],
    [0.5, 0.5, 1],
    [0.5, 3.5, 4],
    [0.5, -3.5, -3],
    [500.5, -500.5, 0],
    [1.5, 499.5, 501],
    [1000.5, -500.5, 500],
    [499.9, 500.0, 999.9],
    [-499.9, -500.0, -999.9],
    [-499.9, 500.0, 0.1],
```

### Sum with missing parameter

sum() throws an exception `'parameter missing'`,
sum(1) throws an exception `'parameter missing'`

### parameters are not numbers

sum('1', '2') throws an exception ` 'only numbers allowed'``
sum(1, '2') throws an exception  `'only numbers allowed'`sum('1', 2) throws an exception`'only numbers allowed'`sum('1', '2', '3') throws an exception`'only numbers allowed'`sum(1, '2', 3) throws an exception`'only numbers allowed'`sum('1', 2, '3') throws an exception`'only numbers allowed'`sum('a', 'b') throws an exception`'only numbers allowed'`sum('', '') throws an exception`'only numbers allowed'`

### parameters not between -500 and 500

sum(1000, 501) throws an exception `'numbers not between -500 and 500'`
sum(-501, 1000) throws an exception `'numbers not between -500 and 500'`
sum(1000, -501) throws an exception `'numbers not between -500 and 500'`
sum(-501, -1000) throws an exception `'numbers not between -500 and 500'`
sum(1000, -1000) throws an exception `'numbers not between -500 and 500'`
