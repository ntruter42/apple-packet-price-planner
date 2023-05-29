// INPUT ELEMENTS
const boxCost = document.querySelector('#box-cost');
const boxSize = document.querySelector('#box-size');
const packetSize = document.querySelector('#packet-size');
const profitPercentage = document.querySelector('#percentage');
const calculateButton = document.querySelector('#calculate-button');

// OUTPUT ELEMENTS
const packetCount = document.querySelector('#packet-count');
const appleCost = document.querySelector('#apple-cost');
const packetCost = document.querySelector('#packet-cost');
const packetPrice = document.querySelector('#packet-price');

// INITIALIZATION
const planner = ApplePacketPricePlanner();

// DOM FUNCTIONALITY