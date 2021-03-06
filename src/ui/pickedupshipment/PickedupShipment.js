import React, { Component } from 'react'

class PickedupShipment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      license_plate: '',
    }
  }

  onLicensePlateChange(event) {
    this.setState({ license_plate: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onPickedupShipmentFormSubmit(this.props.shipping_number, this.state.license_plate)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">License Plate</label>
          <input id="license_plate" type="text" value={this.state.license_plate} style={{color: 'black'}}  onChange={this.onLicensePlateChange.bind(this)} placeholder="License Plate" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Pickedup Shipment</button>
        </fieldset>
      </form>
    )
  }
}

export default PickedupShipment
