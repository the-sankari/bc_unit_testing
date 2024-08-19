# Dice API

This is Dice class for dice games. Dice holds the numbers of dots. The number of dots is between 1 and given upper bound (inclided). Maximum upper bound is 20. The minimum upper bound is 2.

If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled the dot count can not become zero again.

## Operations 
### **constructor(upperBound)**
- initializes the dice with upper bound that is passed as a parameter.
- if no upper bound is given, the default upper bound will be 6
- initializes the dot count to 0
- if the upperbound is not a number and not an integger, throws an exception `'upper bound must be an integer'`

- if the upper bound not between 2 and 20, an exception is thrown: 
    - upper bound > 20: `'upper bound too big'`
    - upper bound < 20: `'upper bound too small'`

## Methods
### **roll()**
- rolls the dice
- when rolled, the dot count will become a random number between 1 and upper bound
- if the dice hasn't been rolled before, it will be rolled for the first time
- if the dice has been rolled before, the dot count will be changed to a random number between 1 and upper bound
- if the dice has been rolled before and the dot count is 0, an exception is thrown
### **toString()**
- returns dot count as a text. For example: `'4'`
- if the dice has not been rolled yet, returns the text `'not rolled yet'`
## Getters
### **dots**
- returns the number of dots ( dot count)

### **minimumValue**
- returns the minimum mumber of dots. It should be 1.
### **maximumValue**
- returns the maximum number of dots. It should be the upper bound.
