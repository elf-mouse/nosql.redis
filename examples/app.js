var host = "127.0.0.1";
var port = "6379";
var password = "";

var client = require("redis").createClient({
  url: "redis://" + host + ":" + port,
  password: password
});

client.on("error", err => console.error(err));
client.on("connect", () => console.log("connected"));
