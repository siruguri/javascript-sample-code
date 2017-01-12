import React from 'react';
export default React.createClass({
	getList: function() {
		return this.props.counts || [];
	},

	render: function() {
		return <div className='car-list'>
					{this.getList().map(car_name => 
						<div className='carname' key={car_name}>{car_name}</div>)}
				</div>;
	}
});
