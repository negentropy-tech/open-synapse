export async function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world");
    }, 1000);
  });
}
