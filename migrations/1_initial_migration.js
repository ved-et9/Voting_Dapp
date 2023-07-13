var Migrations = artifacts.require("./election.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

