const axios = require("axios");
const cheerio = require("cheerio");

const resevoirToDataTable = {};

async function test() {
    const response = await axios(    'https://cdec.water.ca.gov/reportapp/javareports?name=STORAGEW'    )
    const html = response.data;
    const $ = cheerio.load(html)
    const allRows = $('table.data > tbody:nth-child(1) > tr')

    const numCols = $('table.data > tbody:nth-child(1) > tr:nth-child(2) > th').length
    const startCol = numCols - 6 
    let template = [['Year', 'Water Storage (1000 acre feet)']]
    $('table.data > tbody:nth-child(1) > tr:nth-child(2) > th').each((index, element) => {
        if (index >= startCol && index < numCols)
            template.push([$(element).text(), ''])
    })
    console.log(template)

    allRows.each((index, element) => {


        if (index > 2 && index < 12) {

            const tds = $(element).find('td')
            const region = $(tds[0]).text()

            let dataTableRow = 1
            value = JSON.parse(JSON.stringify(template))
            for (let col=startCol; col<numCols; col ++) {
                let acreFeet = $(tds[col]).text()
                value[dataTableRow][1] = acreFeet
                dataTableRow += 1
                
            }

            resevoirToDataTable[region] = value
        }
    })
    console.log(resevoirToDataTable)
}
test()
        
        
        
//     })
// })
// .catch(function(error) {
//     console.log(error.message)
// })
    

//     const response = await axios('https://cors-anywhere.herokuapp.com/https://cdec.water.ca.gov/reportapp/javareports?name=STORAGEW');
//     const html = response.data;
//     const $ = cheerio.load(html)
//     const allRows = $('table.data > tbody > tr')

//     allRows.each((index, element) => {
        
//         if (index > 2 && index < 12) {
//             const tds = $(element).find('td')
//             const region = $(tds[0]).text()
//             let value = [
//                 ['Year', 'Water Storage (1000 acre feet)'],
//                 ['2017',  ''],
//                 ['2018',  ''],
//                 ['2019',  ''],
//                 ['2020',  ''],
//                 ['2021',  ''],
//                 ['2022',  '']
//             ]
//             let dataTableRow = 1
            

//             for (let col=6; col < 12; col++) {
//                 value[dataTableRow][1] = $(tds[col]).text()
//                 dataTableRow += 1
//             }
//             resevoirToDataTable[region] = value
//         }
        
        
        
//     })





// simplemaps_statemap.hooks.click_state = function(id){


//     const resevoirToCounties = {
//         'NORTH COAST':["Del Norte","Trinity","Humboldt","Mendocino","Sonoma","Siskiyou"],
//         'SAN FRANCISCO BAY': ["Napa","Santa Clara","San Francisco","Alameda","Contra Costa","San Mateo","Marin","Solano"],
//         'CENTRAL COAST': ["Monterey","San Luis Obispo","Santa Barbara"],
//         'SOUTH COAST': ["Ventura","Los Angeles","Orange"],
//         'SACRAMENTO RIVER': ["Shasta","Modoc","Tehama","Glenn","Butte","Plumas","Yuba","Sutter","Lake","Yolo","Placer","El Dorado","Sierra","Nevada","Colusa"],
//         'SAN JOAQUIN RIVER':  ["Merced","Mariposa","Madera","Tuolumne","Calaveras","Amador","San Joaquin","Stanislaus"],
//         'TULARE LAKE': ["Tulare","Kern","Fresno","Kings"],
//         'NORTH LAHONTAN': ["Lassen","Alpine"],
//         'SOUTH LAHONTAN': ["Mono","Inyo","San Bernardino"]
//     }

//     const county = simplemaps_statemap_mapdata.state_specific[id].name
//     const resevoir = Object.keys(resevoirToCounties).filter(region => resevoirToCounties[region].includes(county))
    
    
//     if (!resevoir) {
//         google.charts.load('current', {'packages':['corechart']});

