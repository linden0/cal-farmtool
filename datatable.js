document.getElementById('crop_display').style.display = 'None'

function populateTable() {

    const cropAmount = document.getElementById('land-amount').value;

    // validate user input
    if (!cropAmount) {
        alert('You must enter land amount.');
        return;
    }
    else if (isNaN(cropAmount)) {
        alert('Land amount must be a number');
        return;
    }

    const table = document.getElementById('crop_display');

    table.style.display = 'block';


    const [numRows, numCols] = [10, 3]
    const dollarCostPerAcreFeet = 70
    const cropNames = ['almonds', 'grapes', 'alfalfa', 'rice', 'walnuts', 'winter_wheat', 'cotton', 'pistachios', 'corn', 'oranges']
    const cropToWaterConsumptionRate = {
        'almonds': 2.8839, 'grapes': 1.622, 'alfalfa': 2.299, 'rice': 3.232, 'walnuts': 2.652, 'winter_wheat': 0.981, 'cotton': 2.203, 'pistachios': 1.562, 'corn': 1.8926, 'oranges': 1.9285
    }
    const cropToDollarValue = {
        'almonds': 4.5567, 'grapes': 5.3067, 'alfalfa': 1.3608, 'rice': 1.471, 'walnuts': 2.525, 'winter_wheat': 0.461, 'cotton': 0.283, 'pistachios': 7.7275, 'corn': 0.8415, 'oranges': 5.737

    }
    
    cropNames.forEach((crop, i) => {
        let row = i + 1
        console.log(cropAmount, cropToWaterConsumptionRate[crop])
        let waterRequired = Math.round(parseInt(cropAmount)*cropToWaterConsumptionRate[crop])
        let waterCost = waterRequired*dollarCostPerAcreFeet
        let cropValue = Math.round(parseInt(cropAmount)*cropToDollarValue[crop])
        table.rows[row].cells[1].innerHTML = waterRequired
        table.rows[row].cells[2].innerHTML = waterCost
        table.rows[row].cells[3].innerHTML = cropValue
        return
    })



}