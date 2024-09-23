const CarRegister = require('../CarRegister');
const carData = require('../datastorage.json');

describe('CarRegister Class Tests', () => {
  let carRegister;

  beforeAll(() => {
    carRegister = new CarRegister(carData);
  });

  test('should throw error if data storage is missing', () => {
    expect(() => new CarRegister()).toThrow('data storage missing');
  });

  test('get_car_colors should return colors of the car by carID', () => {
    expect(carRegister.get_car_colors(1)).toEqual(['blue', 'white', 'green']);
    expect(carRegister.get_car_colors(999)).toEqual([]);
    expect(carRegister.get_car_colors()).toEqual([]);
  });

  test('get_info should return info object of the car by carID', () => {
    expect(carRegister.get_info(1)).toEqual({
      consumptionPer100km: 6,
      powerSource: 'electricity',
      comments: 'high quality'
    });
    expect(carRegister.get_info(999)).toBeNull();
    expect(carRegister.get_info()).toBeNull();
  });

  test('get_Price should return price of the car by carID', () => {
    expect(carRegister.get_Price(1)).toBe(200);
    expect(() => carRegister.get_Price(999)).toThrow('nothing found with given searchValue');
  });

  test('get_All_cars_By_model should return cars by model', () => {
    expect(carRegister.get_All_cars_By_model('silver')).toHaveLength(1);
    expect(carRegister.get_All_cars_By_model('nonexistent')).toEqual([]);
    expect(() => carRegister.get_All_cars_By_model()).toThrow('missing parameter');
  });

  test('get_stars_of_car_by_carID should return stars of the car by carID', () => {
    expect(carRegister.get_stars_of_car_by_carID(1)).toBe('***');
    expect(carRegister.get_stars_of_car_by_carID(999)).toBeNull();
    expect(() => carRegister.get_stars_of_car_by_carID()).toThrow('missing parameter');
  });
});
