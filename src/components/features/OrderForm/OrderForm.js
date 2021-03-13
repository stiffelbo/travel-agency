import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, setOrderOption, options}) => (
  <Row>
    {pricing.map(option => (      
      <Col md={4} key={option.id}>
        <OrderOption key={option.id} {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}>

        </OrderOption>
      </Col>))}  
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
