const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());


app.use(bodyParser.json());  

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/ping", (req, res) => {
  const query = req.query;
  res.json({
    ping: "oke",
    kota_asal: req.query.kota,
    nama_saya: req.query.nama,
    query,
  });
});

app.post("/ping-post", (req, res) => {
  const headers = req.headers;
  const body = req.body;
//   req.body
  res.json({
    ping: "oke post",
    headers,
    body,
  });
});

// params//
app.post("/ping-post/:nama/:kota", (req, res) => {
  const params = req.params;
  res.json({
    ping: "oke post",
    params,
  });
});

app.get("/ping-post", (req, res) => {
  res.json({
    ping: "oke dari get post",
  });
});

app.put("/ping-put", (req, res) => {
  res.json({
    ping: "oke put",
  });
});

app.delete("/ping-delete", (req, res) => {
  res.json({
    ping: "oke delete",
  });
});

app.listen(9000, () => {
  console.log("server run");
});
