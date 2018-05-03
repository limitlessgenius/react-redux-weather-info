

import React, { Component } from 'react'

export default class SearchBar extends Component {
	render() {
		return (
			<form className="input-group">
				<input className="input-group-button" />
				<span>
					<button className="btn btn-secondary" type="submit">Submit</button>
				</span>
			</form>
		)
	}
}

