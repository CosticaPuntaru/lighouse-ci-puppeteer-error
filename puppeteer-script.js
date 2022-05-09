async function interceptRequests(page) {
    // this is the part that breaks the report

    await page.setRequestInterception(true);

    page.on('request', async (request) => {
        return request.continue();
        // some black voodoo magic to intercept and mock some files
    });
}

module.exports = async (browser) => {
    const page = await browser.newPage();
    await page.setCacheEnabled(true);
    await interceptRequests(page);
    // do some login magic

    browser.on('targetcreated', async (target) => {
        if (target.type() !== 'page') return;
        const newPage = await target.page();
        await interceptRequests(newPage);
    });
};
