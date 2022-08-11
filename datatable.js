function populateTable() {

    const cropAmount = document.getElementById('land_amount').value;

    // validate user input
    if (!crop_amount) {
        alert('You must enter land amount.');
        return;
    }
    else if (isNaN(crop_amount)) {
        alert('Land amount must be a number');
        return;
    }

    const table = document.getElementById('crop_display');

    table.style.display = 'block';


    const [numRows, numCols] = [10, 3]
    const dollarCostPerAcreFeet = 70
    const cropNames = []
    const cropToWaterConsumptionRate = {}
    const cropToDollarValue = {}
    

    for (let row=1; row <= numRows; row ++) {
        for (let col=1; col<=numCols; col++) {
            cropNames.forEach(function(crop) {
                let waterRequired = Math.round(parseInt(cropAmount)/cropToWaterConsumptionRate[crop])
                let waterCost = waterRequired*dollarCostPerAcreFeet
                let cropValue = Math.round(parseInt(cropAmount)*cropToDollarValue[crop])
                table.rows[row].cells[col].innerHTML = waterRequired
                table.rows[row].cells[col].innerHTML = waterCost
                table.rows[row].cells[col].innerHTML = cropValue
            })
        }
    }

    var almond_water = Math.round(parseInt(crop_amount)/2.47*385230/445249*8.107);
    var almond_cost = almond_water*70;
    var almond_value = Math.round(parseInt(crop_amount)*2490*1.83/1000);
    Table.rows[1].cells[1].innerHTML = almond_water.toString();
    Table.rows[1].cells[2].innerHTML = almond_cost.toString();
    Table.rows[1].cells[3].innerHTML = "$"+almond_value.toString();

    var grapes_water = Math.round(parseInt(crop_amount)/2.47*132561/268246*8.107);
    var grapes_cost = grapes_water*70;
    var grapes_value = Math.round(parseInt(crop_amount)*6.65*798/1000);
    Table.rows[2].cells[1].innerHTML = grapes_water.toString();
    Table.rows[2].cells[2].innerHTML = grapes_cost.toString();
    Table.rows[2].cells[3].innerHTML = "$" +grapes_value.toString();


    var alfalfa_water = Math.round(parseInt(crop_amount)/2.47*99308/141768*8.107);
    var alfalfa_cost = alfalfa_water*70;
    var alfalfa_value = Math.round(parseInt(crop_amount)*7.2*189/1000);
    Table.rows[3].cells[1].innerHTML = alfalfa_water.toString();
    Table.rows[3].cells[2].innerHTML = alfalfa_cost.toString();
    Table.rows[3].cells[3].innerHTML = "$" +alfalfa_value.toString();


    var rice_water = Math.round(parseInt(crop_amount)/2.47*197711/200805*8.107);
    var rice_cost = rice_water*70;
    var rice_value = Math.round(parseInt(crop_amount)*8720*18.9/112/1000);
    Table.rows[4].cells[1].innerHTML = rice_water.toString();
    Table.rows[4].cells[2].innerHTML = rice_cost.toString();
    Table.rows[4].cells[3].innerHTML = "$" +rice_value.toString();

    var walnuts_water = Math.round(parseInt(crop_amount)/2.47*130072/161005*8.107);
    var walnuts_cost = walnuts_water*70;
    var walnuts_value = Math.round(parseInt(crop_amount)*2.07*1220/1000);
    Table.rows[5].cells[1].innerHTML = walnuts_water.toString();
    Table.rows[5].cells[2].innerHTML = walnuts_cost.toString();
    Table.rows[5].cells[3].innerHTML = "$" +walnuts_value.toString();

    var ww_water = Math.round(parseInt(crop_amount)/2.47*18601/62256 *8.107);
    var ww_cost = ww_water*70;
    var ww_value = Math.round(parseInt(crop_amount)*75*6.15/1000);
    Table.rows[6].cells[1].innerHTML = ww_water.toString();
    Table.rows[6].cells[2].innerHTML = ww_cost.toString();
    Table.rows[6].cells[3].innerHTML = "$" +ww_value.toString();

    var cotton_water = Math.round(parseInt(crop_amount)/2.47*71994/107219*8.107);
    var cotton_cost = cotton_water*70;
    var cotton_value = Math.round(parseInt(crop_amount)*1645/2000*345/1000);
    Table.rows[7].cells[1].innerHTML = cotton_water.toString();
    Table.rows[7].cells[2].innerHTML = cotton_cost.toString();
    Table.rows[7].cells[3].innerHTML = "$" +cotton_value.toString();

    var pistachios_water =  Math.round(parseInt(crop_amount)/2.47*79774/167678*8.107);
    var pistachios_cost = pistachios_water*70;
    var pistachios_value = Math.round(parseInt(crop_amount)*2810*2.75/1000);
    Table.rows[8].cells[1].innerHTML = pistachios_water.toString();
    Table.rows[8].cells[2].innerHTML = pistachios_cost.toString();
    Table.rows[8].cells[3].innerHTML = "$" +pistachios_value.toString();

    var corn_water =  Math.round(parseInt(crop_amount)/2.47*34039/59031*8.107);
    var corn_cost = corn_water*70;
    var corn_value = Math.round(parseInt(crop_amount)*187*4.5/1000);
    Table.rows[9].cells[1].innerHTML = corn_water.toString();
    Table.rows[9].cells[2].innerHTML = corn_cost.toString();
    Table.rows[9].cells[3].innerHTML = "$" +corn_value.toString();

    var oranges_water =  Math.round(parseInt(crop_amount)/2.47*10940/18619*8.107);
    var oranges_cost = oranges_water*70;
    var oranges_value = Math.round(parseInt(crop_amount)*368*15.59/1000);
    Table.rows[10].cells[1].innerHTML = oranges_water.toString();
    Table.rows[10].cells[2].innerHTML = oranges_cost.toString();
    Table.rows[10].cells[3].innerHTML = "$" +oranges_value.toString();
}