function throwError(message: string): never {
  throw new Error(message);
}

try {
  throwError("Something went wrong");
} catch (error) {
  console.log("Error caught");
}