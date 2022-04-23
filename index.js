function insertDataIntoTextPlaceholders(text, data) {
	const textChars = text.split("");

	for (let i = 0; i < textChars.length; ++i) {
		if (textChars[i] === "{" && textChars[i + 1] === "{") {
			// Find end of placeholder
			let j = i + 2;
			while (textChars[j] !== "}") j++;
			j++;
			console.log(textChars[j]);

			const placeholder = text.substring(i, j + 1);
			const placeholderKeys = text.substring(i + 3, j - 2).split(".");
			console.log(placeholder);
			console.log(placeholderKeys);
			const value = data[placeholderKeys[0]][placeholderKeys[1]] || "<nothing>";
			console.log(value);
			text = text.replace(placeholder, value);
		}
	}
	return text;
}

console.log(
	insertDataIntoTextPlaceholders(
		"This is a string with {{ ab49fd20.key_1 }}, including {{ 9822df87.another_key }} and also {{ ab49fd20.key_2 }}.",
		{
			ab49fd20: {
				key_1: "some data",
			},
			"9822df87": {
				another_key: "big data",
				yet_another_key: "small data",
			},
		}
	)
);
