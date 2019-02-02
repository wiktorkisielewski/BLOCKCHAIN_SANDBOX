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
        var stamp = Math.random()
        return stamp;
    }
}

class chain{
    constructor(){
        this.chain = [this.begin_chain()];
    }
    begin_chain() {
        return new block(0, "01.02.2019", "FIRST BLOCK", "");
    }
    last_block() {
        return this.chain[(this.chain.length) - 1];
    }
    create_block(new_block) {
        new_block.prevblock_stamp = this.last_block().stamp;
        new_block.stamp = new_block.stamp_it();

        this.chain.push(new_block);
    }
}

let test_chain = new chain();
test_chain.create_block(new block(1, "02.02.2019", "random_data"));
test_chain.create_block(new block(2, "02.02.2019", "random_data"));
test_chain.create_block(new block(3, "02.02.2019", "random_data"));

inspect_chain = (JSON.stringify(test_chain));

console.log(test_chain);