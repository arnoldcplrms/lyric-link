export const YOUTUBE_API_KEY = 'AIzaSyCDSyDy2-QyWSHEbGV9JYCFlbFByPnO05o';
export const MAX_PAGE_RESULT = 40
export const NEXT_SONG_EVENT = 'NEXT_SONG_EVENT'
export const VIDEO_CONTROL_EVENTS = {
    NEXT_SONG:'NEXT_SONG_EVENT',
    PLAY:'PLAY',
    PAUSE:'PAUSE',
    FAST_FORWARD:'FAST_FORWARD',
    REVERSE:'REVERSE'
}
export const SOCKET_URL = 'http://192.168.254.105:3000'
export const SOCKET_EVENTS = {
    ADD_SONG_TO_QUEUE:'ADD_SONG_TO_QUEUE',
    SAVE_SEARCH_RESULT:'SAVE_SEARCH_RESULT',
    VIDEO_UNEMBEDDABLE:'VIDEO_UNEMBEDDABLE'
  }

export const YOUTUBE_REQUEST_URL_BUILDER = (searchText)=> 
`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${encodeURIComponent(
    `${searchText}+Karaoke`
  )}&part=snippet&type=video&maxResults=${MAX_PAGE_RESULT}&videoEmbeddable=true`

export const testVideos = [
  {
      "kind": "youtube#searchResult",
      "etag": "S9irvf8yMNCVcvaQN-E_yIzeY44",
      "id": {
          "kind": "youtube#video",
          "videoId": "oj-7F_xubgE"
      },
      "snippet": {
          "publishedAt": "2023-01-18T11:34:15Z",
          "channelId": "UCYIY_K20dDjeYY2pgLQ20JA",
          "title": "THAT&#39;S WHAT FRIENDS ARE FOR - Dionne Warwick (KARAOKE VERSION)",
          "description": "Thank you for watching Pop Club! Please LIKE, SHARE and SUBSCRIBE! • Please subscribe to Pop Club ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/oj-7F_xubgE/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/oj-7F_xubgE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/oj-7F_xubgE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Pop Club",
          "liveBroadcastContent": "none",
          "publishTime": "2023-01-18T11:34:15Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "DIpSXkXBarN-W4Jjik82E7JBqtg",
      "id": {
          "kind": "youtube#video",
          "videoId": "gw8z4fSkV5A"
      },
      "snippet": {
          "publishedAt": "2023-07-21T11:00:39Z",
          "channelId": "UCaPwSXblS8F0owlKHGc6huw",
          "title": "MAHAL PA RIN KITA - Rockstar (KARAOKE VERSION)",
          "description": "Thank you so much for always supporting CoversPH! *** FOLLOW CoversPH on SPOTIFY: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/gw8z4fSkV5A/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/gw8z4fSkV5A/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/gw8z4fSkV5A/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "CoversPH",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-21T11:00:39Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "ua0S0ZpVk2B0O_eNm8eY3qB0RyU",
      "id": {
          "kind": "youtube#video",
          "videoId": "VhMdOKmEpa8"
      },
      "snippet": {
          "publishedAt": "2023-07-23T06:29:54Z",
          "channelId": "UC8kByXomulbwTwZFN5_KoJQ",
          "title": "MAHAL PA RIN KITA - Rockstar | KARAOKE HD",
          "description": "For more videos please subscribe to my channel and click the notification bell to keep updated for a new video and don't forget to ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/VhMdOKmEpa8/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/VhMdOKmEpa8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/VhMdOKmEpa8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AJ KARAOKE COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-23T06:29:54Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "84lGYXlCBr1Q5wgWjD5B0HOy5dM",
      "id": {
          "kind": "youtube#video",
          "videoId": "H8w1Gj7m0uo"
      },
      "snippet": {
          "publishedAt": "2023-06-06T03:20:36Z",
          "channelId": "UCip6z8k2u08d9XJo_Si1YLQ",
          "title": "Kung AKo Na Lang Sana - Bituin Escalante (Karaoke Version)",
          "description": "Song Title: Kung Ako Na Lang Sana Original Singer: Bituin Escalante Music: CTTO Video: Level Up Entertainment Editor: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/H8w1Gj7m0uo/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/H8w1Gj7m0uo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/H8w1Gj7m0uo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Level Up Entertainment",
          "liveBroadcastContent": "none",
          "publishTime": "2023-06-06T03:20:36Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "L9zW54oYu3aYSe6_EOeEY-qpkAo",
      "id": {
          "kind": "youtube#video",
          "videoId": "RseBsT9bb3Y"
      },
      "snippet": {
          "publishedAt": "2023-05-15T23:09:54Z",
          "channelId": "UCOjOwgnrWpfSMIvEBdTp4bg",
          "title": "Basta&#39;t Kasama Kita - Dingdong Avanzado | Karaoke Version",
          "description": "Basta't Kasama Kita [Karaoke Version] Music by Dingdong Avanzado [OPM] Thank you for watching and singing with us! Please ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/RseBsT9bb3Y/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/RseBsT9bb3Y/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/RseBsT9bb3Y/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "ZETT Mood Channel - Mood Music And Sounds",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-15T23:09:54Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "DSTN3GM-T0CHz4-3DLvywwytA-w",
      "id": {
          "kind": "youtube#video",
          "videoId": "oVc5iLb-7Os"
      },
      "snippet": {
          "publishedAt": "2023-07-23T01:32:12Z",
          "channelId": "UCK4jFu-Wms1bh97Pq994nhg",
          "title": "Uhaw - Dilaw (karaoke) tagalog karaoke song OPM",
          "description": "Male Favorite's Karaoke https://youtube.com/playlist?list=PLgQGrkOGfwS_9cMfKAaeCKuyMj_klAYhB Female Favorites Karaoke ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/oVc5iLb-7Os/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/oVc5iLb-7Os/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/oVc5iLb-7Os/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Videokaraoke Ni Bai",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-23T01:32:12Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "mKEOPq7YEnkP62SBs7IPJzlfatE",
      "id": {
          "kind": "youtube#video",
          "videoId": "XlfTirShNsw"
      },
      "snippet": {
          "publishedAt": "2023-06-25T09:07:51Z",
          "channelId": "UCNbFgUCJj2Ls6LVzBbL8fqA",
          "title": "Magbalik - Callalily (Karaoke)",
          "description": "karaokeyTV #karaokesongs #karaoke Magbalik - Callalily (Karaoke) This is from karaokeyTV version of \"Magbalik\" Thank you for ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/XlfTirShNsw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/XlfTirShNsw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/XlfTirShNsw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "KaraokeyTV",
          "liveBroadcastContent": "none",
          "publishTime": "2023-06-25T09:07:51Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "qMqOEnRoijZUGWiMLGqXvud-wMA",
      "id": {
          "kind": "youtube#video",
          "videoId": "qVbOsd-GaoU"
      },
      "snippet": {
          "publishedAt": "2020-08-01T12:48:44Z",
          "channelId": "UCVJ8nhuQ9G-3tuxI8Sxqbzg",
          "title": "2005 OPM HITS MEDLEY (Karaoke Version)",
          "description": "Stay tuned for brand new karaoke videos by subscribing. Don't forget to hit that notification bell! #KaraokeHits ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/qVbOsd-GaoU/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/qVbOsd-GaoU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/qVbOsd-GaoU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Singing Bees",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-01T12:48:44Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "f2DT6Wg9JlJqs0_7vv1buRyuYW4",
      "id": {
          "kind": "youtube#video",
          "videoId": "I8ruYoUTetw"
      },
      "snippet": {
          "publishedAt": "2020-02-01T19:37:43Z",
          "channelId": "UCuKfrS3u9ZgxxWCremkcoRg",
          "title": "Karaoke - Classic OPM Love Songs Medley",
          "description": "songs included: - Don't Know What To Do, Don't Know What To Say - Ric Segreto - Getting To Know Each Other - Ariel Rivera ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/I8ruYoUTetw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/I8ruYoUTetw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/I8ruYoUTetw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Ibarra Music",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-01T19:37:43Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "0bknP65gaDvhcSGbQ89cmXvvwgY",
      "id": {
          "kind": "youtube#video",
          "videoId": "mJZaTeakC-8"
      },
      "snippet": {
          "publishedAt": "2023-03-17T23:39:54Z",
          "channelId": "UC8kByXomulbwTwZFN5_KoJQ",
          "title": "PAG-IBIG KO SAYO&#39;Y &#39;DI MAGBABAGO - Men Oppose | KARAOKE HD",
          "description": "For more videos please subscribe to my channel and click the notification bell to keep updated for a new video and don't forget to ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/mJZaTeakC-8/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/mJZaTeakC-8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/mJZaTeakC-8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AJ KARAOKE COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2023-03-17T23:39:54Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "ZSiH6mgLxlbxMvgN9R5VzHKQ0zY",
      "id": {
          "kind": "youtube#video",
          "videoId": "ZDgyfqricXs"
      },
      "snippet": {
          "publishedAt": "2023-06-24T00:00:24Z",
          "channelId": "UCutZyApGOjqhOS-pp7yAj4Q",
          "title": "UHAW - Dilaw (HD Karaoke)",
          "description": "Narito na ang patok na awiting \"Uhaw\" na pinasikat ng opm band na \"Dilaw\" at kasama sa kanilang 2023 album na \"Sansinukob\".",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/ZDgyfqricXs/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/ZDgyfqricXs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/ZDgyfqricXs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Atomic Karaoke",
          "liveBroadcastContent": "none",
          "publishTime": "2023-06-24T00:00:24Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "9OMwZcl-_g16uSqCFevSICe3uGY",
      "id": {
          "kind": "youtube#video",
          "videoId": "nAq4ZV9Y7jg"
      },
      "snippet": {
          "publishedAt": "2022-09-18T07:00:26Z",
          "channelId": "UCHL2aW6X4u2Rt7H8OkPzYNQ",
          "title": "OPM HITS MEDLEY Vol.1 KARAOKE | MALE KEY | Bakit kung sino pa, Nandito ako, Akoy sayo ikay akin |",
          "description": "PLEASE GIVE CREDITS TO LARIEL STATION if you will use our Karaoke Music for your song covers. DISCLAIMER: LARIEL ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/nAq4ZV9Y7jg/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/nAq4ZV9Y7jg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/nAq4ZV9Y7jg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Lariel Station PH",
          "liveBroadcastContent": "none",
          "publishTime": "2022-09-18T07:00:26Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "4HQ57HwJ_DYX9V4hX4Dabw9wQZ8",
      "id": {
          "kind": "youtube#video",
          "videoId": "JpWX6wbSdLM"
      },
      "snippet": {
          "publishedAt": "2023-07-06T10:16:37Z",
          "channelId": "UCwYaoLjeZKtkEXF0NdG_MeQ",
          "title": "Pagsubok - Orient Pearl Karaoke HD 🎤 Songhits Karaoke",
          "description": "Pagsubok karaoke Orient Pearl Pagsubok karaoke Orient Pearl Karaoke #karaoke Karaoke SongHits Karaoke #SonghitsKaraoke ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/JpWX6wbSdLM/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/JpWX6wbSdLM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/JpWX6wbSdLM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Songhits Karaoke ",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-06T10:16:37Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "SiRkLu8OANNfqUKQnm8SlBpHYYM",
      "id": {
          "kind": "youtube#video",
          "videoId": "2J0hjAh06T0"
      },
      "snippet": {
          "publishedAt": "2023-05-11T08:00:21Z",
          "channelId": "UCNbFgUCJj2Ls6LVzBbL8fqA",
          "title": "Kitchie Nadal Medley - (Karaoke)",
          "description": "karaokeyTV #bulong #karaoke Kitchie Nadal Medley - (Karaoke) This is from karaokeyTV version of \"Kitchie Nadal Medley\" Thank ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/2J0hjAh06T0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/2J0hjAh06T0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/2J0hjAh06T0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "KaraokeyTV",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-11T08:00:21Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "bD5GTpB6b8gZ7WkCnRay78BTUEE",
      "id": {
          "kind": "youtube#video",
          "videoId": "VwuOa2F9jk4"
      },
      "snippet": {
          "publishedAt": "2017-10-15T14:08:32Z",
          "channelId": "UCU8_75EyN-sf6EECum_CMmw",
          "title": "With a Smile - ERASERHEADS (KARAOKE)",
          "description": "KARAOKE COVER SONG Good for low Speed Internet connection. BEST VIEWED IN HD format PC or MOBILE Cell phones.",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/VwuOa2F9jk4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/VwuOa2F9jk4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/VwuOa2F9jk4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "PRO music COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2017-10-15T14:08:32Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "AzZV3h3BF-M8-EKqShKV6mGCFAY",
      "id": {
          "kind": "youtube#video",
          "videoId": "SJZlk-jdZzY"
      },
      "snippet": {
          "publishedAt": "2023-05-10T23:39:54Z",
          "channelId": "UCbFO2sH551ArY_Dqyoa63lg",
          "title": "Forevermore -  OPM Acoustic karaoke - Side A",
          "description": "Don't miss the update of our new OPM Acoustic karaoke videos by subscribing here: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/SJZlk-jdZzY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/SJZlk-jdZzY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/SJZlk-jdZzY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "OPM AcousticKaraoke PH",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-10T23:39:54Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "AI-JVD0TMlHnXN7kSr8HGDrxJVI",
      "id": {
          "kind": "youtube#video",
          "videoId": "1A-xbZ4JemU"
      },
      "snippet": {
          "publishedAt": "2022-09-23T07:00:00Z",
          "channelId": "UCHL2aW6X4u2Rt7H8OkPzYNQ",
          "title": "OPM HITS MEDLEY Vol. 2 KARAOKE | FEMALE KEY |",
          "description": "PLEASE GIVE CREDITS TO LARIEL STATION if you will use our Karaoke Music for your song covers. DISCLAIMER: LARIEL ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/1A-xbZ4JemU/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/1A-xbZ4JemU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/1A-xbZ4JemU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Lariel Station PH",
          "liveBroadcastContent": "none",
          "publishTime": "2022-09-23T07:00:00Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "pCKWXeCDFRE8oM6teo17D85PyB8",
      "id": {
          "kind": "youtube#video",
          "videoId": "y7AEryRp-oo"
      },
      "snippet": {
          "publishedAt": "2017-09-30T01:26:23Z",
          "channelId": "UCqh7JrHXYav2_kk5Ag793BA",
          "title": "Tuloy Pa Rin - Neocolors (KARAOKE)",
          "description": "A Karaoke Channel made for Filipinos who loves singing or listening instrumental music with their favorite OPM artists. We make ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/y7AEryRp-oo/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/y7AEryRp-oo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/y7AEryRp-oo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Karaoke Negra",
          "liveBroadcastContent": "none",
          "publishTime": "2017-09-30T01:26:23Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "uRtugaPu_gFAhTlfeFtWLChSdvE",
      "id": {
          "kind": "youtube#video",
          "videoId": "v7hRpilP2sg"
      },
      "snippet": {
          "publishedAt": "2018-04-18T15:19:36Z",
          "channelId": "UCU8_75EyN-sf6EECum_CMmw",
          "title": "Nobela - Join The Club (KARAOKE)",
          "description": "KARAOKE COVER SONG Good for low Speed Internet connection. BEST VIEWED IN HD format PC or MOBILE Cell phones.",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/v7hRpilP2sg/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/v7hRpilP2sg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/v7hRpilP2sg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "PRO music COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2018-04-18T15:19:36Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "O_SwYovMb-BMAo2-a35yJVHIiD0",
      "id": {
          "kind": "youtube#video",
          "videoId": "PxtzT8iK-38"
      },
      "snippet": {
          "publishedAt": "2023-03-12T00:58:38Z",
          "channelId": "UCJ4_xcVtAkRhZ3eAEmI_r-Q",
          "title": "Eric Clapton - Wonderful Tonight (KARAOKE Version)",
          "description": "Wonderful Tonight Karaoke by Eric Clapton (from \"Slowhand\" 1977 album) Stay tuned for brand new karaoke videos by ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/PxtzT8iK-38/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/PxtzT8iK-38/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/PxtzT8iK-38/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "KaraOcraze",
          "liveBroadcastContent": "none",
          "publishTime": "2023-03-12T00:58:38Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "BeQihuMXHCMlvG4UHgaqFw7Hzqs",
      "id": {
          "kind": "youtube#video",
          "videoId": "EFWKTvTgMsM"
      },
      "snippet": {
          "publishedAt": "2023-07-24T13:04:23Z",
          "channelId": "UCj8MrQPTFj08bCg_G0WLFVg",
          "title": "MINAMAHAL KITA - (Karaoke Version) - in the style of Freddie Aguilar",
          "description": "KaraokeCovers #KaraokeHits #KaraokeVersions By Freddie Aguilar OPM PLEASE DO NOT RE-UPLOAD! Please check out ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/EFWKTvTgMsM/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/EFWKTvTgMsM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/EFWKTvTgMsM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Pinoy Videoke Tambayan",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-24T13:04:23Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "dFwdRFaeaP_e4KTp2T9hz5gV-Nk",
      "id": {
          "kind": "youtube#video",
          "videoId": "xZA4JnJm1EY"
      },
      "snippet": {
          "publishedAt": "2022-10-23T01:38:44Z",
          "channelId": "UC3ZNuYIoi2tQqYNiOeY4JFA",
          "title": "AT ANG HIRAP (KARAOKE VERSION) Angeline Quinto",
          "description": "AT ANG HIRAP karaoke Version by Angeline Quinto Credit to the owner: ABS-CBN Film Productions, Inc., Muserk Rights ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/xZA4JnJm1EY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/xZA4JnJm1EY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/xZA4JnJm1EY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Secret Voices ph",
          "liveBroadcastContent": "none",
          "publishTime": "2022-10-23T01:38:44Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "nDzbMOw_5_0MFsk8b06-cVYuxAY",
      "id": {
          "kind": "youtube#video",
          "videoId": "9QRwZdrpEys"
      },
      "snippet": {
          "publishedAt": "2023-03-17T10:25:45Z",
          "channelId": "UC538Fzqf4bDUyuYRivnjjZg",
          "title": "Freddie Aguilar - Kumusta Ka Aking Mahal ( KaraOke Version ) |JEG KARAOKE #opm #karaokekaraoke songs",
          "description": "karaoke #karaokesongs #videoke Freddie Aguilar - Kumusta Ka Aking Mahal ( KaraOke Version ) | JEG KARAOKE #opm ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/9QRwZdrpEys/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/9QRwZdrpEys/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/9QRwZdrpEys/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Boss Jegs",
          "liveBroadcastContent": "none",
          "publishTime": "2023-03-17T10:25:45Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "CYA-LJlnEnq_0iwzP2mjP_-78oU",
      "id": {
          "kind": "youtube#video",
          "videoId": "TSp1g2cNULY"
      },
      "snippet": {
          "publishedAt": "2023-07-24T06:40:20Z",
          "channelId": "UCeccof3xATHRJVYTGx36wdw",
          "title": "Best Of OPM Acoustic Love Songs 2023 Playlist 2406 ❤️ Top Tagalog Acoustic Songs Cover Of All Time",
          "description": "Best Of OPM Acoustic Love Songs 2023 Playlist 2406 ❤️ Top Tagalog Acoustic Songs Cover Of All Time If this music makes ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/TSp1g2cNULY/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/TSp1g2cNULY/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/TSp1g2cNULY/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "OPM Acoustic",
          "liveBroadcastContent": "live",
          "publishTime": "2023-07-24T06:40:20Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "brDxU9wctH0eI4Rmv3L1DI5LaX8",
      "id": {
          "kind": "youtube#video",
          "videoId": "u9fv7s2OWQo"
      },
      "snippet": {
          "publishedAt": "2023-04-25T01:13:44Z",
          "channelId": "UCOjOwgnrWpfSMIvEBdTp4bg",
          "title": "Ipagpatawad Mo - VST &amp; Company | Karaoke Version",
          "description": "Ipagpatawad Mo [Karaoke Version] Music by VST & Company [OPM] VST & Company (commonly abbreviated as VST & Co. or ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/u9fv7s2OWQo/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/u9fv7s2OWQo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/u9fv7s2OWQo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "ZETT Mood Channel - Mood Music And Sounds",
          "liveBroadcastContent": "none",
          "publishTime": "2023-04-25T01:13:44Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "qa_BsMwtme7vk8h4GxS5GIbUeoE",
      "id": {
          "kind": "youtube#video",
          "videoId": "w0rsjQsotD0"
      },
      "snippet": {
          "publishedAt": "2023-04-05T10:00:43Z",
          "channelId": "UCaPwSXblS8F0owlKHGc6huw",
          "title": "UHAW (Tayong Lahat) - Dilaw (KARAOKE VERSION)",
          "description": "Thank you so much for always supporting CoversPH! *** FOLLOW CoversPH on SPOTIFY: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/w0rsjQsotD0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/w0rsjQsotD0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/w0rsjQsotD0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "CoversPH",
          "liveBroadcastContent": "none",
          "publishTime": "2023-04-05T10:00:43Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "t62RnbvDgzMkvVPPuvCqWfIBur8",
      "id": {
          "kind": "youtube#video",
          "videoId": "dnKMTHiag5A"
      },
      "snippet": {
          "publishedAt": "2023-05-27T04:32:19Z",
          "channelId": "UCbFO2sH551ArY_Dqyoa63lg",
          "title": "Alipin - Shamrock - OPM Acoustic karaoke",
          "description": "Don't miss the update of our new OPM Acoustic karaoke videos by subscribing here: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/dnKMTHiag5A/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/dnKMTHiag5A/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/dnKMTHiag5A/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "OPM AcousticKaraoke PH",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-27T04:32:19Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "zq5fcOfz5Y4E2o-nQo_SBU3Y3LY",
      "id": {
          "kind": "youtube#video",
          "videoId": "syOXlrMHsHs"
      },
      "snippet": {
          "publishedAt": "2023-05-20T03:12:35Z",
          "channelId": "UC8kByXomulbwTwZFN5_KoJQ",
          "title": "BAKIT PA - Jessa Zaragoza | KARAOKE HD",
          "description": "For more videos please subscribe to my channel and click the notification bell to keep updated for a new video and don't forget to ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/syOXlrMHsHs/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/syOXlrMHsHs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/syOXlrMHsHs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AJ KARAOKE COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-20T03:12:35Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "6nLhmaJx2Sx0KsPmC-3m-228hC8",
      "id": {
          "kind": "youtube#video",
          "videoId": "l4kCNkkzK-Q"
      },
      "snippet": {
          "publishedAt": "2023-07-22T02:12:50Z",
          "channelId": "UCuG7s3NkUzZ9UtZtCnYTKdA",
          "title": "Ocean Deep - Cliff Richard (KARAOKE VERSION)",
          "description": "Ocean Deep - Cliff Richard (KARAOKE VERSION) Lyrics: I can tell by your eyes That you've probably been crying forever And ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/l4kCNkkzK-Q/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/l4kCNkkzK-Q/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/l4kCNkkzK-Q/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "OPM Library 2023",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-22T02:12:50Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "6I-P-lC9e7ou9NFoRbYDC7wQ7Wc",
      "id": {
          "kind": "youtube#video",
          "videoId": "_NPDxL4oy98"
      },
      "snippet": {
          "publishedAt": "2022-11-05T21:57:20Z",
          "channelId": "UC8kByXomulbwTwZFN5_KoJQ",
          "title": "LARAWANG KUPAS - Jerome Abalos | KARAOKE HD",
          "description": "For more videos please subscribe to my channel and click the notification bell to keep updated for a new video and don't forget to ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/_NPDxL4oy98/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/_NPDxL4oy98/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/_NPDxL4oy98/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AJ KARAOKE COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2022-11-05T21:57:20Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "8okuQKiXGebDrq5i_lQmWMnhvaQ",
      "id": {
          "kind": "youtube#video",
          "videoId": "oPJs_fHWM6Q"
      },
      "snippet": {
          "publishedAt": "2023-03-10T08:15:27Z",
          "channelId": "UCPBlQNJr9V5cbi4CAIS0XAA",
          "title": "2005 OPM HITS MEDLEY (KARAOKE VIDEO)",
          "description": "2005 OPM HITS MEDLEY (karaoke version) -- This is from Karaoke91 version of OPM HITS MEDLEY You can use this ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/oPJs_fHWM6Q/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/oPJs_fHWM6Q/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/oPJs_fHWM6Q/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "SING A LONG ",
          "liveBroadcastContent": "none",
          "publishTime": "2023-03-10T08:15:27Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "T7fidhHF3lEVFTAjyXA7BEklUi0",
      "id": {
          "kind": "youtube#video",
          "videoId": "ozo0LifiMwY"
      },
      "snippet": {
          "publishedAt": "2021-11-24T19:36:43Z",
          "channelId": "UC5gQzKxeb5jIOh1BjTtxR9A",
          "title": "Wala na bang pagibig (Jaya) - karaoke song with lyrics cover",
          "description": "Click for micspeaker https://invol.co/cligmwa Click for male adult https://invol.co/clifix7 This is not my song. This is a higher key ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/ozo0LifiMwY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/ozo0LifiMwY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/ozo0LifiMwY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Kanta Kana",
          "liveBroadcastContent": "none",
          "publishTime": "2021-11-24T19:36:43Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "AHogl7r4MqnBIKh02hai5vm4J7I",
      "id": {
          "kind": "youtube#video",
          "videoId": "EHoZ-LofjkI"
      },
      "snippet": {
          "publishedAt": "2020-03-28T07:19:06Z",
          "channelId": "UCUfLW7fYnY3A-5HCLgcK0_w",
          "title": "Mayonnaise - Ipagpatawad Mo (Karaoke/Acoustic Instrumental)",
          "description": "Please do not violate or else you'll be reported ⚠ ✖ Do not try to reupload my Videos ✖ Do not use my Instrumental for your own ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/EHoZ-LofjkI/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/EHoZ-LofjkI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/EHoZ-LofjkI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AcousticHeaven",
          "liveBroadcastContent": "none",
          "publishTime": "2020-03-28T07:19:06Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "HsHn7r3-BjKt4KHdxDgs4GNtdC8",
      "id": {
          "kind": "youtube#video",
          "videoId": "jfBGyW_JYp8"
      },
      "snippet": {
          "publishedAt": "2020-09-02T21:34:26Z",
          "channelId": "UCuKfrS3u9ZgxxWCremkcoRg",
          "title": "Karaoke - OPM Medley - Freestyle",
          "description": "as arranged by Freestyle songs: When I Met You - Apo Hiking Society Bakit Ba Ganyan - Dina Bonnevie I Think I'm in Love - Kuh ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/jfBGyW_JYp8/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/jfBGyW_JYp8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/jfBGyW_JYp8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Ibarra Music",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-02T21:34:26Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "Sq9Jxi0_B22cLPsc4nFyVJqehxI",
      "id": {
          "kind": "youtube#video",
          "videoId": "f9-DjRVuzgk"
      },
      "snippet": {
          "publishedAt": "2019-12-26T05:33:18Z",
          "channelId": "UCutZyApGOjqhOS-pp7yAj4Q",
          "title": "PINOY AKO - Orange and Lemons (HD Karaoke)",
          "description": "\"Pinoy Ako\" is the official sound track of ABS-CBN's reality TV Show Pinoy Big Brother which was composed and performed by ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/f9-DjRVuzgk/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/f9-DjRVuzgk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/f9-DjRVuzgk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Atomic Karaoke",
          "liveBroadcastContent": "none",
          "publishTime": "2019-12-26T05:33:18Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "0avcytBKSv9tL3rx8Ys-MMLVcUg",
      "id": {
          "kind": "youtube#video",
          "videoId": "ogQU9BvFyjk"
      },
      "snippet": {
          "publishedAt": "2023-05-12T22:00:07Z",
          "channelId": "UCh7Or5kEc7XGqVUspaYlHDA",
          "title": "BAKIT BA GANYAN - DINA BONNEVIE (KARAOKE VERSION) #music #lyrics #karaoke #opm #trending #trend",
          "description": "Published on May 13, 2023 Karaoke/Instrumental version of \"Bakit ba ganyan\". Popularized by: Dina Bonnevie you can go ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/ogQU9BvFyjk/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/ogQU9BvFyjk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/ogQU9BvFyjk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Clean Audio",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-12T22:00:07Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "T3zvSxMGpJ8YWZn0osGqhtjtXbE",
      "id": {
          "kind": "youtube#video",
          "videoId": "IXl-HOrJRMc"
      },
      "snippet": {
          "publishedAt": "2017-06-01T18:13:12Z",
          "channelId": "UCS8dPN6Euw4CSh-ZWjNClMg",
          "title": "Pusong Bato  - Karaoke HD - OPM",
          "description": "Hello, I'm Fernando I made this Karaoke song in 2017 using Sony Vegas because I love the song and the melody l. Now it has ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/IXl-HOrJRMc/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/IXl-HOrJRMc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/IXl-HOrJRMc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "OkipenTV",
          "liveBroadcastContent": "none",
          "publishTime": "2017-06-01T18:13:12Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "lqu24DyuoLbrdkzEa5GA_FxFGZI",
      "id": {
          "kind": "youtube#video",
          "videoId": "OHIFuGAaod4"
      },
      "snippet": {
          "publishedAt": "2021-10-31T14:58:50Z",
          "channelId": "UCGZa6gDS1Ek4LREz-z0DQqw",
          "title": "RIVERMAYA MEDLEY (KARAOKE HQ VERSION)",
          "description": "Songs: ELESI | ULAN | KISSAPMATA | HINAHANAP-HANAP KITA | HIMALA | 214. Karaoke cover for entertainment purposes only ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/OHIFuGAaod4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/OHIFuGAaod4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/OHIFuGAaod4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "APMusic",
          "liveBroadcastContent": "none",
          "publishTime": "2021-10-31T14:58:50Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "ZpJTX2eP4DoXLk8Nk3BXiAZ9VEE",
      "id": {
          "kind": "youtube#video",
          "videoId": "62YW5lP4ZG4"
      },
      "snippet": {
          "publishedAt": "2023-05-05T09:25:03Z",
          "channelId": "UCbFO2sH551ArY_Dqyoa63lg",
          "title": "Your love - Alamid (OPM Acoustic karaoke)",
          "description": "Don't miss the update of our new OPM Acoustic karaoke videos by subscribing here: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/62YW5lP4ZG4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/62YW5lP4ZG4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/62YW5lP4ZG4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "OPM AcousticKaraoke PH",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-05T09:25:03Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "rQF7IaH3RxkOc-f8x7glQq7917g",
      "id": {
          "kind": "youtube#video",
          "videoId": "vRS7hrt6Cro"
      },
      "snippet": {
          "publishedAt": "2023-02-21T13:58:17Z",
          "channelId": "UCNOXS08aboL5HDxV4fIbzXA",
          "title": "Sabihin - Zelle (Karaoke)",
          "description": "Sabihin - Zelle (Karaoke) Song: Sabihin Artist: Zelle Instrumental Cover by GoldenKeys Karaoke Original Source: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/vRS7hrt6Cro/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/vRS7hrt6Cro/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/vRS7hrt6Cro/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "GoldenKeys Karaoke",
          "liveBroadcastContent": "none",
          "publishTime": "2023-02-21T13:58:17Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "1qo7KyiahJqi7eON2r60x5nPT6s",
      "id": {
          "kind": "youtube#video",
          "videoId": "B-TfxtwK3n0"
      },
      "snippet": {
          "publishedAt": "2022-02-08T07:19:48Z",
          "channelId": "UClgXXs6im4_ro0zo00kLPSA",
          "title": "Jessa Zaragoza Medley Karaoke 🎤",
          "description": "Jessa Zaragoza Medley Karaoke #JessaZaragozaMedleyKaraoke #JessaZaragoza #BakitPaKaraoke #DiBatIkawKaraoke ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/B-TfxtwK3n0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/B-TfxtwK3n0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/B-TfxtwK3n0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "JT Version",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-08T07:19:48Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "zb4QkCFuCjxCjshJZ8phtRK8kdY",
      "id": {
          "kind": "youtube#video",
          "videoId": "DZ_J436b77E"
      },
      "snippet": {
          "publishedAt": "2018-05-13T01:28:18Z",
          "channelId": "UCutmEMtWPYmpD_BHdU-zlhg",
          "title": "ERASERHEADS MEDLEY",
          "description": "A Karaoke cover with 360p resolution Good for tablets and mobile phones . This is my MIDI ( *.mid) file in video format (mp4) with ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/DZ_J436b77E/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/DZ_J436b77E/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/DZ_J436b77E/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Lady Joy Karaoke Mobile",
          "liveBroadcastContent": "none",
          "publishTime": "2018-05-13T01:28:18Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "u9CELo6ozPR0spTp4IQGhUEfvs0",
      "id": {
          "kind": "youtube#video",
          "videoId": "n0j-Q9CzEsk"
      },
      "snippet": {
          "publishedAt": "2022-07-08T04:31:57Z",
          "channelId": "UC-bXmzQ_Q_yse0NXQB7eOAQ",
          "title": "J Brothers Medley Karaoke | Ang gandang version | Amante Music",
          "description": "amantemusic #kantahan #opmsong #karaoke #medleykaraoke #jbrothersmedleykaraoke j brothers medley hits song opm kung ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/n0j-Q9CzEsk/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/n0j-Q9CzEsk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/n0j-Q9CzEsk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AMANTE MUSIC",
          "liveBroadcastContent": "none",
          "publishTime": "2022-07-08T04:31:57Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "xx05dYPVjyTF1zhWnB4uGdKc0DM",
      "id": {
          "kind": "youtube#video",
          "videoId": "qEj__qwWiK4"
      },
      "snippet": {
          "publishedAt": "2021-06-19T08:46:25Z",
          "channelId": "UCwU0jKwBA9pDysMi2uewNMw",
          "title": "OPM Tunog Kalye Playlist 1 (karaoke version)",
          "description": "Welcome to My All Time Karaoke Channel   Don't forget to: COMMENT LIKE SUBSCRIBE and HIT that notification ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/qEj__qwWiK4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/qEj__qwWiK4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/qEj__qwWiK4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "My All Time Karaoke",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-19T08:46:25Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "tVS1y9irzkZSd4KmoMHLoaR7Hcc",
      "id": {
          "kind": "youtube#video",
          "videoId": "rbPdZoq2mm0"
      },
      "snippet": {
          "publishedAt": "2023-02-27T09:45:03Z",
          "channelId": "UCNbFgUCJj2Ls6LVzBbL8fqA",
          "title": "Bigay Ka Ng Maykapal Karaoke Song",
          "description": "karaokeyTV #bigaykangmaykapal #karaoke Bigay Ka Ng Maykapal Karaoke Song This is from karaokeyTV version of \"Bigay Ka ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/rbPdZoq2mm0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/rbPdZoq2mm0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/rbPdZoq2mm0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "KaraokeyTV",
          "liveBroadcastContent": "none",
          "publishTime": "2023-02-27T09:45:03Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "QrQnhcS4v7gjs1d3VUMvSZtVJUw",
      "id": {
          "kind": "youtube#video",
          "videoId": "U--Y9SYL0Ik"
      },
      "snippet": {
          "publishedAt": "2022-08-27T01:39:56Z",
          "channelId": "UCK4jFu-Wms1bh97Pq994nhg",
          "title": "Pag-ibig Na Walang Dangal (KARA0KE) by Eva Eugenio tagalog karaoke | OPM song | tagalog videoke",
          "description": "please Do Not Reupload mga Bai, salamat :) related karaoke: imelda papin cristy mendoza claire dela fuente bing rodrigo roel ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/U--Y9SYL0Ik/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/U--Y9SYL0Ik/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/U--Y9SYL0Ik/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Videokaraoke Ni Bai",
          "liveBroadcastContent": "none",
          "publishTime": "2022-08-27T01:39:56Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "YE2g5ZrHxkueZ-W5mCvaYbmK-WE",
      "id": {
          "kind": "youtube#video",
          "videoId": "4ycKGkswKzI"
      },
      "snippet": {
          "publishedAt": "2022-08-07T08:34:49Z",
          "channelId": "UC8kByXomulbwTwZFN5_KoJQ",
          "title": "SABIHIN MONG LAGI - Men Oppose | KARAOKE HD",
          "description": "For more videos please subscribe to my channel and click the notification bell to keep updated for a new video and don't forget to ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/4ycKGkswKzI/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/4ycKGkswKzI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/4ycKGkswKzI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AJ KARAOKE COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2022-08-07T08:34:49Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "KGRSoRIco4nrebfzVAOxv37Q_i0",
      "id": {
          "kind": "youtube#video",
          "videoId": "Qx68B1mHyGQ"
      },
      "snippet": {
          "publishedAt": "2018-04-19T15:55:04Z",
          "channelId": "UCU8_75EyN-sf6EECum_CMmw",
          "title": "Only Reminds Me Of You - MYMP (KARAOKE)",
          "description": "A KARAOKE COVER SONG Good for low Speed Internet connection. BEST VIEWED IN HD format PC or MOBILE Cell phones.",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/Qx68B1mHyGQ/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/Qx68B1mHyGQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/Qx68B1mHyGQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "PRO music COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2018-04-19T15:55:04Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "KFdOE5RpGdm0RTo1nKyBG7N172c",
      "id": {
          "kind": "youtube#video",
          "videoId": "caP1on8jt44"
      },
      "snippet": {
          "publishedAt": "2022-02-28T04:40:08Z",
          "channelId": "UCJ4_xcVtAkRhZ3eAEmI_r-Q",
          "title": "TATSULOK - Bamboo (KARAOKE Version)",
          "description": "Tatsulok - Bamboo (Karaoke) (from \"We Stand Alone Together\" 2007 album) originally by Buklod Lyrics: Totoy bilisan mo, bilisan ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/caP1on8jt44/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/caP1on8jt44/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/caP1on8jt44/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "KaraOcraze",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-28T04:40:08Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "0ogjTihRkaMUDE8Bd3ZsZaR9LLQ",
      "id": {
          "kind": "youtube#video",
          "videoId": "F6yl_4xQFDQ"
      },
      "snippet": {
          "publishedAt": "2021-06-04T10:32:54Z",
          "channelId": "UC8kByXomulbwTwZFN5_KoJQ",
          "title": "IKAW ANG DAHILAN - Jerry Angga | KARAOKE HD",
          "description": "For more videos please subscribe to my channel and click the notification bell to keep updated for a new video and don't forget to ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/F6yl_4xQFDQ/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/F6yl_4xQFDQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/F6yl_4xQFDQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "AJ KARAOKE COVER",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-04T10:32:54Z"
      }
  }
]
