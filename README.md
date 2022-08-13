# [cal-farmtool.us](http://cal-farmtool.us)

## Description
This project is aimed to assist California farmers enduring drought to make easier decisions. The API scrapes the latest resevoir data from the CDEC and returns it in a format ready for Google Charts viewing. The website calls the API, displays the data and shows trends depending on your location. Cal-farmtool also uses [this](https://www.mdpi.com/2072-4292/11/15/1782) paper to predict yearly water consumption for CA's top 10 crops. 

## Usage
Click your respective county on the interactive map to view local water data. To predict crop water usage, submit the available land amount (in acres) in the form to compare water usage, water costs, and crop values for different crops. The API uses one free Heroku dyno, so your first selection on the map may take a while.

## Sources
Resevoir Data - [https://cdec.water.ca.gov/reportapp/javareports?name=STORAGEW](https://cdec.water.ca.gov/reportapp/javareports?name=STORAGEW)  
Evapotranspiration Paper - [https://www.mdpi.com/2072-4292/11/15/1782](https://www.mdpi.com/2072-4292/11/15/1782)

