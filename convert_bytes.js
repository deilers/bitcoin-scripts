const block = require('./blockchaininfo.json');
const bytes = require('bytes');

let { 
    size_on_disk,
    prune_target_size
} = block;


let readableDiskSize = bytes(size_on_disk);
let readableTargetSize = bytes(prune_target_size);

console.log(`Size on disk: ${readableDiskSize}`);
console.log(`Prune Target Size: ${readableTargetSize}`);