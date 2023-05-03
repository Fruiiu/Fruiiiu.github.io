// JavaScript source code
/*
 * 
 * this file contains all the image data needed as an array,
 * Objects are referenced, so changng one via reference will change all others
 * 
 * append to the beggining of html (or just before all other scripts that use data)
 * otherwise reference errors will appear
 * 
 * for imae acess: set to public in drive then copy the last bit of jibberish into id attribute
*/

/*=========================| DATA |========================= */


const allImgs = [
    {
        //
        //google access
        id: "1WOtwH_vvM7GcPbivzEhCsnqx10dd6U93",
        index: 0,

        //portfolio and gallery settings
        name: "Snom Animation",
        descrip: "Snom animation from pokemon, first 'image' uploaded to the allImgs list.",
        bg: "none",

        //commision settings
        numChar: 1,
        finish: 2,
        size: 3,
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1gXelnxRhuADzOV4zztb_oZAJQFoiyWL2",
        index: 1,

        //portfolio and gallery settings
        descrip: "Old profile drawing, no lineart and done in ibis paint.",
        bg: "none",

        //commision settings
        numChar: 1,
        finish: 3, //[0, 4]
        size: 1,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    },
    {
        //
        //google access
        id: "1amZfY6i2BgyYfcXuwO4uEZfOTJeTHgon",
        index: 2,

        //portfolio and gallery settings
        name: "___",
        descrip: "___",
        bg: "___",

        //commision settings
        numChar: 0,
        finish: 0, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    }



    //image objects. copy and paste below and add to bottom of list
    /*
     ,
    {
        //
        //google access
        id: "___",
        index: 0,

        //gallery settings
        name: "___",
        descrip: "___",
        bg: "___",

        //commision settings
        numChar: 0,
        finish: 0, //[0, 4]
        size: 0,  //[1,3]
        additionals: function () {
            return this.numChar - 1;
        }
    }
     
     */


];

//image sets, will be displayed in portfolio
const imgSets = [
    {
        tnIndex: 0, //index of thumbnail
        imgsIndex: [0], //indexes of all images included

        //only if more than 1 img contained
        name: "...",
        descrip: "...",
    }

    /*copy and past to bottom, read from b to t
     
         {
        tnIndex: 0, //index of thumbnail
        imgsIndex: [0], //indexes of all images included

        //only if more than 1 img contained
        name: "...",
        descrip: "...",
    }
     
     */ 
];

console.log(allImgs);


/* =========================| Funtions |========================= */

//function for creating google docs path
function getGooglePath(id) {
    //id rrefers to the long string after the google share thing
    return "https://drive.google.com/uc?id=" + id;
}
//console.log(getGooglePath("188QjvW06eDdlZjhWN3du4Njqg6FshEq-"));



//function for creating exanded display layout



//creating img backgorund and container
function getImg(i) {
    //returns the image object for i (index)
    return allImgs[i];
}

function getImgElement(i) {
    //gets the image element using index of 
    var img = getImg(i);

    return '<img class="' + img.bg + '" src="' + getGooglePath(img.id)
        + '" alt="'
        + img.name + '" /> ';
  

}

//function for creating gallery inside layout


//this is what to do, backslashes do not affect it yay
var hey = document.getElementById("hey");
hey.innerHTML = getImgElement(1);

console.log(allImgs[0].additionals());