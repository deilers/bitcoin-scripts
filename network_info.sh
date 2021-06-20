#! /usr/bin/env bash
set -e

/usr/local/bin/bitcoin-cli getnetworkinfo > ./data/networkinfo.json 
node --no-warnings --experimental-json-modules ./js/get_onion_url.js