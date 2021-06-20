import network from '../data/networkinfo.json';

network.localaddresses
.every((onionUrl) => {
    console.log(`Node URL: ${onionUrl.address}:${onionUrl.port}`);
});