//         google.charts.setOnLoadCallback(drawChart);
//         function drawChart() {
//             var data = google.visualization.arrayToDataTable([
//                 ['', { role: 'annotation' }],
//                 ['', '']
//             ]);

//             var ac = new google.visualization.ColumnChart(document.getElementById('curve_chart'));
//             ac.draw(data, {
//                 title : 'No Data Yet',

//             });
//         }
//     } else {
//         google.charts.load('current', {'packages':['corechart']});
//         google.charts.setOnLoadCallback(drawChart);
//         function drawChart() {
//             var data = google.visualization.arrayToDataTable(resevoirToDataTable[resevoir]);
//             var options = {
//                 title: 'Water Storage for ' + resevoir,
//                 curveType: 'function',
//                 legend: { position: 'bottom' }
//             };



//             var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//             chart.draw(data, options);
//         }
//     }



//     // north coast
//     if (north_coast.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//         google.charts.load('current', {'packages':['corechart']});
//         google.charts.setOnLoadCallback(drawChart);
//         function drawChart() {
//             var data = google.visualization.arrayToDataTable([
//                     ['Year', 'Water Storage (1000 acre feet)'],
//                     ['2016',  1669	],
//                     ['2017',  2617],
//                     ['2018',  2154],
//                     ['2019',  2763],
//                     ['2020', 2088],
//                     ['2021',1410]
//             ]);
//             var options = {
//                 title: 'Water Storage for North Coast',
//                 curveType: 'function',
//                 legend: { position: 'bottom' }
//             };



//             var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//             chart.draw(data, options);
//         }
//     }
//     // SF bay
//     if (sf_bay.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//         google.charts.load('current', {'packages':['corechart']});
//         google.charts.setOnLoadCallback(drawChart);

