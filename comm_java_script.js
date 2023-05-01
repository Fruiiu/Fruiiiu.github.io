// JavaScript source code

//variables needed
var slider = document.getElementById("range1");

var size_mask = document.getElementById("size-mask");

var num_elements = document.getElementById("num-elements");

const additionals = [];
for (i =1; i < 10; i++) {
    additionals.push(document.getElementById("add" + i));
}

//onload
window.onload = function () {
    console.log("onload called");

    switchChar(slider.value);
    setMask(getMaskPath(i));

    styleAllMasks(slider.value);

};

//on inputs
slider.oninput = function () {
    onExampleChange();
    //console.log(slider.value);
    switchChar(slider.value);

    styleAllMasks(slider.value);
}

function onSizeChange(i) {
    onExampleChange();
    setMask(getMaskPath(i));
}

function onElementChange(i) {
    onExampleChange();
    //helper for changing the additional elements number, reapplying mask
    displayAE(i);
    styleAllMasks(slider.value);
}

//every input of example change
function onExampleChange() {
    
}

//other functions

function switchChar(a) {
    i = Number(a);
    //console.log("switch char" + i);
    setChar(getCharPath(i));
    setBG(getBGPath(i));


}

//helpers
function setChar(str) {
    var img = document.getElementById('char');
    img.src = str;
    img.alt = str;
}

function setBG(str) {
    var img = document.getElementById('bg');
    img.src = str;
    img.alt = str;
}

function setMask(str) {
    var img = document.getElementById('size-mask');
    img.src = str;
    img.alt = str;
}

function getBGPath(i) {

    if (i == 4) {
        //console.log("no bg:" + i);
        return "";
    }
    else {
        //console.log("normalBg:" + i);
        return "background/SimpleBg.png";
    }
}

function getCharPath(i) {
    switch (i) {
        case 0:
            //console.log('get 0');
            return "character/Sketch.png";
            break;
        case 1:
            //console.log('get 1');
            return "character/Lineart.png";
            break;
        case 2:
            //console.log('get 2');
            return "character/BaseColor.png";
            break;
        case 3:
            //console.log('get 3');
            return "character/Shaded.png";
            break;
        case 4:
            //console.log('get 4');
            return "character/PaintedBackground.png";
            break;
    }
}

function getMaskPath(i) {
    //console.log("get mask path for " + i);
    switch (i) {
        case 3:
            return "";
        case 2:
            return "size_mask/MaskBody.png";
        case 1:
            return "size_mask/MaskBust.png";
    }
}

//function for addition mask
function styleAllMasks(a) {

    i = Number(a);
    //i is completeness, another value for additional chars
    /*style =
     * '-webkit-mask-image: url(character/Sketch.png),url(background/SimpleBg.png); 
     * mask-image: url(character/Sketch.png),url(background/SimpleBg.png); '
    */

    //creating the list of urls
    urls = toURL(getCharPath(i));

    if (getBGPath(i) != "") {
        urls += ", " + toURL(getBGPath(i));
    }

    urls += getAdditionalsPaths();

    //putting the urls into css
    newStyle = "-webkit-mask-image:" + urls + "; mask-image:" + urls + ";";

    //console.log("WE GOT:" + newStyle);

    //setting the new css
    size_mask.style.cssText = newStyle;

}

//helper
function toURL(s) {
    return "url(" + s + ")";
}

//calculate estimate price (range?)
function calcPrice(a1, a2, a3) {
    //a1 is finishedness, a2 is size of char, a3 is amount of extra elements added
    //TODO after both are added
}


//functions for setting the additional elements and displaying the number
function displayAE(i) {
    initial = getNumAdditionals();
    //console.log(initial);

    initial += i;

    if (initial > 9) {
        initial = 9;
    }
    else if (initial < 0) {
        initial = 0;
    }

    num_elements.innerHTML = initial;

    changeAEOpacities(initial);
}

function changeAEOpacities(i) {
    //where i is the number of additionals available
    for (j = 1; j < 10; j++) {
        //console.log(additionals[j-1])
        if (j <= i) {
            additionals[j - 1].className = "opaque";
        }
        else {
            additionals[j - 1].className = "seethrough";
        }
    }

}

function getAdditionalsPaths() {
    //where i is the number of additionals 
    path = '';

    for (i = 1; i <= getNumAdditionals(); i++) {
        path += ( ","+ toURL("additionals/" + i + ".png") );
        //additionals\#.png"
    }
    return path;
}

function getNumAdditionals() {
    //get the number of additionals displayed
    return Number(num_elements.innerHTML);

}