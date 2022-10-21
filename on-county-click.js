document.getElementById('chart').style.display = 'none';

const resevoirToCounties = {
    'NORTH COAST':["Del Norte","Trinity","Humboldt","Mendocino","Sonoma","Siskiyou"],
    'SAN FRANCISCO BAY': ["Napa","Santa Clara","San Francisco","Alameda","Contra Costa","San Mateo","Marin","Solano"],
    'CENTRAL COAST': ["Monterey","San Luis Obispo","Santa Barbara"],
    'SOUTH COAST': ["Ventura","Los Angeles","Orange"],
    'SACRAMENTO RIVER': ["Shasta","Modoc","Tehama","Glenn","Butte","Plumas","Yuba","Sutter","Lake","Yolo","Placer","El Dorado","Sierra","Nevada","Colusa"],
    'SAN JOAQUIN RIVER':  ["Merced","Mariposa","Madera","Tuolumne","Calaveras","Amador","San Joaquin","Stanislaus"],
    'TULARE LAKE': ["Tulare","Kern","Fresno","Kings"],
    'NORTH LAHONTAN': ["Lassen","Alpine"],
    'SOUTH LAHONTAN': ["Mono","Inyo","San Bernardino"]
}
let resevoirToDataTable = {}

const apiURI = 'https://cdec-reservoir.herokuapp.com/api'

async function fetchWaterData() {
    data = await $.ajax({type:'GET', url:apiURI})
    resevoirToDataTable = data
}

fetchWaterData()

simplemaps_statemap.hooks.click_state = function(id){
    document.getElementById('chart').style.display = 'block';


    const county = simplemaps_statemap_mapdata.state_specific[id].name
    const resevoir = Object.keys(resevoirToCounties).filter(region => resevoirToCounties[region].includes(county))
    const emptyChart = [['', { role: 'annotation' }], ['', '']]
    const notFoundTitle = 'No Data Yet'
    
    const e = React.createElement;
    class Chart extends React.Component {
    
      render() {
        return e('div', {id:'curve_chart'})
      }
    }
    ReactDOM.render(e(Chart), document.getElementById('chart'));

    //Load datatable and custom title or emptyChart and notFoundTitle based on if county was found in a resevoir
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        height = document.getElementById('react_container').offsetHeight
        var data = google.visualization.arrayToDataTable(resevoir.length > 0 ? resevoirToDataTable[resevoir[0]] : emptyChart);
        var options = {title : resevoir.length > 0 ? `Water Storage for ${resevoir[0]}` : notFoundTitle, curveType:'function', legend:{position:'bottom'}, height:height};
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }
    $(window).resize(function(){
        drawChart();
      });
    
}
