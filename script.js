(function () {

create_button = document.getElementById('create_icon');
block_creator = document.getElementById('block_creator');

flag = 0;
create_button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (flag == 0) {
        block_creator.style.transition = 400 + 'ms';
        block_creator.style.left = -4 + 'px';
        flag += 1;
    } else {
        block_creator.style.transition = 400 + 'ms';
        block_creator.style.left = -200 + 'px';
        flag -= 1;
    }
}, false);

}());