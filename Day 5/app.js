const express = require("express");
const app = express();
const gju = require("geojson-utils");

app.get("/", (req, res) => res.send("Geo Demo!"));

const gameArea = require("./gameData.js").gameArea.geometry;

const players = require("./gameData.js").players;

app.listen(3000, () => console.log("Example app listening on port 3000!"));

app.get("/geoapi/isuserinarea/:lon/:lat", (req, res) => {
  const { lon, lat } = req.params;
  const point = { type: "Point", coordinates: [lon, lat] };
  const status = gju.pointInPolygon(point, gameArea);
  const msg = status
    ? "Point was inside the tested polygon"
    : "Point was not inside the tested polygon";
  res.send({ status, msg });
});

// For endpoint-2 use the method: geometryWithinRadius(..) (Make sure only to use only the geometry part of you players, when you compare.

app.get("/geoapi/nearbyPlayers/:lon/:lat/:rad", (req, res) => {
  const { lon, lat, rad } = req.params;
  const point = { type: "Point", coordinates: [lon, lat] };
  console.log(rad);
  playersInRadius = players.filter((p) => {
    isInside = gju.geometryWithinRadius(p.geometry, point, rad);
    return isInside;
  });
  res.send({ playersInRadius });
});

app.get("/geoapi/playerDistance/:lon/:lat/:userName", (req, res) => {
  let result;
  const { lon, lat, userName } = req.params;
  const myPoint = { type: 'Point', coordinates: [lon, lat] };
  const player = players.find((p) => {
    return p.properties.name === userName;
  });
  if (player) {
    // console.log(myPoint);
    const memberPoint = player.geometry;
    console.log(player.geometry);
    result = gju.pointDistance(myPoint, memberPoint);
    res.send({ result, to: userName });
  } else {
      res.statusCode = 404;
      result = 'No player found with username: ';
      res.send({ result, userName });
  }

});
