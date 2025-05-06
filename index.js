const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function createPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({ width: 2480, height: 3508 })
    const content = fs.readFileSync('./assets/cv.html').toString()
    const style = fs.readFileSync('./assets/cv.css').toString();
    await page.setContent(content);
    await page.addStyleTag({
        content: style
    });
    await page.waitForSelector("img")
    await page.pdf({
        path: 'cv-en.pdf',
        format: 'A4',
        printBackground: true
    });


    await browser.close();
}

createPDF();
