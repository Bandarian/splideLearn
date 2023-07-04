function splide() {
let splides = $('.splide');
for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
new Splide(splides[i], {
perPage: 1,
perMove: 1,
gap: '2rem',
type: 'slide',
width: '100%',
drag: true,
snap: true,
arrows: false,
pagination: 'slider',
peed: 1000,
dragAngleThreshold: 40,
}).mount().on('active', function (slide) {
var slideIndex = slide.index + 1;
$('#artTabOne').removeClass('active');
$('#artTabTwo').removeClass('active');
$('#artTabThree').removeClass('active');
$('#vidLearnOne').removeClass('active');
$('#vidLearnTwo').removeClass('active');
$('#vidLearnThree').removeClass('active');
$('#FaqWrapOne').removeClass('active');
$('#FaqWrapTwo').removeClass('active');
$('#FaqWrapThree').removeClass('active');
if (slideIndex === 1) {
hoverOffTabTwo();
hoverOffTabThree();
$('#artTabOne').addClass('active');
$('#vidLearnOne').addClass('active');
$('#FaqWrapOne').addClass('active');
} else if (slideIndex === 2) {
hoverOnTabTwo();
hoverOffTabThree();
$('#artTabTwo').addClass('active');
$('#vidLearnTwo').addClass('active');
$('#FaqWrapTwo').addClass('active');
}else if (slideIndex === 3) {
hoverOffTabTwo();
hoverOnTabThree();
$('#artTabThree').addClass('active');
$('#vidLearnThree').addClass('active');
$('#FaqWrapThree').addClass('active');
}
});
}
}
splide();