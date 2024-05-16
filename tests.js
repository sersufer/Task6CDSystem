test("Example", function(assert) {
	// Test Case 1
	assert.propEqual(convertRomanToInteger("III"), {value: 3, message: '', result: true}, "TC-1");

	// Test Case 2
	assert.propEqual(convertIntegerToRoman(999), {value: "CMXCIX", message: '', result: true}, "TC-2");

	// Test Case 3
	assert.propEqual(convertIntegerToRoman(9), {value: "IX", message: '', result: true}, "TC-3");

	// Test Case 4
	assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-4");

	// Test Case 5
	assert.propEqual(convertRomanToInteger("MCMXCIV"), {value: 1994, message: '', result: true}, "TC-5");

	// Test Case 6
	assert.propEqual(convertIntegerToRoman(5000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-6");

	// Test Case 7
	assert.propEqual(convertRomanToInteger("LVIII"), {value: 58, message: '', result: true}, "TC-7");

	// Test Case 8
	assert.propEqual(convertIntegerToRoman(1994), {value: "MCMXCIV", message: '', result: true}, "TC-8");

	// Test Case 9
	assert.propEqual(convertIntegerToRoman(150), {value: "CL", message: '', result: true}, "TC-9");

	// Test Case 10
	assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-10");

	// Test Case 11
	assert.propEqual(convertIntegerToRoman("123"), {value: 'CXXIII', message: '', result: true}, "TC-11");

	// Test Case 13
	assert.propEqual(convertRomanToInteger("IX"), {value: 9, message: '', result: true}, "TC-13");

	// Test Case 14
	assert.propEqual(convertIntegerToRoman(444), {value: "CDXLIV", message: '', result: true}, "TC-14");

	// Test Case 15
	assert.propEqual(convertRomanToInteger("CCCLXIX"), {value: 369, message: '', result: true}, "TC-15");

	// Test Case 16
	assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-16");

	// Test Case 17
	assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-17");

	// Test Case 18
	assert.propEqual(convertRomanToInteger("MMCMXCIX"), {value: 2999, message: '', result: true}, "TC-18");

	// Test Case 19
	assert.propEqual(convertIntegerToRoman(58), {value: "LVIII", message: '', result: true}, "TC-19");

	// Test Case 20
	assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-20");

	// Test Case 21
	assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-21");

	// Test Case 22
	assert.propEqual(convertIntegerToRoman(3998), {value: "MMMCMXCVIII", message: '', result: true}, "TC-22");

	// Test Case 23
	assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-23");
	
	
	// Test Case 12
	//Moved last as it throws an error
	assert.propEqual(convertRomanToInteger(1987), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12");

});
