const tagWhiteList = ['view'];

function makeTagStart(opts) {
	const { tag, attrs } = opts;

	if (!tagWhiteList.includes(tag)) {
		throw `${tag}组件不支持`;
	}

	const transTag = `ui-${tag}`;
	const propsStr = getPropsStr(attrs);

	if (attrs.length) {
		return `<${transTag} ${propsStr}>`;
	}

	return `<${transTag}>`;
}

function makeTagEnd(tag) {
	return `</ui-${tag}>`;
}

function getPropsStr(attrs) {
	const attrsList = [];

	attrs.forEach((attrInfo) => {
		const { name, value } = attrInfo;

		if (/^bind/.test(name)) {
			attrsList.push({
				name: `v-bind:${name}`,
				value: `'${value}'`
			});
			return;
		}

		attrsList.push({
			name,
			value
		});		
	});

	return linkAttrs(attrsList);
}

function linkAttrs(attrsList) {
	const result = [];

	attrsList.forEach((attrInfo) => {
		const { name, value } = attrInfo;

		result.push(`${name}="${value}"`);
	});

	return result.join(' ');
}

module.exports = {
	makeTagStart,
	makeTagEnd
};