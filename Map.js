'use strict';

const e = React.createElement;

class SimpleMapsComponent extends React.Component {

  render() {
	return e('div', {id:'map'})
  }
  
  componentDidMount(){
	 simplemaps_statemap.load();
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(e(SimpleMapsComponent), domContainer);