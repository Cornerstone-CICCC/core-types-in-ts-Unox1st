function printId(id: number | string): number | string {
  if (typeof id === "number") {
    console.log("Number ID:", id);
    return id;
  } else {
    console.log("String ID:", id);
    return id;
  }
}