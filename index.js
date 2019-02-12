// homepage random image preview
var imgCount = 6;
var dir = 'images/index/';
var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
var images = new Array
        images[1] = "1.jpg",
        images[2] = "2.jpg",
        images[3] = "3.jpg",
        images[4] = "4.jpg",
        images[5] = "5.jpg",
        images[6] = "6.jpg",
        document.getElementById("GalleryPreview").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
var timer = setInterval(() => {
    if (images[randomCount] < images[6]){
        images[randomCount  += 1]
    } else {
        randomCount = 1
    }
    document.querySelector("#GalleryPreview").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
}, 5000);