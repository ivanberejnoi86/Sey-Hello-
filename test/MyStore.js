const MyStringStore = artifacts.require("./MyString.sol");

contract("MyStringStore", accounts => {
  it("should store the string 'Hey Ivan!'", async () => {
    const myStringStore = await MyStringStore.deployed();

    // Set myString to "Hey there!"
    await myStringStore.set("Hey Ivan!", { from: accounts[0] });

    // Get myString from public variable getter
    const storedString = await myStringStore.myString.call();

    assert.equal(storedString, "Hey Ivan!", "The string was not stored");
  });
});