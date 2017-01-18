import React from 'react';
import TallyButton from './TallyButton';

export default React.createClass({
	getList: function() {
		return this.props.counts || [];
	},

	render: function() {
		return <div className='car-list'>
					{this.getList().map(car_name => 
						<TallyButton button_name={car_name} key={car_name}/>)
					}
				</div>;
	}

});
