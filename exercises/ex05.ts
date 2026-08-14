enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const currentDay: Day = Day.Monday;
console.log("Current day:", Day[currentDay]);

interface Race {
  participants: number;
  first: string;
  second: string;
  third: string;
  day: Day;
}

const race: Race = {
  participants: 10,
  first: "Alice",
  second: "Bob",
  third: "Charlie",
  day: Day.Saturday,
};

console.log(race);