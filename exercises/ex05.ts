enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: Day = Day.Monday;

console.log(today);

interface Race {
  participants: string[];
  first: string;
  second: string;
  third: string;
  day: Day;
}

const race: Race = {
  participants: ["A", "B", "C"],
  first: "A",
  second: "B",
  third: "C",
  day: Day.Sunday,
};

console.log(race);