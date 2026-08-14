function displayValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("String value:", value);
  } else if (typeof value === "number") {
    console.log("Number value:", value);
  } else {
    console.log("Unknown type");
  }
}

displayValue("hello");
displayValue(42);
displayValue(true);

function loopIfString(value: unknown): void {
  if (typeof value === "string") {
    for (const char of value) {
      console.log(char);
    }
  }

}

loopIfString("abc");