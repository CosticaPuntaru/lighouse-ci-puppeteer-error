module.exports = {
	ci: {
		collect: {
			puppeteerScript: './puppeteer-script.js',
			numberOfRuns: 1,
			url: ['https://google.com'],
		},
		upload: {
			target: 'filesystem',
			outputDir: './lhci_reports',
			reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
		},
	},
};
