function throwError(message: string): never {
  throw new Error(message);
}

try {
  throwError("Something went wrong!");
} catch (error) {
  console.log("Caught error:", (error as Error).message);
}

function doNothing(): void {
  console.log("This returns void (finishes normally).");

}

doNothing();