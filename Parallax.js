// parallax file
// startup
// VARIABLES |======================================================



const p0 = document.getElementsByClassName('pl0');
const p1 = document.getElementsByClassName('pl1');
const p2 = document.getElementsByClassName('pl2');
const p3 = document.getElementsByClassName('pl3');
const p4 = document.getElementsByClassName('pl4');


// EVENTS |=================================================
window.addEventListener("mousemove", (e) => {
    console.log('you');
    changePos(e.clientX, e.clientY);
});

//window.onresize = reportWindowSize;
//function reportWindowSize() {
//    console.log('changed size to:' +window.innerWidth+',' + window.innerHeight );
//}

// FUNCTIONS |=====================================================
function changePos(x, y) {
    console.log('translate(' + x + 'px, ' + y + 'px)');
    changeList(p0, 1, x, y);
    changeList(p1, 2, x, y);
    changeList(p2, 3, x, y);
    changeList(p3, 4, x, y);
    changeList(p4, 5, x, y);
}

function changeList(loe, pl, x, y) {
    for (i = 0; i < loe.length; i++) {

        loe[i].style.transform = 'translate(-50%, -50%) translate(' + calcPosX(pl, x) + 'px, ' + calcPosY(pl, y) + 'px)';
    }
}

function calcPosX(pl, x) {
    x = (x - window.innerWidth / 2);
    
    return x/pl;
}
function calcPosY(pl, y) {
    y = (y - window.innerHeight / 2);
    
    return y/pl;
}





//var win = window,
//    doc = document,
//    docElem = doc.documentElement,
//    body = doc.getElementsByTagName('body')[0],
//    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
//    y = win.innerHeight || docElem.clientHeight || body.clientHeight;
//alert(x + ' × ' + y);