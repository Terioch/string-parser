function insertDataIntoTextPlaceholders(text, data) {
	const textChars = text.split("");
	let newText = "";

	for (let i = 0; i < textChars.length; ++i) {
		if (textChars[i] === "{" && textChars[i + 1] === "{") {
			// Find end of placeholder
			let placeholderEnd = i + 2;
			while (textChars[placeholderEnd] !== "}") placeholderEnd++;
			placeholderEnd++;

			const placeholderKeys = text
				.substring(i + 3, placeholderEnd - 2)
				.split(".");
			const dataValue =
				data[placeholderKeys[0]][placeholderKeys[1]] || "<nothing>";
			console.log(dataValue);
			newText += dataValue;
			i = placeholderEnd; // Set current position to end of placeholder
		} else {
			newText += textChars[i];
		}
	}
	return newText;
}

module.exports = {
	insertDataIntoTextPlaceholders,
};

// console.log(
// 	insertDataIntoTextPlaceholders(
// 		"This is a string with {{ ab49fd20.key_1 }}, including {{ 9822df87.another_key }} and also {{ ab49fd20.key_2 }}.",
// 		{
// 			ab49fd20: {
// 				key_1: "some data",
// 			},
// 			"9822df87": {
// 				another_key: "big data",
// 				yet_another_key: "small data",
// 			},
// 		}
// 	)
// );
