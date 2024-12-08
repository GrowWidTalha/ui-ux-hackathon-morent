export const carsCollection = [
  {
    id: 1,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/2.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: true,
  },
  {
    id: 2,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/4.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 3,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/1.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 4,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/4.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 5,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/5.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 6,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/6.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 7,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/7.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 8,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/8.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 9,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/9.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 10,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/10.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 11,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/11.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 12,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/12.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
];

export const carById = (id) => carsCollection.find((car) => car.id === id);