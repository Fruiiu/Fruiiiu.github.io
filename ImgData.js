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
    //image objects
    {
        //google access
        id: "imgs/Example.png",

        //portfolio and gallery settings
        descrip: "This is an example image, it does not atually exist and the alt should be shown",
        portfolio: false,

        //commision settings
        numChar: 0,
        finish: 0,
        size: 0
        //maybe add another one for commsion decription?
    }
];


//image sets, will be used when organising things in portfolio
const imgSets = [
    [] //descrip of set ...
];

console.log(allImgs);


/* =========================| Funtions |========================= */

//function for creating google docs path
function getGooglePath(id) {
    //id rrefers to the long string after the google share thing
    return "https://drive.google.com/uc?id=" + id;
}
//console.log(getGooglePath("188QjvW06eDdlZjhWN3du4Njqg6FshEq-"));

//function for creating modal layout

//function for creating gallery inside layout