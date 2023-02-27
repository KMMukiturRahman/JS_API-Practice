// 2) How will you get the output [Advanced - uses 2D matrix
//     concept]
//     a) level-2
//     b) 72.8621

let data =
[
{
"pHeroCourses": {
"course-x": "web development"
}
},
{
"pHeroCourses": {
"course-y": "phitron"
}
},
{
"pHeroCourses": {
"course-z": "acc"
}
},
{
"pHeroCourses": {
"course-xyz": "level-2"
},
"locationField": {
"en-US": {
"lat": 19.28563,
"lon": 72.8691
}
}
}
]
const level2Result = data[3].pHeroCourses["course-xyz"];
console.log(level2Result);
const lonResult = data[3].locationField["en-US"].lon;
console.log(lonResult);

// 3) How will you get the output
// a) abc
// b) xyz
let activities = {
    activity1 : [
    {
    name : "listen on spotify",
    
    song_list: {
    
    song_1 : "abc",
    song_2 : "bcd"
    
    },
    id : 1
    },
    {
    name : "listen music through bot",
    
    song_list: {
    song_1 : "wxy",
    song_2 : "xyz"
    
    },
    id : 2
    }
    ]
    }
    const song1Result = activities.activity1[0].song_list.song_1;
    console.log(song1Result); 
    const song2Result = activities.activity1[1].song_list.song_2;
    console.log(song2Result); 
