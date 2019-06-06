const { spawn } = require("child_process");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

// Thanks to https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07
function throttle(f, timeout) {
  return function(args) {
    let prevCall = this.lastCall;
    this.lastCall = Date.now();
    if (prevCall === undefined || this.lastCall - prevCall > timeout) {
      f(args);
    }
  };
}

async function doIt(action) {
  if (action === "radiate" || action === "restart" || action === "stop") {
    const child = spawn(action, [], {
      detached: true,
      stdio: "ignore",
      env: { DISPLAY: ":0" }
    });

    child.unref();
  }
}

const notSoFast = throttle(doIt, 5000); // doIt may be called at most once every 5 seconds

app.post("/start", (_, res) => {
  notSoFast("radiate");
  res.status(204).end();
});
app.post("/restart", (_, res) => {
  notSoFast("restart");
  res.status(204).end();
});
app.post("/stop", (_, res) => {
  notSoFast("stop");
  res.status(204).end();
});

app.get("/", (_, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 80);
