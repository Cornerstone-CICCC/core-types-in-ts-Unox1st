let coordinate: [number, number] = [10, 20];

interface Location {
  description: string;
  coordinate: [number, number];
}

const location: Location = {
  description: "My place",
  coordinate: coordinate,
};

console.log(location);