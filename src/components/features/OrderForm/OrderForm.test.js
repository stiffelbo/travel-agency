import React from 'react';
import {shallow} from 'enzyme';
import OrderForm from './OrderForm';

const mockProps = {
  tripCost: 'cost',
  setOrderOption: jest.fn(),
  sendOrder: jest.fn(),
  options: {'car-rental':'','accommodation':'hotel','features':[],'adults':1,'children':0,'name':'name','contact':'contact@info.pl','start-date':''},
  tripName: 'tripname',
  tripId: 'tripID',
};

const mockPropsFail = {
  tripCost: 'cost',
  setOrderOption: jest.fn(),
  sendOrder: jest.fn(),
  options: {'car-rental':'','accommodation':'hotel','features':[],'adults':1,'children':0,'name':'','contact':'','start-date':''},
  tripName: 'tripname',
  tripId: 'tripID',
};


describe('Component OrderForm', () => {
  
  it('should render',()=>{
    const component = shallow(<OrderForm {...mockProps} />);
    expect(component).toBeTruthy();        
  });
  it('sould err on empty props',()=>{
    const component = shallow(<OrderForm {...mockPropsFail}/>);
    expect(() => component.find('Button').simulate('click')).toThrow();         
  });
  it('sould activate function with props',()=>{
    const component = shallow(<OrderForm {...mockProps}/>);
    expect(() => component.find('Button').simulate('click')).not.toThrow();
    //expect(true).toBeTruthy();      
  });
});