//         function drawChart() {
//             var data = google.visualization.arrayToDataTable([
//                     ['Year', 'Water Storage (1000 acre feet)'],
//                     ['2016',  503		],
//                     ['2017',  478],
//                     ['2018',  469],
//                     ['2019',  535],
//                     ['2020', 472],
//                     ['2021',365]
//             ]);
//             var options = {
//                 title: 'Water Storage for San Francisco Bay',
//                 curveType: 'function',
//                 legend: { position: 'bottom' }
//             };
//             var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//             chart.draw(data, options);
//         }
//     }
//     // central coast
//     if (central_coast.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//         google.charts.load('current', {'packages':['corechart']});
//         google.charts.setOnLoadCallback(drawChart);
//         function drawChart() {
//             var data = google.visualization.arrayToDataTable([
//                     ['Year', 'Water Storage (1000 acre feet)'],
//                     ['2016',  185		],
//                     ['2017',  604],
//                     ['2018',  347],
//                     ['2019',  626],
//                     ['2020', 470],
//                     ['2021',272]
//             ]);
//             var options = {
//                 title: 'Water Storage for Central Coast',
//                 curveType: 'function',
//                 legend: { position: 'bottom' }
//             };
//             var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//             chart.draw(data, options);
//         }
//     }
//     // south Coast
//     if (south_coast.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//         google.charts.load('current', {'packages':['corechart']});
//         google.charts.setOnLoadCallback(drawChart);
//         function drawChart() {
//             var data = google.visualization.arrayToDataTable([
//                     ['Year', 'Water Storage (1000 acre feet)'],
//                     ['2016',  1139],
//                     ['2017',  1365],
//                     ['2018',  1225],
//                     ['2019',  1484],
//                     ['2020', 1459],
//                     ['2021',972]
//             ]);
//             var options = {
//                 title: 'Water Storage for South Coast',
//                 curveType: 'function',
//                 legend: { position: 'bottom' }
//             };
//             var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//             chart.draw(data, options);
//         }
//     }
//     //sacra River
//     if (sacramento_river.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//         google.charts.load('current', {'packages':['corechart']});
//         google.charts.setOnLoadCallback(drawChart);
//         function drawChart() {
//             var data = google.visualization.arrayToDataTable([
//                     ['Year', 'Water Storage (1000 acre feet)'],
//                     ['2016',  13026		],
//                     ['2017',  13930],
//                     ['2018',  12586],
//                     ['2019',  15205],
//                     ['2020', 11541],
//                     ['2021',7214]
//             ]);
//             var options = {
//                 title: 'Water Storage for Sacramento River',
//                 curveType: 'function',
//                 legend: { position: 'bottom' }
//             };
//             var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//             chart.draw(data, options);
//         }
//     }
//     // san joaquin River
//     if (san_joaquin_river.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//         google.charts.load('current', {'packages':['corechart']});
//         google.charts.setOnLoadCallback(drawChart);
//         function drawChart() {
//             var data = google.visualization.arrayToDataTable([
//                     ['Year', 'Water Storage (1000 acre feet)'],
//                     ['2016',  6331],
//                     ['2017',  10570],
//                     ['2018',  9280],
//                     ['2019',  10302],
//                     ['2020', 8349],
//                     ['2021',5952]
//             ]);
//             var options = {
//                 title: 'Water Storage for San Joaquin River',
//                 curveType: 'function',
//                 legend: { position: 'bottom' }
//             };
//             var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//             chart.draw(data, options);
//         }
//     }
// //tulare lake
// if (tulare_lake.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//     google.charts.load('current', {'packages':['corechart']});
//     google.charts.setOnLoadCallback(drawChart);
//     function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//                 ['Year', 'Water Storage (1000 acre feet)'],
//                 ['2016',  1145		],
//                 ['2017',  1843],
//                 ['2018',  1296],
//                 ['2019',  1800],
//                 ['2020', 1134],
//                 ['2021',558]
//         ]);
//         var options = {
//             title: 'Water Storage for Tulare Lake',
//             curveType: 'function',
//             legend: { position: 'bottom' }
//         };
//         var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//         chart.draw(data, options);
//     }
// }
// //north lahontan
// if (north_lahontan.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//     google.charts.load('current', {'packages':['corechart']});
//     google.charts.setOnLoadCallback(drawChart);
//     function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//                 ['Year', 'Water Storage (1000 acre feet)'],
//                 ['2016',  292		],
//                 ['2017',  1048],
//                 ['2018',  1036],
//                 ['2019',  1038],
//                 ['2020', 794],
//                 ['2021',351]
//         ]);
//         var options = {
//             title: 'Water Storage for North Lahontan',
//             curveType: 'function',
//             legend: { position: 'bottom' }
//         };
//         var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//         chart.draw(data, options);
//     }
// }
// //south Lahontan
// if (south_lahontan.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//     google.charts.load('current', {'packages':['corechart']});
//     google.charts.setOnLoadCallback(drawChart);
//     function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//                 ['Year', 'Water Storage (1000 acre feet)'],
//                 ['2016',  272		],
//                 ['2017',  296],
//                 ['2018',  330],
//                 ['2019',  319],
//                 ['2020', 309],
//                 ['2021',248]
//         ]);
//         var options = {
//             title: 'Water Storage for South Lahontan',
//             curveType: 'function',
//             legend: { position: 'bottom' }
//         };
//         var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//         chart.draw(data, options);
//     }
// }
// if (colorado_river.includes(simplemaps_statemap_mapdata.state_specific[id].name)) {
//     google.charts.load('current', {'packages':['corechart']});

//     google.charts.setOnLoadCallback(drawChart);
//     function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//             ['', { role: 'annotation' }],
//             ['', '']
//         ]);

//         var ac = new google.visualization.ColumnChart(document.getElementById('curve_chart'));
//         ac.draw(data, {
//             title : 'No Data Yet',

//         });
//     }
// }

