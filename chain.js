class block {
    constructor(
        block_index, block_time, block_data, prevblock_stamp = ""
    ) {
        this.block_index = block_index;
        this.block_time = block_time;
        this.block_data = block_data;
        this.prevblock_stamp = prevblock_stamp;
        this.stamp = "";
    }

    stamp_it() {
        var index = (this.block_index).toString();
        var time = (this.block_time).toString();
        var data = (this.block_data).toString();
        var prev = (this.prevblock_stamp).toString();

        var stamp = ((((index.hash_it()) * time.hash_it()) * data.hash_it()) * prev.hash_it()).toString(16);

        return stamp;
    }
}

class chain{
    constructor(){
        this.chain = [this.begin_chain()];
    }
    begin_chain() {
        return new block(0, Date(), "FIRST BLOCK", "");
    }
    last_block() {
        return this.chain[(this.chain.length) - 1];
    }
    create_block(new_block,input_data) {
        new_block.prevblock_stamp = this.last_block().stamp;
        new_block.block_time = Date();
        new_block.block_index = this.chain.length;
        new_block.block_data = input_data;


        new_block.stamp = new_block.stamp_it();


        this.chain.push(new_block);
    }
}

String.prototype.hash_it = function () {
    hash = 1;
    if (this.length >> 0) {
    for (i = 0; i < this.length; i++) {
        component = this.charCodeAt(i);
        hash = (hash + component)
        }
    }
    return hash;

}

test_chain = new chain;

var input_data = document.getElementById('block_data');

function block_creation(input_data) {
    var input_data = document.getElementById('block_data').value;
    test_chain.create_block(new block,input_data);
};

inspect_chain = (JSON.stringify(test_chain));

console.log(test_chain);

}

