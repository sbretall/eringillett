// homepage random image preview
var imgCount = 6;
var dir = 'images/index/';
var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
var images = new Array
        images[1] = "gallery1",
        images[2] = "gallery2",
        images[3] = "gallery3",
        images[4] = "gallery4",
        images[5] = "gallery5",
        images[6] = "gallery6",
        document.getElementById(images[randomCount]).style.display = "block";
var timer = setInterval(() => {
    if (images[randomCount] < images[6]){
        document.getElementById(images[randomCount]).style.display = "none";
        images[randomCount  += 1]
    } else {
        document.getElementById(images[randomCount]).style.display = "none";
        randomCount = 1
    }
    document.getElementById(images[randomCount]).style.display = "block";
}, 5000);
