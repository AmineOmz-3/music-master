import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap'

import Profile from './Profile'
import Gallery from './Gallery'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: '',
      artist: null,
      tracks: [
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6tGI9MGbLjbxyzcxYkMXPJ"
            },
            "href": "https://api.spotify.com/v1/albums/6tGI9MGbLjbxyzcxYkMXPJ",
            "id": "6tGI9MGbLjbxyzcxYkMXPJ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b28db1e5c8c53e67c6969c06",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b28db1e5c8c53e67c6969c06",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b28db1e5c8c53e67c6969c06",
                "width": 64
              }
            ],
            "name": "Vintage",
            "release_date": "2020-03-19",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:6tGI9MGbLjbxyzcxYkMXPJ"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4sbXXFzEWJY2zsZjelerjX"
              },
              "href": "https://api.spotify.com/v1/artists/4sbXXFzEWJY2zsZjelerjX",
              "id": "4sbXXFzEWJY2zsZjelerjX",
              "name": "Dadju",
              "type": "artist",
              "uri": "spotify:artist:4sbXXFzEWJY2zsZjelerjX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 220280,
          "explicit": false,
          "external_ids": {
            "isrc": "FR9KQ2000560"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0BD9boQC7jUTWkAoib4Z0d"
          },
          "href": "https://api.spotify.com/v1/tracks/0BD9boQC7jUTWkAoib4Z0d",
          "id": "0BD9boQC7jUTWkAoib4Z0d",
          "is_local": false,
          "is_playable": true,
          "name": "Meleğim",
          "popularity": 68,
          "preview_url": "https://p.scdn.co/mp3-preview/d34a94d04a083bfac0c2ab6f19b777a3fbe4985c?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 6,
          "type": "track",
          "uri": "spotify:track:0BD9boQC7jUTWkAoib4Z0d"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4IS4EyXNmiI2w5SRCjMtEF"
                },
                "href": "https://api.spotify.com/v1/artists/4IS4EyXNmiI2w5SRCjMtEF",
                "id": "4IS4EyXNmiI2w5SRCjMtEF",
                "name": "Kendji Girac",
                "type": "artist",
                "uri": "spotify:artist:4IS4EyXNmiI2w5SRCjMtEF"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/41aoyeT5CYSLnmplFx22Y4"
            },
            "href": "https://api.spotify.com/v1/albums/41aoyeT5CYSLnmplFx22Y4",
            "id": "41aoyeT5CYSLnmplFx22Y4",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273591004ff382f76fc97ec0828",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02591004ff382f76fc97ec0828",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851591004ff382f76fc97ec0828",
                "width": 64
              }
            ],
            "name": "Mi Vida",
            "release_date": "2020-10-08",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:41aoyeT5CYSLnmplFx22Y4"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4IS4EyXNmiI2w5SRCjMtEF"
              },
              "href": "https://api.spotify.com/v1/artists/4IS4EyXNmiI2w5SRCjMtEF",
              "id": "4IS4EyXNmiI2w5SRCjMtEF",
              "name": "Kendji Girac",
              "type": "artist",
              "uri": "spotify:artist:4IS4EyXNmiI2w5SRCjMtEF"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            }
          ],
          "disc_number": 1,
          "duration_ms": 205400,
          "explicit": false,
          "external_ids": {
            "isrc": "FRUM72001252"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5vumhGuRduRpXpQ8Nio0h8"
          },
          "href": "https://api.spotify.com/v1/tracks/5vumhGuRduRpXpQ8Nio0h8",
          "id": "5vumhGuRduRpXpQ8Nio0h8",
          "is_local": false,
          "is_playable": true,
          "name": "Bebeto",
          "popularity": 67,
          "preview_url": "https://p.scdn.co/mp3-preview/0287eba14180aba62b6c6849836e799554bba912?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 8,
          "type": "track",
          "uri": "spotify:track:5vumhGuRduRpXpQ8Nio0h8"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6qFt3TjvxMt77YGsktWG8Z"
                },
                "href": "https://api.spotify.com/v1/artists/6qFt3TjvxMt77YGsktWG8Z",
                "id": "6qFt3TjvxMt77YGsktWG8Z",
                "name": "Sofiane",
                "type": "artist",
                "uri": "spotify:artist:6qFt3TjvxMt77YGsktWG8Z"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6gXYP4nPpC5k6B25h3upDa"
            },
            "href": "https://api.spotify.com/v1/albums/6gXYP4nPpC5k6B25h3upDa",
            "id": "6gXYP4nPpC5k6B25h3upDa",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738b6fb0dffb290ef4f27e56e7",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028b6fb0dffb290ef4f27e56e7",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518b6fb0dffb290ef4f27e56e7",
                "width": 64
              }
            ],
            "name": "Nouveaux parrains",
            "release_date": "2021-02-04",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:6gXYP4nPpC5k6B25h3upDa"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6qFt3TjvxMt77YGsktWG8Z"
              },
              "href": "https://api.spotify.com/v1/artists/6qFt3TjvxMt77YGsktWG8Z",
              "id": "6qFt3TjvxMt77YGsktWG8Z",
              "name": "Sofiane",
              "type": "artist",
              "uri": "spotify:artist:6qFt3TjvxMt77YGsktWG8Z"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            }
          ],
          "disc_number": 1,
          "duration_ms": 165957,
          "explicit": true,
          "external_ids": {
            "isrc": "FR9KQ2100010"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4ycyOBm9iFoiNVkafhb1WW"
          },
          "href": "https://api.spotify.com/v1/tracks/4ycyOBm9iFoiNVkafhb1WW",
          "id": "4ycyOBm9iFoiNVkafhb1WW",
          "is_local": false,
          "is_playable": true,
          "name": "Nouveaux parrains",
          "popularity": 66,
          "preview_url": "https://p.scdn.co/mp3-preview/8e0ce7337dbc2b553c9657e17dde9cdc90d6142f?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:4ycyOBm9iFoiNVkafhb1WW"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6cNWiizYLCClZdnIvqU968"
                },
                "href": "https://api.spotify.com/v1/artists/6cNWiizYLCClZdnIvqU968",
                "id": "6cNWiizYLCClZdnIvqU968",
                "name": "AriBeatz",
                "type": "artist",
                "uri": "spotify:artist:6cNWiizYLCClZdnIvqU968"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"
                },
                "href": "https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",
                "id": "1i8SpTcr7yvPOmcqrbnVXY",
                "name": "Ozuna",
                "type": "artist",
                "uri": "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4bg168UbDSwHKsg0efrUqh"
            },
            "href": "https://api.spotify.com/v1/albums/4bg168UbDSwHKsg0efrUqh",
            "id": "4bg168UbDSwHKsg0efrUqh",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27368ed47f7ebff153482e68307",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0268ed47f7ebff153482e68307",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485168ed47f7ebff153482e68307",
                "width": 64
              }
            ],
            "name": "Aquí (feat. Ozuna & Soolking)",
            "release_date": "2021-01-15",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:4bg168UbDSwHKsg0efrUqh"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6cNWiizYLCClZdnIvqU968"
              },
              "href": "https://api.spotify.com/v1/artists/6cNWiizYLCClZdnIvqU968",
              "id": "6cNWiizYLCClZdnIvqU968",
              "name": "AriBeatz",
              "type": "artist",
              "uri": "spotify:artist:6cNWiizYLCClZdnIvqU968"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"
              },
              "href": "https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",
              "id": "1i8SpTcr7yvPOmcqrbnVXY",
              "name": "Ozuna",
              "type": "artist",
              "uri": "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            }
          ],
          "disc_number": 1,
          "duration_ms": 169667,
          "explicit": false,
          "external_ids": {
            "isrc": "DEE862002619"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0259eSt61D349yZvwily88"
          },
          "href": "https://api.spotify.com/v1/tracks/0259eSt61D349yZvwily88",
          "id": "0259eSt61D349yZvwily88",
          "is_local": false,
          "is_playable": true,
          "name": "Aquí (feat. Ozuna & Soolking)",
          "popularity": 66,
          "preview_url": "https://p.scdn.co/mp3-preview/7e56173fec687e23cb370ee785a83bc709909882?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:0259eSt61D349yZvwily88"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6t7U7sYlVCtlMWzbecJcHd"
                },
                "href": "https://api.spotify.com/v1/artists/6t7U7sYlVCtlMWzbecJcHd",
                "id": "6t7U7sYlVCtlMWzbecJcHd",
                "name": "Dhurata Dora",
                "type": "artist",
                "uri": "spotify:artist:6t7U7sYlVCtlMWzbecJcHd"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/7Cdc189pgYExabUQoEBfGS"
            },
            "href": "https://api.spotify.com/v1/albums/7Cdc189pgYExabUQoEBfGS",
            "id": "7Cdc189pgYExabUQoEBfGS",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c745dd9784fcc8041d54b068",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02c745dd9784fcc8041d54b068",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851c745dd9784fcc8041d54b068",
                "width": 64
              }
            ],
            "name": "Zemër",
            "release_date": "2019-04-18",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:7Cdc189pgYExabUQoEBfGS"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6t7U7sYlVCtlMWzbecJcHd"
              },
              "href": "https://api.spotify.com/v1/artists/6t7U7sYlVCtlMWzbecJcHd",
              "id": "6t7U7sYlVCtlMWzbecJcHd",
              "name": "Dhurata Dora",
              "type": "artist",
              "uri": "spotify:artist:6t7U7sYlVCtlMWzbecJcHd"
            }
          ],
          "disc_number": 1,
          "duration_ms": 224713,
          "explicit": true,
          "external_ids": {
            "isrc": "FR9KQ1900450"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/68av1mZz0VsIYXJWATZWUW"
          },
          "href": "https://api.spotify.com/v1/tracks/68av1mZz0VsIYXJWATZWUW",
          "id": "68av1mZz0VsIYXJWATZWUW",
          "is_local": false,
          "is_playable": true,
          "name": "Zemër",
          "popularity": 66,
          "preview_url": "https://p.scdn.co/mp3-preview/4b6488d24ff83a653793adac8d3700bbf4210ed0?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:68av1mZz0VsIYXJWATZWUW"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/34GaKe4pPtwUllCu5mruIk"
            },
            "href": "https://api.spotify.com/v1/albums/34GaKe4pPtwUllCu5mruIk",
            "id": "34GaKe4pPtwUllCu5mruIk",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ad4c0eaddd3a67d4deed8bbf",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ad4c0eaddd3a67d4deed8bbf",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ad4c0eaddd3a67d4deed8bbf",
                "width": 64
              }
            ],
            "name": "Fruit du démon",
            "release_date": "2018-11-02",
            "release_date_precision": "day",
            "total_tracks": 14,
            "type": "album",
            "uri": "spotify:album:34GaKe4pPtwUllCu5mruIk"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            }
          ],
          "disc_number": 1,
          "duration_ms": 229000,
          "explicit": true,
          "external_ids": {
            "isrc": "FR9W11802734"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7EAtJk0HzXQp2gpFeaaLzF"
          },
          "href": "https://api.spotify.com/v1/tracks/7EAtJk0HzXQp2gpFeaaLzF",
          "id": "7EAtJk0HzXQp2gpFeaaLzF",
          "is_local": false,
          "is_playable": true,
          "name": "Guerilla",
          "popularity": 61,
          "preview_url": "https://p.scdn.co/mp3-preview/5c65790ccd7991be94bc48563b841c91cbc656c5?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 4,
          "type": "track",
          "uri": "spotify:track:7EAtJk0HzXQp2gpFeaaLzF"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6tGI9MGbLjbxyzcxYkMXPJ"
            },
            "href": "https://api.spotify.com/v1/albums/6tGI9MGbLjbxyzcxYkMXPJ",
            "id": "6tGI9MGbLjbxyzcxYkMXPJ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b28db1e5c8c53e67c6969c06",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b28db1e5c8c53e67c6969c06",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b28db1e5c8c53e67c6969c06",
                "width": 64
              }
            ],
            "name": "Vintage",
            "release_date": "2020-03-19",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:6tGI9MGbLjbxyzcxYkMXPJ"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6vZXamchcIOKzC1c3Elp4J"
              },
              "href": "https://api.spotify.com/v1/artists/6vZXamchcIOKzC1c3Elp4J",
              "id": "6vZXamchcIOKzC1c3Elp4J",
              "name": "Cheb Mami",
              "type": "artist",
              "uri": "spotify:artist:6vZXamchcIOKzC1c3Elp4J"
            }
          ],
          "disc_number": 1,
          "duration_ms": 235066,
          "explicit": false,
          "external_ids": {
            "isrc": "FR9KQ1900460"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0QPlafvsnmTJBvGNek2cI8"
          },
          "href": "https://api.spotify.com/v1/tracks/0QPlafvsnmTJBvGNek2cI8",
          "id": "0QPlafvsnmTJBvGNek2cI8",
          "is_local": false,
          "is_playable": true,
          "name": "Ça fait des années",
          "popularity": 59,
          "preview_url": "https://p.scdn.co/mp3-preview/85a7137fdda0535bb9d39d61ec79fef6002d0823?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:0QPlafvsnmTJBvGNek2cI8"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6Lai84omFX01ORCDa1CG5Z"
            },
            "href": "https://api.spotify.com/v1/albums/6Lai84omFX01ORCDa1CG5Z",
            "id": "6Lai84omFX01ORCDa1CG5Z",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273382d41464084766fdb907605",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02382d41464084766fdb907605",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851382d41464084766fdb907605",
                "width": 64
              }
            ],
            "name": "Vintage Gearforth",
            "release_date": "2020-03-20",
            "release_date_precision": "day",
            "total_tracks": 26,
            "type": "album",
            "uri": "spotify:album:6Lai84omFX01ORCDa1CG5Z"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2GlEiSHYEKlq9cUYDa9oZb"
              },
              "href": "https://api.spotify.com/v1/artists/2GlEiSHYEKlq9cUYDa9oZb",
              "id": "2GlEiSHYEKlq9cUYDa9oZb",
              "name": "Lynda",
              "type": "artist",
              "uri": "spotify:artist:2GlEiSHYEKlq9cUYDa9oZb"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3YwqjMyrRfuixi2pbgTGCE"
              },
              "href": "https://api.spotify.com/v1/artists/3YwqjMyrRfuixi2pbgTGCE",
              "id": "3YwqjMyrRfuixi2pbgTGCE",
              "name": "Heuss L'enfoiré",
              "type": "artist",
              "uri": "spotify:artist:3YwqjMyrRfuixi2pbgTGCE"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7kyIBL1EYouLqC8vw7IOui"
              },
              "href": "https://api.spotify.com/v1/artists/7kyIBL1EYouLqC8vw7IOui",
              "id": "7kyIBL1EYouLqC8vw7IOui",
              "name": "L'Algérino",
              "type": "artist",
              "uri": "spotify:artist:7kyIBL1EYouLqC8vw7IOui"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4uJNQGa3L2frXDxwgouTIw"
              },
              "href": "https://api.spotify.com/v1/artists/4uJNQGa3L2frXDxwgouTIw",
              "id": "4uJNQGa3L2frXDxwgouTIw",
              "name": "Franglish",
              "type": "artist",
              "uri": "spotify:artist:4uJNQGa3L2frXDxwgouTIw"
            }
          ],
          "disc_number": 1,
          "duration_ms": 256105,
          "explicit": true,
          "external_ids": {
            "isrc": "FR9KQ2001000"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4Qynrttl9LTuW8vqAFVFz4"
          },
          "href": "https://api.spotify.com/v1/tracks/4Qynrttl9LTuW8vqAFVFz4",
          "id": "4Qynrttl9LTuW8vqAFVFz4",
          "is_local": false,
          "is_playable": true,
          "name": "Jennifer",
          "popularity": 54,
          "preview_url": "https://p.scdn.co/mp3-preview/03fc5c34a9f4e7ded29c389913bcc97446f965ee?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 26,
          "type": "track",
          "uri": "spotify:track:4Qynrttl9LTuW8vqAFVFz4"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4Bd2znVR4YXxqzQEK3kVmL"
            },
            "href": "https://api.spotify.com/v1/albums/4Bd2znVR4YXxqzQEK3kVmL",
            "id": "4Bd2znVR4YXxqzQEK3kVmL",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731d8c7b575f0b5a34bac6172d",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e021d8c7b575f0b5a34bac6172d",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048511d8c7b575f0b5a34bac6172d",
                "width": 64
              }
            ],
            "name": "Liberté",
            "release_date": "2019-03-14",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:4Bd2znVR4YXxqzQEK3kVmL"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0oQ7sjQFCdDEqTvSUCNYai"
              },
              "href": "https://api.spotify.com/v1/artists/0oQ7sjQFCdDEqTvSUCNYai",
              "id": "0oQ7sjQFCdDEqTvSUCNYai",
              "name": "Ouled El Bahdja",
              "type": "artist",
              "uri": "spotify:artist:0oQ7sjQFCdDEqTvSUCNYai"
            }
          ],
          "disc_number": 1,
          "duration_ms": 290022,
          "explicit": true,
          "external_ids": {
            "isrc": "FR9KQ1900440"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2wpZaWXBctfgqGzGWiLD1b"
          },
          "href": "https://api.spotify.com/v1/tracks/2wpZaWXBctfgqGzGWiLD1b",
          "id": "2wpZaWXBctfgqGzGWiLD1b",
          "is_local": false,
          "is_playable": true,
          "name": "Liberté",
          "popularity": 57,
          "preview_url": "https://p.scdn.co/mp3-preview/6708aad43e5fab088bd623f33da9a0f40e3401b6?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2wpZaWXBctfgqGzGWiLD1b"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
                },
                "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
                "id": "0GgY7hjMoGDsX8ZDe2mwds",
                "name": "Soolking",
                "type": "artist",
                "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6tGI9MGbLjbxyzcxYkMXPJ"
            },
            "href": "https://api.spotify.com/v1/albums/6tGI9MGbLjbxyzcxYkMXPJ",
            "id": "6tGI9MGbLjbxyzcxYkMXPJ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b28db1e5c8c53e67c6969c06",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b28db1e5c8c53e67c6969c06",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b28db1e5c8c53e67c6969c06",
                "width": 64
              }
            ],
            "name": "Vintage",
            "release_date": "2020-03-19",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:6tGI9MGbLjbxyzcxYkMXPJ"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
              },
              "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
              "id": "0GgY7hjMoGDsX8ZDe2mwds",
              "name": "Soolking",
              "type": "artist",
              "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5wyWp867LWGjFmYZXVSFnZ"
              },
              "href": "https://api.spotify.com/v1/artists/5wyWp867LWGjFmYZXVSFnZ",
              "id": "5wyWp867LWGjFmYZXVSFnZ",
              "name": "MERO",
              "type": "artist",
              "uri": "spotify:artist:5wyWp867LWGjFmYZXVSFnZ"
            }
          ],
          "disc_number": 1,
          "duration_ms": 149973,
          "explicit": false,
          "external_ids": {
            "isrc": "FR9KQ2000600"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3tSy9yUo0rb1LR61CS5O7l"
          },
          "href": "https://api.spotify.com/v1/tracks/3tSy9yUo0rb1LR61CS5O7l",
          "id": "3tSy9yUo0rb1LR61CS5O7l",
          "is_local": false,
          "is_playable": true,
          "name": "Hayati",
          "popularity": 53,
          "preview_url": "https://p.scdn.co/mp3-preview/345e669621c0a4e7ae9c4d1ba9260ca5e6db59c6?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 10,
          "type": "track",
          "uri": "spotify:track:3tSy9yUo0rb1LR61CS5O7l"
        }
      ]
    }
  }

  search () {
    const clientID = 'e2f02d4dea154195a5725adbfc871e6e'
    const clientSecret = '28c65c301f3a47c5b1e3eb58499b9a36'
    const baseURL = 'https://api.spotify.com/v1/search?'
    
    const artist = {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0GgY7hjMoGDsX8ZDe2mwds"
      },
      "followers": {
        "href": null,
        "total": 2302313
      },
      "genres": [
        "francoton",
        "french hip hop",
        "pop urbaine",
        "rap algerien",
        "rap tunisien"
      ],
      "href": "https://api.spotify.com/v1/artists/0GgY7hjMoGDsX8ZDe2mwds",
      "id": "0GgY7hjMoGDsX8ZDe2mwds",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/3d6157f47bb385b8ce39d721673b435586c2393e",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/5660bd755adbdc0d9d710329c4518ea67ec93112",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/a7b5cef57efb1821b2bf9a737434d30a4d4c0beb",
          "width": 160
        }
      ],
      "name": "Soolking",
      "popularity": 73,
      "type": "artist",
      "uri": "spotify:artist:0GgY7hjMoGDsX8ZDe2mwds"
    }
    this.setState({artist})
  }

  render () {

    return (
      <div className="App">
        <div className="App-title">Master Music from App</div>
        <div>
          <FormGroup>
            <InputGroup>
              <FormControl 
                type="text"
                placeholder="Search an Artist"
                value={this.state.query}
                onChange={(event) => this.setState({ query: event.target.value })}
                onKeyPress={(event) => {
                  if (event.key == 'Enter') {
                    this.search()
                  }
                }}
              />
            </InputGroup>
          </FormGroup>
          <button onClick={() => this.search()}>SEARCH</button>
        </div>
        {
          this.state.artist !== null
          ?
          <div>
            <Profile artist={this.state.artist} />
            <div className="Gallery">
              <Gallery tracks={this.state.tracks} />
            </div>
          </div>
          :
          <div>
          </div>
        }
        
      </div>
    )
  }
}

export default App