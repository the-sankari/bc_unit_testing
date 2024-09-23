class CarRegister {
    constructor(data) {
      if (!data) {
        throw new Error('data storage missing');
      }
      this.data = data;
    }
  
    get_car_colors(searchKey) {
      if (!searchKey) return [];
      const car = this.data.find(car => car.carID === searchKey);
      return car && car.colors ? car.colors : [];
    }
  
    get_info(searchKey) {
      if (!searchKey) return null;
      const car = this.data.find(car => car.carID === searchKey);
      return car && car.info ? car.info : null;
    }
  
    get_Price(carID) {
      const car = this.data.find(car => car.carID === carID);
      if (!car) {
        throw new Error('nothing found with given searchValue');
      }
      return car.price;
    }
  
    get_All_cars_By_model(searchValue) {
      if (!searchValue) {
        throw new Error('missing parameter');
      }
      return this.data.filter(car => car.model === searchValue);
    }
  
    get_stars_of_car_by_carID(searchKey) {
      if (!searchKey) {
        throw new Error('missing parameter');
      }
      const car = this.data.find(car => car.carID === searchKey);
      return car ? car.stars : null;
    }
  }
  
  module.exports = CarRegister;
  