import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  km: number;
  fuel: string;
  transmission: string;
  body: string;
  image: string;
};

export const CARS: Car[] = [
  { id: "1", make: "Mazda", model: "CX-5 Touring", year: 2022, price: 38990, km: 28450, fuel: "Petrol", transmission: "Automatic", body: "SUV", image: car1 },
  { id: "2", make: "Toyota", model: "Camry SL Hybrid", year: 2023, price: 42500, km: 14200, fuel: "Hybrid", transmission: "Automatic", body: "Sedan", image: car2 },
  { id: "3", make: "Hyundai", model: "i30 N-Line", year: 2021, price: 24990, km: 41000, fuel: "Petrol", transmission: "Automatic", body: "Hatchback", image: car3 },
  { id: "4", make: "Ford", model: "Ranger Wildtrak", year: 2023, price: 64990, km: 22100, fuel: "Diesel", transmission: "Automatic", body: "Ute", image: car4 },
  { id: "5", make: "BMW", model: "M240i Coupe", year: 2022, price: 89990, km: 18750, fuel: "Petrol", transmission: "Automatic", body: "Coupe", image: car5 },
  { id: "6", make: "Volkswagen", model: "Golf Wagon", year: 2021, price: 32990, km: 36400, fuel: "Petrol", transmission: "Automatic", body: "Wagon", image: car6 },
];

export const BODY_TYPES = [
  { name: "SUV", icon: "🚙" },
  { name: "Sedan", icon: "🚗" },
  { name: "Hatchback", icon: "🚘" },
  { name: "Ute", icon: "🛻" },
  { name: "Coupe", icon: "🏎️" },
  { name: "Wagon", icon: "🚐" },
];
