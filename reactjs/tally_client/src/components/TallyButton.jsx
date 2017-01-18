import React from 'react';
export default React.createClass({
	getInitialState: function() {
		return {is_red: false};
	}, 

	makeRed: function () {
		this.setState({is_red: true});
	},

	makeClass: function() {
		var str = 'carname-button';
		if (this.state.is_red === true) {
			str += ' is-red';
		}
		return str;
	},

	render: function() {
		return <button className={this.makeClass()}
			onClick={ () => this.makeRed()}>
			{this.props.button_name}
		</button>;
	}
});