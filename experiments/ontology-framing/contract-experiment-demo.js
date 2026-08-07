'use strict';

const { evaluateContractExperiment } = require('./evaluate-contract-experiment');

console.log(JSON.stringify(evaluateContractExperiment(), null, 2));
