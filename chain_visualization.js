counter = 0;

function spawn_block() {
    let block = document.createElement('div');
    let input_data = '';
    test_chain.create_block(block,input_data);
    let prev_hash = block.prevblock_stamp;
    let block_time = block.block_time;
    let block_data = block.block_data;
    let block_hash = block.stamp;
    html = `<div class='block_index' id='block_index` + counter + `'>BLOCK 1</div>
        <div class='prev_hash'>
            <span class='block_part'>PREVIOUS BLOCK HASH:</span><br>`
            + prev_hash +
        `</div>
        <div class='block_time'>
            <span class='block_part'>TIMESTAMP:</span><br>`
             + block_time +
        `</div>
        <div class='block_data'>
            <span class='block_part'>DATA:</span><br>`
            + block_data +
        `</div>
        <div class='block_hash'>
            <span class='block_part'>HASH:</span><br>`
            + block_hash +
        `</div>`;
    block.id = 'block' + counter;
    counter += 1;
    block.classList.add('block');
    block.innerHTML = html;
    document.body.appendChild(block);
}

