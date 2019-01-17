const MyString = artifacts.require("MyString");

module.exports = function(deployer) {
  deployer.deploy(MyString);
};