// Startup file for cPanel "Setup Node.js App" (Phusion Passenger).
// Passenger loads apps with require(), so this hands off to the ES module build.
import("./dist/index.js").catch((error) => {
  console.error(error);
  process.exit(1);
});
