// Array of Taylor Swift songs and their corresponding Spotify embed URLs
/*
const songs = [
    { title: "Love Story", url: "2fPvQfGQEZOKtJ9qXeL4x8" },
    { title: "Blank Space", url: "1u8c2t2Cy7UBoG4ArRcF5g" },
    { title: "Shake It Off", url: "0V3wPSX9ygBnCm8psDIegu" }
];
*/

// Array of Taylor Swift songs and their corresponding Spotify track ids 
const songs =
[
  {
    "title": "Winter Wonderland",
    "url": "4MQOInul4Fa1ymK6ocq0jM?si"
  },
  {
    "title": "Somewhere Only We Know",
    "url": "6nYEkOrpEjeNV3MBLwoZBG?si"
  },
  {
    "title": "The Christmas Song",
    "url": "4WRb5qAPnvMbUIrnjLaggC?si"
  },
  {
    "title": "Invisible - from the Netflix Film Klaus",
    "url": "62z2Su8BBGvR50aOvdjPzW?si"
  },
  {
    "title": "O Holy Night - Spotify Singles Holiday",
    "url": "7L3OGWgJMQdXSbY3zgUt1Q?si"
  },
  {
    "title": "First Christmas",
    "url": "2CE1KhKOw23t0CLjfHUPN0?si"
  },
  {
    "title": "Hallelujah",
    "url": "0HZk0QsXPhMNAWNDR3rYE8?si"
  },
  {
    "title": "Heading North for Christmas",
    "url": "49H0RxNx7Sonu3l4zEU1W4?si"
  },
  {
    "title": "Underneath the Tree",
    "url": "3nAp4IvdMPPWEH9uuXFFV5?si"
  },
  {
    "title": "Step Into Christmas - Remastered 1995",
    "url": "11P4sSu6BH2lAbWk1sL6cK?si"
  },
  {
    "title": "Fairytale of New York (feat. Kirsty MacColl)",
    "url": "3wV9G5BhrJ1ntlCQYko0if?si"
  },
  {
    "title": "Run Rudolph Run - Spotify Singles Holiday",
    "url": "6pheMGrfMwwnypqafU7d4k?si"
  },
  {
    "title": "Love Is a Compass - Disney Supporting Make-a-Wish",
    "url": "7dRY3jnh3wKtwpICpt1WuT?si"
  },
  {
    "title": "Not Tonight Santa",
    "url": "55fhKXmY0UzzGT4AUwNvRe?si"
  },
  {
    "title": "All I Want for Christmas Is You",
    "url": "0bYg9bo50gSsH3LtXe2SQn?si"
  },
  {
    "title": "Merry Christmas",
    "url": "3bH2Eu9A9ymI4UnGHRmoXg?si"
  },
  {
    "title": "Half The World Away",
    "url": "21HfUACOv1lgBiYocruoW8?si"
  },
  {
    "title": "Candy Cane Lane",
    "url": "4KevTcBXEIYxXVyPE78XXm?si"
  },
  {
    "title": "Santa Tell Me",
    "url": "0lizgQ7Qw35od7CYaoMBZb?si"
  },
  {
    "title": "Winter Winds",
    "url": "7eNdbY0tlrWNKaiaCZGljh?si"
  },
  {
    "title": "Last Christmas",
    "url": "2FRnf9qhLbvw8fu4IBXx78?si"
  },
  {
    "title": "You Make It Feel Like Christmas (feat. Blake Shelton)",
    "url": "2OQ6a4CfUeYskpTTgyawyJ?si"
  },
  {
    "title": "Rockin' Around The Christmas Tree",
    "url": "2yxTGxTDbgcbMN0Ae102bn?si"
  },
  {
    "title": "Stay Another Day",
    "url": "4wYCe9tSmUolNU4WmJKbZy?si"
  },
  {
    "title": "Feliz Navidad",
    "url": "5rgStA2VSw8K6jragj6yBx?si"
  },
  {
    "title": "DJ Play A Christmas Song",
    "url": "18uSfZqFBxQFi8CsXOIbhy?si"
  },
  {
    "title": "Santa, Can’t You Hear Me",
    "url": "2O3MQ6H3gjrIWDcpeTrikT?si"
  },
  {
    "title": "Main Title \"Somewhere in My Memory\" (From \"Home Alone\" Soundtrack)",
    "url": "1FlxqJmoZWS2q1uRlyZVur?si"
  },
  {
    "title": "Jingle Bell Rock",
    "url": "6p1GHnHSJSma1orNgP7NoE?si"
  },
  {
    "title": "Happy Xmas (War Is Over) - Remastered 2010",
    "url": "27RYrbL6S02LNVhDWVl38b?si"
  },
  {
    "title": "One More Sleep",
    "url": "78pn8k7RogKo2oxl0DyX6d?si"
  },
  {
    "title": "Christmas (Baby Please Come Home)",
    "url": "47ohYW8e7dxCYn9qbUMBCI?si"
  },
  {
    "title": "Christmas Wrapping",
    "url": "5nuDmbVFJAqUyxNr2mN0LX?si"
  },
  {
    "title": "Christmas Lights",
    "url": "4fzyvSu73BhGvi96p2zwjL?si"
  },
  {
    "title": "A Nonsense Christmas",
    "url": "73ye7F9Ub51dQ3CrnCHFhr?si"
  },
  {
    "title": "Do They Know It's Christmas? - 1984 Version",
    "url": "4Yg2w0P29BBBMixyeNjDtj?si"
  },
  {
    "title": "It's Beginning to Look a Lot like Christmas",
    "url": "3it2BvJfyhPEWF3kD2TZJ1?si"
  },
  {
    "title": "Sleigh Ride",
    "url": "5ASM6Qjiav2xPe7gRkQMsQ?si"
  },
  {
    "title": "Mistletoe",
    "url": "7xapw9Oy21WpfEcib2ErSA?si"
  },
  {
    "title": "Christmas Tree Farm",
    "url": "2mvabkN1i2gLnGAPUVdwek?si"
  },
  {
    "title": "Warm This Winter",
    "url": "3BfYDQC9SKBN1QCWVGb7C4?si"
  },
  {
    "title": "It's the Most Wonderful Time of the Year",
    "url": "5hslUAKq9I9CG2bAulFkHN?si"
  },
  {
    "title": "Memory Lane",
    "url": "3yMQqcTCfTJUpwdZajJH1o?si"
  },
  {
    "title": "Cozy Little Christmas",
    "url": "02FaKXXL7KUtRc7K0k54tL?si"
  },
  {
    "title": "Holiday Road - Spotify Singles Holiday",
    "url": "6hZvOA9oBZZM812GNDLjEb?si"
  },
  {
    "title": "Santa's Coming for Us",
    "url": "1N1ZpYUJc9fwrqk53FGgWv?si"
  },
  {
    "title": "Only You - From The McDonald’s Christmas Advert 2022",
    "url": "1mvfhBqEwBouLGSdcc7E4G?si"
  },
  {
    "title": "2000 Miles - 2007 Remaster",
    "url": "5wTM2Bm8phDwHAuOsfBwhU?si"
  },
  {
    "title": "Gifts For Me",
    "url": "0nhpTFbJ3uX4qqL9qaQj5B?si"
  },
  {
    "title": "Merry Christmas, Please Don't Call",
    "url": "0UOG0zUn7t8m8QcxfzR7AH?si"
  },
  {
    "title": "Baby It's Cold Outside (with Michael Bublé)",
    "url": "0Ie5uiv54KgCr7P4sYDTHl?si"
  },
  {
    "title": "Driving Home for Christmas",
    "url": "3Z3QhZAZpqwZa1phsbQ3JZ?si"
  },
  {
    "title": "Rest Of Our Days",
    "url": "0jLsr3uZp9i5VUpWdmd3k6?si"
  },
  {
    "title": "Home To You (This Christmas)",
    "url": "1SBo8LdLGOieucdStHz6iV?si"
  },
  {
    "title": "Holly Jolly Christmas",
    "url": "6rqn19AqjcM5wgI1hCYciJ?si"
  },
  {
    "title": "Where Are You Christmas?",
    "url": "7zqv6rEbwXksyE0tk9RCO1?si"
  },
  {
    "title": "My Only Wish (This Year)",
    "url": "0YWUHZPJVg4iujddsJDwhM?si"
  },
  {
    "title": "Real Love - From the John Lewis Christmas Advert 2014",
    "url": "1Udy17gjGeZPNdmmcLjl7L?si"
  },
  {
    "title": "Last First Christmas",
    "url": "20sRN1hzpN17HDfbuJSao1?si"
  },
  {
    "title": "Celebrate Me Home",
    "url": "4rVUzCFmxDor43ORzBKHcx?si"
  }
]
;


// Function to get a random song
function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}

// Function to generate a pseudorandom number based on a seed
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Function to get a random song for a given day
function getSongOfTheDay() {
    const date = new Date();
    const dayOfYear = Math.floor(
        (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - 
         Date.UTC(date.getFullYear(), 0, 0)) / 86400000
    ); // Calculate the day of the year (1-365)

    const seed = dayOfYear + date.getFullYear(); // Combine day of the year and year as seed
    const randomIndex = Math.floor(seededRandom(seed) * songs.length); // Generate random index
    return songs[randomIndex];
}

// Get a random song
//const song = getRandomSong();
const song = getSongOfTheDay();

const song_url = "https://open.spotify.com/embed/track/".concat(song.url).concat("?utm_source=generator");

// Set the song title and iframe src
document.getElementById('song').innerText = song.title;
document.getElementById('spotify-player').src = song_url;
