function printId(id: number | string): number | string {
  if (typeof id === "number") {
    console.log("The id is a number:", id);
  } else {
    console.log("The id is a string:", id);
  }
  return id;
}

printId(123);
printId("abc");