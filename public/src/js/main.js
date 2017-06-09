var api = 'http://thecatapi.com/api/';
var image_url = 'images/get?format=src&type=jpg&size=med&results_per_page=';
var gif_url = 'images/get?format=src&type=gif&size=med&results_per_page=';

$(document).ready(function () {

    //=====================//
    //== INFINITE SCROLL ==//
    //=====================//
    var i = 4;
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function () {
        // End of the document reached?
        setTimeout(function () {
            if ($(document).height() - win.height() == win.scrollTop()) {
                var newImg = document.createElement('img');
                if (i % 10 === 0) {
                    newImg.setAttribute('src', api + gif_url + i + '/');
                } else {
                    newImg.setAttribute('src', api + image_url + i + '/');
                }
                newImg.classList.add('single-image');

                var imgBoard = document.createElement('div');
                imgBoard.classList.add('image-border');
                imgBoard.append(newImg);

                $('#images').append(imgBoard);
                i++;
                if (i > 1000) {
                    i = 0;
                }
            }
        }, 1);
    });
});