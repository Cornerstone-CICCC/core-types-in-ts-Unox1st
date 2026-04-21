function displayValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("String:", value);
  } else if (typeof value === "number") {
    console.log("Number:", value);
  }
}

// harder function
function processUnknown(value: unknown) {
  if (typeof value === "string") {
    for (let char of value) {
      console.log(char);
    }
  }
}