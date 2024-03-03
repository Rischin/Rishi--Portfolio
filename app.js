let year = document.getElementById("year");
let date = document.getElementById("date")
let current = new Date();
setInterval(() => {
    year.innerHTML = "@" + current.getFullYear() + " " + "RishiKesava 💖";
    date.innerHTML = current.getDate() + "/" + (current.getMonth() + 1) + "/" + current.getFullYear();
}, 1000);

$(function () {
    $('.toggle').on('click', function () {
        if ($('.menu').hasClass('active')) {
            $('.menu').removeClass('active');
            $(this).find('a').html("<ion-icon name='menu-outline'></ion-icon>");
        } else {
            $('.menu').addClass('active');
            $(this).find('a').html("<ion-icon name='close-outline'></ion-icon>");
        }
    })
})