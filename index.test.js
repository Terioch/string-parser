const {
	insertDataIntoTextPlaceholders,
	isStartOfPlaceholder,
	getEndOfPlaceholder,
	getDataValueForPlaceholderKeys,
} = require("./index");

describe("String Parser methods", () => {
	const data = {
		ab49fd20: {
			key_1: "some data",
		},
		"9822df87": {
			another_key: {
				another_nested_key: "big data",
			},
			yet_another_key: "small data",
		},
	};
	const text =
		"This is a string with {{ ab49fd20.key_1 }}, including {{ 9822df87.another_key.another_nested_key }} and also {{ ab49fd20.key_2 }} as well as {}.";

	it("should correctly insert object data into text placeholders", () => {
		expect(insertDataIntoTextPlaceholders(text, data)).toBe(
			"This is a string with some data, including big data and also <nothing> as well as {}."
		);
	});

	it("should get correct value from data object based on the provided keys", () => {
		expect(
			getDataValueForPlaceholderKeys(
				["9822df87", "another_key", "another_nested_key"],
				data
			)
		).toBe("big data");
	});

	it("should output the index of the end of the current placeholder", () => {
		expect(getEndOfPlaceholder(22, text.split(""))).toBe(41);
	});

	it("should validate if the current character signifies the beginning of a placeholder", () => {
		expect(isStartOfPlaceholder(22, text)).toBe(true);
		expect(isStartOfPlaceholder(41, text)).toBe(false);
		expect(isStartOfPlaceholder(text.length - 2, text)).toBe(false);
	});
});
