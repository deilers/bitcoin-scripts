import { bytes } from 'bytes';
import * as block from './blockchaininfo.json';

let diskSize = block.size_on_disk;
let readableSize = bytes(diskSize);

console.log(`Size on disk: ${readableSize}`);