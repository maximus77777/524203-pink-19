const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['source/img/*.{jpg,png}'], {
		destination: 'source/img',
		plugins: [
			imageminWebp({quality: 65})
		]
	});

	console.log('Images optimized');
})();

