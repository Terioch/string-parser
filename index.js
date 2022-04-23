function insertDataIntoTextPlaceholders(text, data) {
	const textChars = text.split("");
	let newText = "";

	for (let i = 0; i < textChars.length; ++i) {
		if (isStartOfPlaceholder(i, textChars)) {
			let placeholderEndIdx = getEndOfPlaceholder(i, textChars);
			// Get object value for placeholder keys and append to new text
			const placeholderKeys = text
				.substring(i + 3, placeholderEndIdx - 2)
				.split(".");
			const dataValue = getDataValueForPlaceholderKeys(placeholderKeys, data);
			newText += dataValue;
			i = placeholderEndIdx;
		} else {
			newText += textChars[i];
		}
	}
	return newText;
}

function isStartOfPlaceholder(idx, textChars) {
	return textChars[idx] === "{" && textChars[idx + 1] === "{";
}

function getEndOfPlaceholder(start, textChars) {
	let end = start + 2;
	while (textChars[end] !== "}") end++;
	end++;
	return end;
}

function getDataValueForPlaceholderKeys(placeholderKeys, data) {
	let dataValue = data;
	placeholderKeys.map((key) => (dataValue = dataValue[key]));
	return dataValue || "<nothing>";
}

module.exports = {
	insertDataIntoTextPlaceholders,
	isStartOfPlaceholder,
	getEndOfPlaceholder,
	getDataValueForPlaceholderKeys,
};
