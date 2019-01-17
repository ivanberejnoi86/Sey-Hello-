pragma solidity ^0.4.24;

contract MyString {

	string public myString = "Hello Ivan";

	function set( string memory x) public  {

		myString = x;
	}
}