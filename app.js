const port = 4500;
var http = require("http");
var ejs = require("ejs");
var fs = require("fs");

var server = http.createServer(function (req, resp, next) {
  resp.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/Monday" && req.method === "GET") {
    var htmlContent = fs.readFileSync("./views/day.ejs", "utf8");
    resp.end(
      ejs.render(htmlContent, {
        filename: "day.ejs",
        currentTimeStamp: getWeekDayDateTime(1),
        day: 'Monday'
      })
    );
  } else if (req.url === "/Tuesday" && req.method === "GET") {
    var htmlContent = fs.readFileSync("./views/day.ejs", "utf8");
    resp.end(
      ejs.render(htmlContent, {
        filename: "day.ejs",
        currentTimeStamp: getWeekDayDateTime(2),
        day: 'Tuesday'
      })
    );
  } else if (req.url === "/Wednesday" && req.method === "GET") {
    var htmlContent = fs.readFileSync("./views/day.ejs", "utf8");
    resp.end(
      ejs.render(htmlContent, {
        filename: "day.ejs",
        currentTimeStamp: getWeekDayDateTime(3),
        day: 'Wednesday'
      })
    );
  } else if (req.url === "/Thursday" && req.method === "GET") {
    var htmlContent = fs.readFileSync("./views/day.ejs", "utf8");
    resp.end(
      ejs.render(htmlContent, {
        filename: "day.ejs",
        currentTimeStamp: getWeekDayDateTime(4),
        day:'Thursday'
      })
    );
  } else {
    var htmlContent = fs.readFileSync("./views/index.ejs", "utf8");
    resp.end(
      ejs.render(htmlContent, {
        filename: "day.ejs",
        currentTimeStamp: getWeekDayDateTime(1),
        day: 'default'
      })
    );
  }
});

const getWeekDayDateTime = (weekDays) => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + ((7-currentDate.getDay())%7+weekDays) % 7);
  return currentDate.toLocaleString();
};

server.listen(port, () => console.log("listening to port :" + port));
