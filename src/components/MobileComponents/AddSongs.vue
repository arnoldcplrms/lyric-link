<template>
  <div style="height: 100vh;" class="container mt-5">
    <!-- Search box for YouTube videos -->
    <div class="input-group mb-3">
      <input v-model="searchText" type="text" class="form-control" placeholder="Search YouTube Karaoke Videos"
        @keyup.enter="searchVideos" />
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="searchVideos">Search</button>
      </div>
    </div>

    <!-- Video cards -->
    <div class="row">
      <div v-for="video in videos" :key="video.id.videoId" class="col-md-4 mb-4">
        <div class="card" style="border-radius: 10px;">
          <img :src="video.snippet.thumbnails.medium.url" class="card-img-top" alt="Video Thumbnail" />
          <div class="card-body">
            <div>
              <span class="card-title">{{ video.snippet.title }}</span>
            </div>
            <div class="button-container">
              <button
              :class="['btn','w-100', 'btn-block', 'mt-2', isAdded(video) ? 'btn-outline-succes' : 'btn-success']"
              @click="addToQueue(video)"
              :disabled="isAdded(video)"
            >
              {{ isAdded(video) ? 'Song Added' : 'Add To Queue' }}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// Replace 'YOUR_YOUTUBE_API_KEY' with your actual API key
const API_KEY = 'AIzaSyCDSyDy2-QyWSHEbGV9JYCFlbFByPnO05o';

