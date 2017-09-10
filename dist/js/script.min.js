// Carousel Slider Settings
function relatedProductsSlider() {

    $('.customer-related-products').slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        // dots: false,
        arrows: true,
        verticalSwiping: true,
        speed: 500,
        adaptiveHeight: true,
        infinite: false,
        lazyLoad: 'progressive',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    vertical: false,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    adaptiveHeight:true,
                    speed: 500,
                    fade:true,
                }
            }
        ]
    });

}


$(document).ready(function () {

    // Call JSON Data
    var carouselData = [];

    $.getJSON('https://gist.githubusercontent.com/roblos12/151417b9d5bcd444a2351b6d58db3fdc/raw/acc7ed077a9eb0cba0651bf9759d7b58cacc83c3/data.json', function (data) {


        $.each(data.carouselData, function (i, f) {
            var carouselItem = "<div class='carousel-item'><div class='panel panel-default'><div class='panel-heading '><h3 class='panel-title '><a href='" + f.url + "'>" + f.name + "</a></h3></div><div class='panel-body'><div class='row'><div class='col-xs-12 col-sm-6'><a href='" + f.url + "'><img data-lazy='" + f.productImageUrl + "' class='img-responsive center-block' alt='" + f.productImageAltText + "' title='"+ f.name +"'></a><span class='salesUnit'>Price Per " + f.salesUnit + "</span></div><div class='col-xs-12 col-sm-6'><span>Stock: 0</span><h4 class='price'>" + f.price.currency + ' ' + f.price.formattedValue + "</h4><a class='btn btn-primary btn-block' href='" + f.url + "'>Buy Now</a></div></div></div></div></div>'"



            $(carouselItem).appendTo(".customer-related-products");
        });

        // Initilize Carousel

        relatedProductsSlider();

    });


});