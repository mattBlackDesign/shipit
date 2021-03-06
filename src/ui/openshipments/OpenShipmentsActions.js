import ShippingContract from '../../../build/contracts/Shipping.json'
// import { loginUser } from '../loginbutton/LoginButtonActions'
import store from '../../store'

const contract = require('truffle-contract')

export function getShipments() {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const shipping = contract(ShippingContract)
      shipping.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var shippingInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        shipping.deployed().then(function(instance) {
          shippingInstance = instance
          
          shippingInstance.createShipment("0xd10f8ac8c92d4c8596ad6f42410f0fbff312cb7b", "waterloo", "toronto", {from: coinbase})
          .then(function(result) {
            console.log('createshipping')
            console.log(result);
            shippingInstance.getShipment.call(0)
            .then(function(result2) {
              // If no error, login user.
              console.log('getshipmentcount')
              console.log(result2)
              debugger
              return result2;
              // return dispatch(loginUser())
            })
          })
          // Attempt to sign up user.
          .catch(function(result) {
            // If error...
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
