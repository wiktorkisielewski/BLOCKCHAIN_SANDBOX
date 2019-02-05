(function () {

create_button = document.getElementById('create_icon');
block_creator = document.getElementById('block_creator');

menu_button = document.getElementById('menu_button');
menu = document.getElementById('menu');

newchain_button = document.getElementById('newchain_button');
sidechain_button = document.getElementById('sidechain_button');
merge_button = document.getElementById('merge_button');
block_button = document.getElementById('block_button');
data_button = document.getElementById('data_button');
multiple_button = document.getElementById('multiple_button');

instruction_box = document.getElementById('instruction_box');

menu_flag = 0;
creation_flag = 0;
sidechain_flag = 0;

menu_button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu_flag == 0) {
        menu.style.transition = 400 + 'ms';
        menu.style.right = 0 + 'px';
        menu_flag += 1;
    } else {
        menu.style.right = -500 + 'px';
        menu_flag -= 1;
    }
},false);

create_button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (creation_flag == 0) {
        block_creator.style.transition = 400 + 'ms';
        block_creator.style.left = -4 + 'px';
        creation_flag += 1;
    } else {
        block_creator.style.transition = 400 + 'ms';
        block_creator.style.left = -200 + 'px';
        creation_flag -= 1;
    }
}, false);

sidechain_button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (sidechain_flag == 0) {
        sidechain_flag += 1;
        merge_button.style.opacity = 1;
    } else {
        merge_button.style.opacity = 0.5;
        sidechain_flag -= 1;
    }
}, false);

newchain_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a new chain' + '</br>' + '[existing one will be removed!]';
}, false);
newchain_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);

sidechain_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a side-chain' + '</br>' + '[it is parallel to main one,but the number of blocks and they content can be diffrent]';
}, false);
sidechain_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);

merge_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Connects side-chain back to the main blockchain';
}, false);
merge_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);

block_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a basic block [it will contain index, timestamp and hash]';
}, false);
block_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);

data_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a block with custom data [it is possible to store any data on blockchain]';
}, false);
data_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);

multiple_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates multiple blocks, each containing basic data';
}, false);
multiple_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);

}());