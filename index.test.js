const { insertDataIntoTextPlaceholders } = require("./index");

describe("String Parser methods", () => {
	const data = {
		ab49fd20: {
			key_1: "some data",
		},
		"9822df87": {
			another_key: "big data",
			yet_another_key: "small data",
		},
	};
	const text =
		"This is a string with {{ ab49fd20.key_1 }}, including {{ 9822df87.another_key }} and also {{ ab49fd20.key_2 }} as well as {}.";

	it("should correctly insert object data into text placeholders", () => {
		expect(insertDataIntoTextPlaceholders(text, data)).toBe(
			"This is a string with some data, including big data and also <nothing> as well as {}."
		);
	});
});