export default {
  data() {
    return {
      searchText: '',
      videos: [
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
          "etag": "rvYdhQHVdod0soCHNXXKjy87Weg",
          "id": {
            "kind": "youtube#video",
            "videoId": "OgpA8sMKZMk"
          },
          "snippet": {
            "publishedAt": "2023-05-06T22:45:00Z",
            "channelId": "UCwTRjvjVge51X-ILJ4i22ew",
            "title": "Dilaw - Uhaw (Tayong Lahat) (Karaoke Version)",
            "description": "Love Karaoke? Our brand new app is here! Download now for FREE https://singking.link/yt-desc Karaoke sing along of “Uhaw ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/OgpA8sMKZMk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/OgpA8sMKZMk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/OgpA8sMKZMk/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Sing King",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-06T22:45:00Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "gh43e86KPP-GaNyXhDPTMhdLTAE",
          "id": {
            "kind": "youtube#video",
            "videoId": "V9WSstopfvE"
          },
          "snippet": {
            "publishedAt": "2023-06-15T09:32:01Z",
            "channelId": "UC1pQVg8HozJJxLdzaqQikHg",
            "title": "UHAW - Dilaw (Karaoke)",
            "description": "Enjoy Singing along with family & Friends Hope you guys like the video. If you have request in your mind just write & comment ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/V9WSstopfvE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/V9WSstopfvE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/V9WSstopfvE/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Migz Nath",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-15T09:32:01Z"
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
          "etag": "Ew6zK3kx7TuoA-VOyYJmFMnmFKk",
          "id": {
            "kind": "youtube#video",
            "videoId": "KghKjYWQ7ZM"
          },
          "snippet": {
            "publishedAt": "2023-04-21T09:14:23Z",
            "channelId": "UCNbFgUCJj2Ls6LVzBbL8fqA",
            "title": "Uhaw - Dilaw (Karaoke Version)",
            "description": "karaokeyTV #uhaw #karaoke Uhaw - Dilaw (Karaoke Version) This is from karaokeyTV version of \"Uhaw\" Thank you for watching ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/KghKjYWQ7ZM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/KghKjYWQ7ZM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/KghKjYWQ7ZM/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "KaraokeyTV",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-21T09:14:23Z"
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
          "etag": "-P-Wl6kOgFS92FnITAmXzUJQd38",
          "id": {
            "kind": "youtube#video",
            "videoId": "0qNDKSxVVYU"
          },
          "snippet": {
            "publishedAt": "2023-06-02T12:59:24Z",
            "channelId": "UCj8MrQPTFj08bCg_G0WLFVg",
            "title": "Uhaw - KARAOKE VERSION - in the style of Dilaw",
            "description": "KaraokeCovers #KaraokeHits #KaraokeVersions By Dilaw PLEASE DO NOT RE-UPLOAD! Please check out these PLAYLISTS of ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/0qNDKSxVVYU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/0qNDKSxVVYU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/0qNDKSxVVYU/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Pinoy Videoke Tambayan",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-02T12:59:24Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "ezalcKyS8NdtOLBbBH8H-pD_-w0",
          "id": {
            "kind": "youtube#video",
            "videoId": "AAHutZ8IRwk"
          },
          "snippet": {
            "publishedAt": "2023-06-07T11:35:07Z",
            "channelId": "UCcMc2V0eJPi1Pu2BUvC8umA",
            "title": "UHAW - Dilaw (karaoke version)",
            "description": "Hi everyone, this is the karaoke music of the Tagalog song \"UHAW\" by Dilaw. The backing track and lyrics synchronization was ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/AAHutZ8IRwk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/AAHutZ8IRwk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/AAHutZ8IRwk/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Just Sing It",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-07T11:35:07Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "lP4CvFcucE43brdV5HfQV-QYMQw",
          "id": {
            "kind": "youtube#video",
            "videoId": "yNzA_hJxsC4"
          },
          "snippet": {
            "publishedAt": "2023-07-23T14:00:11Z",
            "channelId": "UCemBB57jb8zKVUTFhNP2vOA",
            "title": "NAIS KO - Rodel Naval - SD / HD KARAOKE VERSION",
            "description": "karaokeversion #karaoke #trending #videoke #trend #ofw #always #kailankaya #youtubeviral #karaokeversion #roseaguirrevlogs ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/yNzA_hJxsC4/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/yNzA_hJxsC4/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/yNzA_hJxsC4/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Rose Aguirre Vlogs",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-23T14:00:11Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "5qaUmhejk-cqwWdiWGU5S8U9iXk",
          "id": {
            "kind": "youtube#video",
            "videoId": "0feHY0-Ah88"
          },
          "snippet": {
            "publishedAt": "2023-07-21T07:39:15Z",
            "channelId": "UCCNirCgrJmpONpinbBOiFog",
            "title": "UHAW - Karaoke version in the style of DILAW",
            "description": "UHAW - Karaoke version in the style of DILAW Check out my compiled playlist of Karaoke videos All-Male Playlist: ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/0feHY0-Ah88/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/0feHY0-Ah88/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/0feHY0-Ah88/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "MyKaraoke Channel",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-21T07:39:15Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "a7u9H0JrFEPK96Tm4Sxv-PFU18U",
          "id": {
            "kind": "youtube#video",
            "videoId": "baP0xrsdreM"
          },
          "snippet": {
            "publishedAt": "2023-03-22T02:24:15Z",
            "channelId": "UCRoAoGqqLuOIWztkcxUiYoA",
            "title": "Uhaw - Dilaw (Karaoke)",
            "description": "dilaw #uhaw #karaoke Uhaw - Dilaw (Karaoke) This is my Karaoke cover of Uhaw (Tayong Lahat) by Dilaw. All tracks were mixed ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/baP0xrsdreM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/baP0xrsdreM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/baP0xrsdreM/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Mi Balmz Karaoke Tracks",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-22T02:24:15Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "XGViKRyz1mzIynHetrN4s1DQXQ0",
          "id": {
            "kind": "youtube#video",
            "videoId": "dOnnHBIe7iw"
          },
          "snippet": {
            "publishedAt": "2023-04-20T12:42:27Z",
            "channelId": "UCaPwSXblS8F0owlKHGc6huw",
            "title": "UHAW - Dilaw/FEMALE KEY (KARAOKE VERSION)",
            "description": "Thank you so much for always supporting CoversPH! *** FOLLOW CoversPH on SPOTIFY: ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/dOnnHBIe7iw/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/dOnnHBIe7iw/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/dOnnHBIe7iw/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "CoversPH",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-20T12:42:27Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "HTDTMP2ldea579exhenYZ-_uPBg",
          "id": {
            "kind": "youtube#video",
            "videoId": "5CBuFuWyOJM"
          },
          "snippet": {
            "publishedAt": "2023-05-29T19:58:37Z",
            "channelId": "UCZLP7ZxAnHOwMRTDmHxsbwg",
            "title": "UHAW - Dilaw (Karaoke Version)",
            "description": "UHAW - Dilaw (Karaoke Version) Key of Bb major Karaoke Created by Kanta Sonata Originally Performed/Artist by - Dilaw All of ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/5CBuFuWyOJM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/5CBuFuWyOJM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/5CBuFuWyOJM/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "KantaSonata",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-29T19:58:37Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "_LqyAvagyb4Jp34MPa_oX1Ap4oE",
          "id": {
            "kind": "youtube#video",
            "videoId": "hYeG1kUwK6w"
          },
          "snippet": {
            "publishedAt": "2023-04-10T11:43:53Z",
            "channelId": "UCUfLW7fYnY3A-5HCLgcK0_w",
            "title": "Dilaw - Uhaw (Karaoke/Acoustic Version)",
            "description": "Please do not violate or else you'll be reported ⚠ ✖ Do not try to reupload my Videos ✖ Do not use my Instrumental for your own ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/hYeG1kUwK6w/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/hYeG1kUwK6w/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/hYeG1kUwK6w/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "AcousticHeaven",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-10T11:43:53Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "_0g6fnnJSQczwBhcL23nht8QkL4",
          "id": {
            "kind": "youtube#video",
            "videoId": "01Vyg4H_fh4"
          },
          "snippet": {
            "publishedAt": "2023-06-23T01:31:50Z",
            "channelId": "UCIzG-xGqKrrtiTXgDQrIdEA",
            "title": "Uhaw - dilaw (karaoke version) 🎶🎵",
            "description": "Uhaw - dilaw (karaoke version) Music in this video/credits Song: uhaw Music Artist: dilaw Original Source here: ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/01Vyg4H_fh4/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/01Vyg4H_fh4/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/01Vyg4H_fh4/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "KuyaPoy TV",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-23T01:31:50Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "BNKaFMlOalJjDDAku6_lTFOy_yU",
          "id": {
            "kind": "youtube#video",
            "videoId": "wdy3SjQEiNg"
          },
          "snippet": {
            "publishedAt": "2023-04-02T06:14:17Z",
            "channelId": "UCLibmOHbJSf1EAke-seSp8A",
            "title": "UHAW - Dilaw (KARAOKE)",
            "description": "This is from Global KaraokeyTV version of \"Uhaw\" Instrumental/Lyrics Cover. Note: You can use this instrumental for your covers ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/wdy3SjQEiNg/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/wdy3SjQEiNg/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/wdy3SjQEiNg/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Global KaraokeyTV",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-02T06:14:17Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "U_ujIHiCCMWyFs4Ze1Ytr5AYm5Y",
          "id": {
            "kind": "youtube#video",
            "videoId": "R4NUc6wIwR8"
          },
          "snippet": {
            "publishedAt": "2023-03-25T10:13:45Z",
            "channelId": "UCYSFPZjo0y5SEBVbLXDRIdQ",
            "title": "Uhaw - Dilaw (Piano Karaoke)",
            "description": "Piano karaoke and backing track for Dilaw's hit song \"Uhaw\". If you're watching my videos for the first time, I'm KaraoKeysPH.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/R4NUc6wIwR8/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/R4NUc6wIwR8/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/R4NUc6wIwR8/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "KaraoKeysPH",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-25T10:13:45Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "bYPQYuMmOJFK615JGmvyJrn8luo",
          "id": {
            "kind": "youtube#video",
            "videoId": "wB2MFdwTo5k"
          },
          "snippet": {
            "publishedAt": "2023-03-27T17:17:50Z",
            "channelId": "UCMjBYWn-mfaO9WlvWRgzu6w",
            "title": "Uhaw (Tayong Lahat) - Dilaw (Karaoke Version)",
            "description": "Try our own karaoke version of one of thee latest trending OPM songs. Thanks for all your support to this channel! Please ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/wB2MFdwTo5k/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/wB2MFdwTo5k/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/wB2MFdwTo5k/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Jammin' Karaoke",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-27T17:17:50Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "jRMsJl-8-oKqJeel-ejjNfEgMew",
          "id": {
            "kind": "youtube#video",
            "videoId": "5c1LORA-7tE"
          },
          "snippet": {
            "publishedAt": "2023-06-07T13:42:30Z",
            "channelId": "UCuMZUmEIz6V26xIFiyDRgJg",
            "title": "Dilaw - Uhaw (Lyrics)",
            "description": "Dilaw - Uhaw (Lyrics) ⏬ Download / Stream: https://dilaw.lnk.to/UhawTayongLahat Turn on notifications to stay updated with ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/5c1LORA-7tE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/5c1LORA-7tE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/5c1LORA-7tE/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Prestige Vibes",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-07T13:42:30Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "BQTl2ptsCH9MTALn9w7mYPlcYoY",
          "id": {
            "kind": "youtube#video",
            "videoId": "u8lhSaUusHc"
          },
          "snippet": {
            "publishedAt": "2023-03-26T03:30:25Z",
            "channelId": "UCYSFPZjo0y5SEBVbLXDRIdQ",
            "title": "Uhaw - Dilaw (Female Key - Piano Karaoke)",
            "description": "Piano karaoke and backing track for Dilaw's hit song \"Uhaw\". This is the female key version of the song. If you're watching my ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/u8lhSaUusHc/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/u8lhSaUusHc/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/u8lhSaUusHc/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "KaraoKeysPH",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-26T03:30:25Z"
          }
        }
      ],
      addedVideos: new Set()
    };
  },
  methods: {
    async searchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${encodeURIComponent(
            `${this.searchText}+Karaoke`
          )}&part=snippet&type=video&maxResults=30`
        );

        const data = await response.json();
        this.videos = data.items;
      } catch (error) {
        alert(error.message)
        console.error('Error searching for videos:', error.message);
      }
    },
    addToQueue(video) {
      // Implement the logic to add the video to your queue here
      const videoTitle = video.snippet.title
      const isKaraokeVideo = videoTitle.toLowerCase().includes('karaoke')
      if (!isKaraokeVideo) {
        return alert('The video you selected is not a karaoke type!')
      }

      this.addedVideos.add(video.id.videoId)
      console.log('Video added to queue:', { videoId: video.id.videoId, title: video.snippet.title, addedBy: 'Arnold' });
    },
    isAdded(video) {
      return this.addedVideos.has(video.id.videoId); // Check if video is in the set of added videos
    },
  },
};
</script>

<style>
/* Add any custom CSS styles here */
.button-container {
  margin-top: 10px;
}
</style>
