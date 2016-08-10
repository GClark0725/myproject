var $button = document.getElementById("button");

var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"];

var $button2 = document.getElementById("button2");

var $button3 = document.getElementById("button3");

var cities = ["url(http://cdn.pcwallart.com/images/miami-skyline-wallpaper-3.jpg)", "url(http://enpundit.s3.amazonaws.com/wp-content/uploads/2013/05/nyc-skyline-earth-2.jpg)", "url(http://cache.marriott.com/propertyimages/c/chiax/phototour/chiax_phototour08.jpg?Log=1)", "url(http://lifecoachpro.co/wp-content/uploads/2013/10/los-angeles.jpg)", "url(http://press.visitphilly.com/uploads/photos/1365_l.jpg)", "url(http://www.placestoseeincolorado.com/wp-content/uploads/downtown-denver-skyline-photo.jpg)", "url(http://images.fineartamerica.com/images/artworkimages/mediumlarge/1/boston-skyline-rick-berk.jpg)", "url(http://vacationadvice101.com/wp-content/uploads/2013/04/Tokyo-Tower-and-Tokyo-Skyline-at-night.jpg)", "url(http://static.panoramio.com/photos/large/46067850.jpg)", "url(https://c2.staticflickr.com/8/7328/9469919915_9e63b88192_b.jpg)", "url(http://www.cbugroup.com/wp-content/uploads/2016/01/other-eiffel-tower-france-sky-city-paris-skyline-reddish-desktop-images.jpg)"]
var city = ["Miami", "New York", "Chicago", "Los Angeles", "Phillidelphia", "Denver", "Boston", "Tokyo", "Beijing", "London", "Paris"]
var citinum = [140, 120, 160, 120, 120]

function change() {
      document.body.style.background = rainbow[Math.floor(9*Math.random())]
};

function change2() {
    var bc = cities[Math.floor(11*Math.random())]
    document.body.style.backgroundImage = bc
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "100%"
};

function revert() {
   document.body.style.backgroundImage = "url(https://www.kcet.org/sites/kl/files/styles/kl_image_hero/public/thumbnails/image/city-walk_202_san-francisco_hero.jpg?itok=7_QwaxqI)";
   document.body.style.backgroundAttachment = "fixed";
};

$button.addEventListener("click", change);
$button2.addEventListener("click", revert);
$button3.addEventListener("click", change2);
