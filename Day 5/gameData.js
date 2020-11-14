const gameArea = {
    
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              12.51093864440918,
              55.72976837962446
            ],
            [
              12.50020980834961,
              55.73068665750776
            ],
            [
              12.498364448547363,
              55.72384738523246
            ],
            [
              12.509222030639648,
              55.72039104290185
            ],
            [
              12.510981559753418,
              55.72297728590516
            ],
            [
              12.522439956665039,
              55.72261473879685
            ],
            [
              12.523727416992188,
              55.72761759162583
            ],
            [
              12.51093864440918,
              55.72976837962446
            ]
          ]
        ]
      
      }
    }
    

      const players =  

        [
          {
          "type": "Feature",
          "properties": {
            "name": "John-outside"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              12.488794326782227,
              55.73203986975658
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Patrik-ouytside"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              12.48845100402832,
              55.72404073800572
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {"name":"Jay indside" },
          "geometry": {
            "type": "Point",
            "coordinates": [
              12.505617141723633,
              55.728366755949146
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {"name":"Oscar"},
          "geometry": {
            "type": "Point",
            "coordinates": [
              12.514457702636719,
              55.728560086344245
            ]
          }
        }
      ]
    

module.exports = { 
  gameArea, players
}

