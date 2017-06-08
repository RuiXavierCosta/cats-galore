const api = 'http://thecatapi.com/api/';
const image_url = 'images/get?format=src&type=png&size=small&results_per_page=';

$(document).ready(function () {

    //=====================//
    //== INFINITE SCROLL ==//
    //=====================//
    var i = 4;
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function () {
        // End of the document reached?
        setTimeout(() => {
            if ($(document).height() - win.height() == win.scrollTop()) {
                const newImg = document.createElement('img');
                newImg.setAttribute('src', api + image_url + i + '/');
                newImg.classList.add('single-image');

                const imgBoard = document.createElement('div');
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