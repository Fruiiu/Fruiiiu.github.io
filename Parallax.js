// parallax file
// startup
// VARIABLES |======================================================


const lop = document.getElementsByClassName('parallax');
var wiggle = screen.availWidth /20;
let wImg = 0;
var scaleDown = 2;
const lol = document.getElementsByClassName('loading');

setUp();
// EVENTS |=================================================
window.onload = function () {

}

function setUp() {

    if (screen.availWidth/4*3 > screen.availHeight) {
        wImg = screen.availWidth + 2 * wiggle;
    }
    else {
        wImg = screen.availHeight + 2 * wiggle;
    }

    for (i = 0; i < lop.length; i++) {
        lop[i].style.width = String(wImg) + "px";
    }

    window.addEventListener("mousemove", (e) =>
        {
            changePos(e.clientX, e.clientY);
        }
    );
}

function showLoading1() {
    for (i = 0; i < lol.length; i++) {
        lol[i].style.display = 'block';
    }

    setTimeout(showLoading2, 1000);
}
function showLoading2() {
    for (i = 0; i < lol.length; i++) {
        lol[i].style.opacity = '1';
    }
}

function hideLoading1() {
    for (i = 0; i < lol.length; i++) {
        lol[i].style.opacity = '0';
    }
    setTimeout(hideLoading2, 1000);
}
function hideLoading2() {
    for (i = 0; i < lol.length; i++) {
        lol[i].style.display = 'none';
    }
}

//window.onresize = reportWindowSize;
//function reportWindowSize() {
//    console.log('changed size to:' +window.innerWidth+',' + window.innerHeight );
//}

// FUNCTIONS |=====================================================
function changePos(x, y) {
    //console.log('translate(' + x + 'px, ' + y + 'px)');
    changeList(x, y);
}

function changeList(x, y) {
    let wWindow = window.innerWidth,
        hWindow = window.innerHeight;

    for (i = 0; i < lop.length; i++) {
        setTransform(lop[i], x, y, wWindow, hWindow, i);
    }
}

function setTransform(element, x, y, wW, hW, i) {
    element.style.transform =
        'translate(-50%, -50%) translate('
        + calcPosX(i, x, wW) + 'px, '
        + calcPosY(i, y, hW) + 'px)';

}

function calcPosX(pi, x, wW) {
    x = (2 * x /wW) - 1;
    let maxShuffle = (wImg - wW) / 2;

    return (-1 * x / lop.length * (pi + 1) * maxShuffle) / scaleDown;
    //
}
function calcPosY(pi, y, hW) {
    y = (2 * y / hW  ) -1;
    let maxShuffle = (wImg/4*3 - hW) / 2;

    return (-1 * y / lop.length * (pi + 1) * maxShuffle) / scaleDown;
    //
}





//var win = window,
//    doc = document,
//    docElem = doc.documentElement,
//    body = doc.getElementsByTagName('body')[0],
//    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
//    y = win.innerHeight || docElem.clientHeight || body.clientHeight;
//alert(x + ' × ' + y);