test_chain = new chain;

var input_data = document.getElementById('block_data');

function block_creation(input_data) {
    var input_data = document.getElementById('block_data').value;
    test_chain.create_block(new block,input_data);
};

inspect_chain = (JSON.stringify(test_chain));

console.log(test_chain);