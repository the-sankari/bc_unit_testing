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


## Test cases
- Test that the dice can be rolled
- Test that the dice can be rolled multiple times
- Test that the dice can not be rolled before it has been rolled
- Test that the dice can not be rolled if it has been rolled before and the dot count is
- Test that the dice can be rolled with a given upper bound

- Test that the dice can be rolled with a default upper bound
- Test that the dice can be rolled with an upper bound that is not a number
- Test that the dice can be rolled with an upper bound that is not an integer
- Test that the dice can be rolled with an upper bound that is too big
- Test that the dice can be rolled with an upper bound that is too small
- Test that the dice can be rolled with an upper bound that is not between 2 and 20



<!--
- returns a string representation of the dice
- the string will be in the format: `Dice(upperBound): dotCount`
- if the dice hasn't been rolled before, the string will be `Dice(upperBound):
- returns the dot count after the roll
### **getDotCount()**
- returns the dot count of the dice
- if the dice hasn't been rolled before, the dot count will be 0
### **isRolled()**
- returns true if the dice has been rolled before
- returns false if the dice hasn't been rolled before
 ### **equals(other)**
- returns true if the dice is equal to the other dice
- two dice are equal if they have the same upper bound and the same dot count

- returns false if the dice is not equal to the other dice
### **hashCode()**
- returns the hash code of the dice
- the hash code is calculated based on the upper bound and the dot count
### **getUpperBound()**
- returns the upper bound of the dice
### **setUpperBound(newUpperBound)**
- sets the upper bound of the dice
- if the new upper bound is not a number and not an integer, an exception is thrown
- if the new upper bound is not between 2 and 20, an exception is thrown
- if the new upper bound is the same as the current upper bound, the dot count will not be changed
- if the new upper bound is different from the current upper bound, the dot count will be set
- to 0 and the dice will be rolled
### **getDotCount()**
- returns the dot count of the dice -->
