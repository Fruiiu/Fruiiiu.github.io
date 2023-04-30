// JavaScript source code


function switchChar(i) {
    console.log("switch char" + i);
    switch (i) {
        case "0":
            console.log('set 0');
            setChar("character/Sketch.png", "character sketch");
            break;
        case "1":
            console.log('set 0');
            setChar("character/Lineart.png", "character lineart");
            break;
        case "2":
            console.log('set 0');
            setChar("character/BaseColor.png", "colored character");
            break;
        case "3":
            console.log('set 0');
            setChar("character/Shaded.png", "shaded character");
            break;
        case "4":
            console.log('set 0');
            setChar("character/PaintedBackground.png", "shaded character with background");
    }
    

}

//helpers
function setChar(src, alt) {
    var img = document.getElementById('char');
    img.src = src;
    img.alt = alt;
}

function setBG(src, alt) {
    var img = document.getElementById('bg');
    img.src = src;
    img.alt = alt;
}

function setMask(src, alt) {
    var img = document.getElementById('size-mask');
    img.src = src;
    img.alt = alt;
}