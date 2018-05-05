

import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../actions'

class SearchBar extends Component {

	constructor(props) {
		super(props)

		this.state = {
			term: ''
		}
	}

	onInputChange = (e) => { 
		this.setState({ term: e.target.value }) 
		//WHY ERROR IF I DON'T BIND TO THIS
	}

	onFormSubmit = (e) => {
		e.preventDefault()
		this.props.fetchWeather()
	}

	render() {

		console.log('T', this.props.temperature)

		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
					placeholder="Get 5 day forecast"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-button">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}


const mapStateToProps = (state) => {

	const { temperature } = state

	return { temperature }
}

export default connect(mapStateToProps, actions)(SearchBar)

