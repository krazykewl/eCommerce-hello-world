var KrazyKewlSlotsToken = artifacts.require("./KrazyKewlSlotsToken.sol");
var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(KrazyKewlSlotsToken);
  deployer.deploy(Migrations);
};
