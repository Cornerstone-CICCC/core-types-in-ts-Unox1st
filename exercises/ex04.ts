const coordinate: [number, number] = [10, 20];

interface RaceLocation {
  description: string;
  coordinate: [number, number];
}

const raceLocation: RaceLocation = {
  description: "City Center",
  coordinate: coordinate,
};

console.log(raceLocation);
console.log("x:", raceLocation.coordinate[0], "y:", raceLocation.coordinate[1]);