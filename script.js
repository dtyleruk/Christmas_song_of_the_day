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
    "title": "My Only Wish (This Year)",
    "url": "0YWUHZPJVg4iujddsJDwhM?si"
  },
  {
    "title": "Merry Christmas",
    "url": "3bH2Eu9A9ymI4UnGHRmoXg?si"
  },
  {
    "title": "Holly Jolly Christmas",
    "url": "6tjituizSxwSmBB5vtgHZE?si"
  },
  {
    "title": "O Come, O Come Emmanuel",
    "url": "5eUbOGFbdgm3m6MYd8W7ud?si"
  },
  {
    "title": "Little Drummer Boy",
    "url": "6MtecozqUbilB5qbVARrUH?si"
  },
  {
    "title": "Blue Christmas",
    "url": "3QiAAp20rPC3dcAtKtMaqQ?si"
  },
  {
    "title": "Rockin' Around The Christmas Tree",
    "url": "28fuXrmmF9dYWx25dMW9dP?si"
  },
  {
    "title": "Let It Snow! Let It Snow! Let It Snow! - 78rpm Version",
    "url": "4yV74JwUiz7YS59ReFtI3D?si"
  },
  {
    "title": "Jingle Bell Rock",
    "url": "6xE98wKYt4vZk8j7cctjw8?si"
  },
  {
    "title": "It's the Most Wonderful Time of the Year",
    "url": "5hslUAKq9I9CG2bAulFkHN?si"
  },
  {
    "title": "Last Christmas",
    "url": "2FRnf9qhLbvw8fu4IBXx78?si"
  },
  {
    "title": "I Saw Mommy Kissing Santa Claus",
    "url": "69lOXkCMEPFSDwuuznGjMy?si"
  },
  {
    "title": "Baby, It's Cold Outside",
    "url": "4MrfQL4TYQXJBlZYpAHTuE?si"
  },
  {
    "title": "Silver Bells (with Percy Faith & His Orchestra)",
    "url": "2nAEdhOj2R8WYVr1hRcSj6?si"
  },
  {
    "title": "Mele Kalikimaka (Merry Christmas)",
    "url": "04vLj9QUXoKdRlsp3gkURo?si"
  },
  {
    "title": "Feliz Navidad",
    "url": "0oPdaY4dXtc3ZsaG17V972?si"
  },
  {
    "title": "Deck The Halls",
    "url": "0yOLhQVpava7cJhVDbCvSh?si"
  },
  {
    "title": "You're A Mean One, Mr. Grinch",
    "url": "6ZgigeSB0XUMqc0jjzaq6d?si"
  },
  {
    "title": "Happy Holiday / The Holiday Season",
    "url": "3sDdyBHQ60Cs1opmIyRvhp?si"
  },
  {
    "title": "It's the Most Wonderful Time of the Year",
    "url": "3Jk1y1EVSzIJbd5g3QkbRL?si"
  },
  {
    "title": "Mary, Did You Know?",
    "url": "4z8sz6E4YyFuEkv5o7IJni?si"
  },
  {
    "title": "Up On The Housetop",
    "url": "6alKswvFckHEeNtO3JFvZl?si"
  },
  {
    "title": "It's Beginning to Look a Lot like Christmas",
    "url": "0lLdorYw7lVrJydTINhWdI?si"
  },
  {
    "title": "The Chipmunk Song (Christmas Don't Be Late) - Remastered 1999",
    "url": "2vveFvCblrNfr1lnu3kg5l?si"
  },
  {
    "title": "Wonderful Christmastime",
    "url": "6TISge5VrzRNtsZZBvPw57?si"
  },
  {
    "title": "Here Comes Santa Claus (Down Santa Claus Lane) - 1947 Version",
    "url": "22naVVqr5Z4uN8wBWt23aO?si"
  },
  {
    "title": "White Christmas",
    "url": "7fy0Y6uzX0O1UeW0UWeXvh?si"
  },
  {
    "title": "March Of The Wooden Soldiers",
    "url": "7G6LqieyYXuMmZlKkKZN5R?si"
  },
  {
    "title": "Hark! The Herald Angels Sing",
    "url": "3ZtHqS2FZwbP8U0Soi0rg6?si"
  },
  {
    "title": "Silver Bells (feat. Count Basie Big Band)",
    "url": "3IFdgovo2BeNChD2DWBh7H?si"
  },
  {
    "title": "Happy Xmas (War Is Over) - Remastered 2010",
    "url": "27RYrbL6S02LNVhDWVl38b?si"
  },
  {
    "title": "Twelve Days Of Christmas - Single Version",
    "url": "4Zo33RKIwOIiVsZZtXsKU4?si"
  },
  {
    "title": "Where Are You Christmas",
    "url": "1JXR2LQ9gIj7nfUXowW5uh?si"
  },
  {
    "title": "The Polar Express",
    "url": "2cxqB2Hx4gT5NH0pnxaVvw?si"
  },
  {
    "title": "Please Come Home for Christmas - 2013 Remaster",
    "url": "3QIoEi8Enr9uHffwInGIsC?si"
  },
  {
    "title": "Silent Night",
    "url": "6t0Fa4mTahx3sS3lYwAMwV?si"
  },
  {
    "title": "The First Noël",
    "url": "1DvjCIefxg1YsdG3ETROph?si"
  },
  {
    "title": "I'll Be Home For Christmas",
    "url": "4lftz0V8DZhWSVtL4GrzMH?si"
  },
  {
    "title": "Christmas (Baby Please Come Home)",
    "url": "66WPXyhXqMlkM1kZhyEXWK?si"
  },
  {
    "title": "Santa Claus Is Comin' to Town",
    "url": "1f2lkuLldqRzvaFjJdjGXX?si"
  },
  {
    "title": "Joy To The World",
    "url": "1VuAamHM7P3VQQEXYGG3Uu?si"
  },
  {
    "title": "Rudolph The Red-Nosed Reindeer",
    "url": "47otoIkhx3fkdivEXL5OB6?si"
  },
  {
    "title": "Underneath The Tree",
    "url": "6aEFTLjSlrYsvwFUhQUFlu?si"
  },
  {
    "title": "Silver And Gold - From \"Rudolph The Red-Nosed Reindeer\" Soundtrack",
    "url": "5EmYSWE2LpTd4hXxPYdbSf?si"
  },
  {
    "title": "Holly Jolly Christmas",
    "url": "5ytHAlFPRcFOR8hslfVnbT?si"
  },
  {
    "title": "The Christmas Song (Merry Christmas To You)",
    "url": "4PS1e8f2LvuTFgUs1Cn3ON?si"
  },
  {
    "title": "All I Want for Christmas Is You",
    "url": "0bYg9bo50gSsH3LtXe2SQn?si"
  },
  {
    "title": "My Favourite Things",
    "url": "7qLTpTd1Txpo8Vd84yci7u?si"
  },
  {
    "title": "Santa Tell Me",
    "url": "0lizgQ7Qw35od7CYaoMBZb?si"
  },
  {
    "title": "Sleigh Ride",
    "url": "7enVhl0fuHvQ4ErXvAXYIH?si"
  },
  {
    "title": "It's the Most Wonderful Time of the Year",
    "url": "4xjKPpeWbUCgQo6VnJLHZB?si"
  },
  {
    "title": "Jingle Bell Rock",
    "url": "7vQbuQcyTflfCIOu3Uzzya?si"
  },
  {
    "title": "joy.",
    "url": "0vBjd0I8iefycEZ2ex1Zpi?si"
  },
  {
    "title": "Its Beginning to Look a Lot Like Christmas",
    "url": "6Q6o6raf5jWBTmu2Gapcrk?si"
  },
  {
    "title": "Have Yourself a Merry Little Christmas (feat. Frank Sinatra)",
    "url": "703fzperBa4pQsFYAANQZf?si"
  },
  {
    "title": "Carol of the Bells",
    "url": "6HQFPItDJGrzKP6NwhlKsb?si"
  },
  {
    "title": "Home For The Holidays",
    "url": "3C5X3TE5feQ482zwMf1tcy?si"
  },
  {
    "title": "Little Saint Nick - 1991 Remix",
    "url": "5xlS0QkVrSH7ssEbBgBzbM?si"
  },
  {
    "title": "Sleigh Ride",
    "url": "7fUYUcWy853HS8YJn0b3Sr?si"
  },
  {
    "title": "Merry Christmas Everyone",
    "url": "2TE4xW3ImvpltVU0cPcKUn?si"
  },
  {
    "title": "Merry Christmas Baby",
    "url": "4STCTQ1h0VuWfvDyhGOxkv?si"
  },
  {
    "title": "Dominick the Donkey (The Italian Christmas Donkey)",
    "url": "7kWD5fzU9Pkux4TQ5V5F3S?si"
  },
  {
    "title": "I Want a Hippopotamus for Christmas (Hippo the Hero)",
    "url": "5P8Xvy5tzhmfyfA6GplQ8h?si"
  },
  {
    "title": "The Christmas Song",
    "url": "25Cw3fsPRLPFhPHvUQQ2Kf?si"
  },
  {
    "title": "Have Yourself A Merry Little Christmas - Remastered 1999",
    "url": "2FPfeYlrbSBR8PwCU0zaqq?si"
  },
  {
    "title": "Sleigh Ride",
    "url": "5ASM6Qjiav2xPe7gRkQMsQ?si"
  },
  {
    "title": "Christmas Time Is Here - Vocal",
    "url": "06Pfxmp9TtC2H00apclouT?si"
  },
  {
    "title": "Christmas (Baby Please Come Home)",
    "url": "47ohYW8e7dxCYn9qbUMBCI?si"
  },
  {
    "title": "Wonderful Christmastime - Edited Version / Remastered 2011",
    "url": "1SV1fxF65n9NhRHp3KlBuu?si"
  },
  {
    "title": "The First Noel - Remastered 1999",
    "url": "6keKIzkXWdbwJWMBJQUwYl?si"
  },
  {
    "title": "When Christmas Comes to Town",
    "url": "2dz0u8FY3EYQqRsiW7qR4v?si"
  },
  {
    "title": "Silver Bells",
    "url": "4QX5pZQpQTgVlkqfUTDim0?si"
  },
  {
    "title": "A Nonsense Christmas",
    "url": "7yogx3TwxGwSxO2QITsT2q?si"
  },
  {
    "title": "Sleigh Ride",
    "url": "4ukUoXLuFzMixyZyabSGc4?si"
  },
  {
    "title": "Jingle Bell Rock",
    "url": "3hBXvHLlTHvnbwrPbeoyAj?si"
  },
  {
    "title": "A Holly Jolly Christmas",
    "url": "77khP2fIVhSW23NwxrRluh?si"
  },
  {
    "title": "Santa Baby (with Henri René & His Orchestra)",
    "url": "1foCxQtxBweJtZmdxhEHVO?si"
  },
  {
    "title": "Let It Snow! Let It Snow! Let It Snow! (with The B. Swanson Quartet)",
    "url": "0SUKNXEqZnRw7g0NO139FM?si"
  },
  {
    "title": "I Saw Mommy Kissing Santa Claus",
    "url": "15sxLiiChE5dCW3Y756oas?si"
  },
  {
    "title": "White Christmas - 1947 Version",
    "url": "3XsaSIPWvM61RIFfeb0BBR?si"
  },
  {
    "title": "Someday At Christmas",
    "url": "0OdTRhhGt8aq4UXh67CKQg?si"
  },
  {
    "title": "Believe",
    "url": "2vJAjPkVMPKkR3xd2wacZa?si"
  },
  {
    "title": "Hot Chocolate",
    "url": "0xG51SjOyHb0JOVcfiOEQw?si"
  },
  {
    "title": "Caroling, Caroling",
    "url": "11Z7sdkpC5IaaydoIvDn74?si"
  },
  {
    "title": "The Christmas Waltz - Remastered 1999",
    "url": "6G7QhTqDsP5vIdLQTYXXOU?si"
  },
  {
    "title": "Run Rudolph Run",
    "url": "2pnPe4pJtq7689i5ydzvJJ?si"
  },
  {
    "title": "(There's No Place Like) Home for the Holidays - 1954 Version",
    "url": "5mKxNjNnRFpO9Muzw3Ug0u?si"
  },
  {
    "title": "Sleigh Ride",
    "url": "5ymVfeMK8cDew5vzntTuc7?si"
  },
  {
    "title": "A Holly Jolly Christmas - Single Version",
    "url": "33BcB8XVwJU4qB7bDSkVya?si"
  },
  {
    "title": "Santa Claus Is Coming To Town",
    "url": "012mGdSYIBEmERuScm2iOl?si"
  },
  {
    "title": "Happy Xmas (War Is Over)",
    "url": "7juPV71vBY8V28CVWVh9RE?si"
  },
  {
    "title": "What Christmas Means To Me",
    "url": "7xZsOJBebpV9lsX3XUV7x3?si"
  },
  {
    "title": "Someday At Christmas",
    "url": "1yi2B0Ca0Xrob1O4R1uW6Z?si"
  },
  {
    "title": "Grandma Got Run over by a Reindeer",
    "url": "49iHYFjT5yO6WEw6KerX9o?si"
  },
  {
    "title": "Thank God It's Christmas - 2011 Remaster",
    "url": "3AymrUApW5JKKaNrHQhcBG?si"
  },
  {
    "title": "Dance of the Sugar Plum Fairy",
    "url": "4QTFU7BukoyDtyyemGPNCX?si"
  },
  {
    "title": "The First Noël (with Faith Hill)",
    "url": "1sEC3X76vXgpsgnfaXEMwR?si"
  },
  {
    "title": "Mistletoe",
    "url": "7xapw9Oy21WpfEcib2ErSA?si"
  },
  {
    "title": "Twelve Days Of Christmas",
    "url": "0cAhE2iDJApegDnVRx6fCK?si"
  },
  {
    "title": "Deck The Halls",
    "url": "1TH5fhztFZmUGWaCXmZ6ie?si"
  },
  {
    "title": "Christmas (Baby Please Come Home)",
    "url": "46pF1zFimM582ss1PrMy68?si"
  },
  {
    "title": "Christmas Time Is Here",
    "url": "3vC8MNyfVoRsYx0GJWfsgs?si"
  },
  {
    "title": "O Come, O Come Emmanuel",
    "url": "0QK0ftnKFr0DSOzB5HCmfJ?si"
  },
  {
    "title": "Christmas in New England",
    "url": "1EC1ZsLtwpCYtnmH5gwFnF?si"
  },
  {
    "title": "December",
    "url": "7zrhy9OhtcO7MdIvbbJiOa?si"
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
