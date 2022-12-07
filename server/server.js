const express = require('express');
const axios = require('axios');
const cheerio = require("cheerio");
const cors = require('cors');

const app = express();

const url = 'https://cdec.water.ca.gov/reportapp/javareports?name=STORAGEW';
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('CDEC Water Resevoir API. This API scrapes the latest California resevoir data found at https://cdec.water.ca.gov/reportapp/javareports?name=STORAGEW, and returns it as an object of 2d arrays, ready to load to Google Charts.');
})

app.get('/api', async (req, res) => {
    const resevoirToDataTable = {};

    const response = await axios('https://cdec.water.ca.gov/reportapp/javareports?name=STORAGEW');
    const html = response.data;
    const $ = cheerio.load(html);

    const allRows = $('table.data > tbody:nth-child(1) > tr');

    const numCols = $('table.data > tbody:nth-child(1) > tr:nth-child(2) > th').length;
    const startCol = numCols - 6;

    const [numRows, startRow] = [12, 3];

    //push year headers (2017, 2018, etc.) to template
    let template = [['Year', 'Water Storage (1000 acre feet)']];
    $('table.data > tbody:nth-child(1) > tr:nth-child(2) > th').each((index, element) => {
        if (index >= startCol && index < numCols)
            template.push([$(element).text(), '']);
    });

    allRows.each((index, element) => {
        if (index >=startRow && index < numRows) {

            const tds = $(element).find('td');
            const region = $(tds[0]).text();

            let dataTableRow = 1;
            value = JSON.parse(JSON.stringify(template)); //deepcopy of template
            //push yearly water data to copy
            for (let col=startCol; col<numCols; col ++) {
                let acreFeet = parseInt($(tds[col]).text().replace(',',''))
                value[dataTableRow][1] = acreFeet
                dataTableRow += 1
            }

            resevoirToDataTable[region] = value
        }
    })
    
    res.json(resevoirToDataTable);
        
})