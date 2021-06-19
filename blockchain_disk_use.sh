#! /usr/bin/env bash

/usr/local/bin/bitcoin-cli getblockchaininfo > blockchaininfo.json
node convert_bytes.js