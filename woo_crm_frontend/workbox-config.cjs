module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{jsx,png,svg,css,js}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};