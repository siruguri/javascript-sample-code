import React from 'react';
import CarList from './CarList';
import Counterer from './Counterer';


export default React.createClass({
  getCarList: function() {
  	return this.props.counts || []
  },

  isDisabled: function() {
  	return this.props.has_clicked == true;
  },

  render: function() {
    return <div className="main-app">
		<CarList ref="carlist" counts={this.props.counts} />
        <Counterer {...this.props} />
    </div>;
  }
}); 
