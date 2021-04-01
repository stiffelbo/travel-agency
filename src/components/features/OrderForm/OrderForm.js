import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings.js';
import {formatPrice} from '../../../utils/formatPrice'; 
import {calculateTotal} from '../../../utils/calculateTotal'; 

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  let send = true;
  if(!payload.name){
    //alert('Name need to be filled!');
    send = false;    
  }
  if(!payload.contact){
    //alert('please fill contact data!');
    send = false;
  }
  
  if(send){
    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }else{
    throw new Error('data field validation');
  }  
};



const OrderForm = ({tripCost, setOrderOption, options, tripName, tripId}) => (
  <Row>
    {pricing.map(option => (      
      <Col md={4} key={option.id}>
        <OrderOption key={option.id} {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} required={option.required}>

        </OrderOption>
      </Col>))}  
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
    <Button onClick={() => sendOrder(options={...options, tripName: tripName, tripId: tripId}, tripCost)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
