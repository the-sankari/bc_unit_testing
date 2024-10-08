# Dice API test cases
## Test cases for the constructor
1. Create a dice with no upper bound given.
initializes a dice with minimumValue 1 and maximumValue 6 and dot count 0.
- expects
    - maximumValue 6
    - minimumValue 1
    - dots 0

2. Create a dice with upperbounds 2-20

- expects
    - maximumValue upper bound
    - minimumValue 1
    - dots 0
3. Test the exceptions
- Create dice with upper bound:
    - 'a' throws `'upper bound must be an integer'`
    - 2.5 throws `'upper bound must be an integer'`
    - null throws `'upper bound must be an integer'`
    - true throws `'upper bound must be an integer'`
    - false throws `'upper bound must be an integer'`
    - -1 throws `'upper bound too small'`
    - 1 throws `'upper bound too small'`
    - 0 throws `'upper bound too small'`
    - 21 throws `'upper bound too big'`
## Test cases for the roll method
1. Create a dice with no upper bound given
- roll the dice
- expects: 
    - dots to be < 6
    - dots >= 1
(this should be repeated multiple times. We will check this later)

2. Create a dice with upper bounds 2...20
- roll the dice
- expects:
    - dots to be <= upper bound
    - dots >= 1
(this should be repeated multiple times. We will check this later)


## Test cases for the toString
testing not rolled and rolled
In both cases create a new dice (no upper bound given)

1. Roll the dice 
- expects:
    - to return dot count as text. Compare it with dots casted as string

2. Not rolled
- expects:
    - to return the string "not rolled yest"