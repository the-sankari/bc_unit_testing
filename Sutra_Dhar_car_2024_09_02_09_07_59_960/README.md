# CarRegister Class Test Cases

### 1. Constructor Tests

- Should throw an error if data storage is missing.

### 2. get_car_colors Tests

- Should return an array of colors by carID.
- Should return an empty array if carID doesn't exist or is missing.

### 3. get_info Tests

- Should return the info object for a car by carID.
- Should return null if no carID matches or is missing.

### 4. get_Price Tests

- Should return the price of a car by carID.
- Should throw an error if carID is not found.

### 5. get_All_cars_By_model Tests

- Should return an array of cars matching the model.
- Should return an empty array if no cars match.
- Should throw an error if no model is provided.

### 6. get_stars_of_car_by_carID Tests

- Should return the stars of the car by carID.
- Should return null if no car matches.
- Should throw an error if carID is missing.
