'use strict';

// const e = React.createElement;
const crops = ['Almonds', 'Grapes', 'Alfalfa', 'Rice', 'Walnuts', 'Winter Wheat', 'Cotton', 'Pistachios', 'Corn', 'Oranges'];

class Table extends React.Component {

  render() {
	return /*#__PURE__*/React.createElement("table", {
        id: "crop_display",
        class: "crop-table"
      }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Crop"), /*#__PURE__*/React.createElement("th", null, "Water Required (acre-feet)"), /*#__PURE__*/React.createElement("th", null, "Cost of Water ($)"), /*#__PURE__*/React.createElement("th", null, "Estimated Value In Thousands ($)")), crops.map(crop => {
        return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, crop), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null));
      }));
  }
  

}
ReactDOM.render(e(Table), document.getElementById('table-wrapper'));