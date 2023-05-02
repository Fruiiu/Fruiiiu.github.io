// JavaScript source code

//this file contains all the image data needed as an array,
//will test if adding them to another arry will create the same reference

const allImgs = [
    //example img
    {
        src: "imgs/Example.png",
        descrip: "This is an example image, it does not atually exist and the alt should be shown",
        portfolio: false,
        numChar: 0,
        finish: 0,
        size: 0
    },
    {
        src: "imgs/EX2.png",
        descrip: "Only one line of descrip is pain",
        portfolio: true,
        numChar: 3,
        finish: 2,
        size: 10 //this is not valid lol, add a func to make sure its fine?
    },
    {
        src: "imgs/Example.png",
        descrip: "This is an example image, it does not atually exist and the alt should be shown",
        portfolio: false,
        numChar: 4,
        finish: 5,
        size: 3
    },
];
//test if this can be appended into html

const imgSets = [
    [allImgs[0], allImgs[1]], //descrip:...
    [allImgs[1], allImgs[2]],
    [allImgs[2]]
];

console.log(allImgs);
console.log(imgSets[1][0]);
imgSets[1][0].descrip = "Changed ! this is index 1 in all imgs";