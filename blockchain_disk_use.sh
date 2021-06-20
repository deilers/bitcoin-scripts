#! /usr/bin/env bash
set -e

/usr/local/bin/bitcoin-cli getblockchaininfo > ./data/blockchaininfo.json
node --no-warnings --experimental-json-modules ./js/convert_bytes.js