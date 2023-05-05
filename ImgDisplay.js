/* =========================| Images |========================= */

//function for creating google docs path
function getGooglePath(id) {
    //id rrefers to the long string after the google share thing
    return "https://drive.google.com/uc?id=" + id;
}

//function for creating exanded display layout

//creating img backgorund and container

function getDiv(i) { //this is needed for lazy loading I think
    return '<div class="test" ' + getDivStyle(getDivAspect(i)) + ' > ' + getImgElement(i) + ' </div>';
}

function getDivStyle(s) {
    //where s is the strings inside the style thing
    return ' style="' + s + '" ';

}

function getDivAspect(i) {
    //where i is the index of the img in allimgs
    //aspect-ratio:1/1;
    return 'aspect-ratio:' + getImg(i).ratio + ';';

}

function getImgElement(i) {
    //gets the image element using index of 
    var img = getImg(i);

    return '<img'
        + getImgID(i)
        + getTitle(i)
        + getClass(img)
        + getSRC(img)
        + getAlt(img)
        + getLazyLoad()
        + ' /> ';


}

function getImg(i) {
    //returns the image object for i (index)
    return allImgs[i];
}

function getClass(img) {
    return ' class = "' + img.bg + '" ';

}

function getSRC(img) {
    return ' src = "' + getGooglePath(img.id) + '" ';
}

function getAlt(img) {
    return ' alt = "' + img.name + '" ';
}

function getLazyLoad() {
    return ' loading = "lazy" ';

}

function getTitle(i) {
    return ' title="' + i + '" '

}

function getImgID(i) { //where i is the image index in allimg
    return ' id = "i' + i + '" ';
}

//function for creating gallery inside layout


//this is what to do, backslashes do not affect it yay


//console.log(allImgs[0].additionals());


//This is for finding image aspect ratios 
function findGCD(a, b) {
    let n = 0;
    let d = 0;

    if (a > b) {
        n = a;
        d = b;
    }
    else {
        n = b;
        d = a;
    }

    if (n == 0 || d == 0) {
        return 0;
    }

    let r = n % d;

    while (r != 0) {
        n = d;
        d = r;
        r = n % d;
    }

    return d;
}

function simplify(a, b) {
    //this does not return backlashes for easy manual pasting
    let gcd = findGCD(a, b);
    a = a / gcd;
    b = b / gcd;
    return " " + a + "_" + b + " ";
}

//modal code, make sure you only have 1 modal
/** example modal html
 
     <div class="modal">
        <div class="close" onclick="closeModal()">
            <p>&times</p>
        </div>

        <div class="expcont">
        <!-- actual content here -->
        </div>

    </div>
 
 
 */


const modals = document.getElementsByClassName("modal");

function closeModal() {
    for (i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}

function openModal() {
    for (i = 0; i < modals.length; i++) {
        modals[i].style.display = 'block';
    }
}

