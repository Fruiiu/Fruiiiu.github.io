// JavaScript source code
//variables needed
var slider = document.getElementById("range1");
var size_mask = document.getElementById("size-mask");

//onload
window.onload = function () {
    console.log("onload called");

    switchChar(slider.value);

    styleAllMasks(slider.value);

};

//on inputs
slider.oninput = function () {
    //console.log(slider.value);
    switchChar(slider.value);

    styleAllMasks(slider.value);
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

function setBG( str) {
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
        return "background/SimpleBG.png";
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

    //putting the urls into css
    newStyle = "-webkit-mask-image:" + urls + "; mask-image:" + urls + ";";

    console.log("WE GOT:" + newStyle);

    //setting the new css
    size_mask.style.cssText = newStyle;

}

//helper
function toURL(s) {
    return "url(" + s + ")";
}