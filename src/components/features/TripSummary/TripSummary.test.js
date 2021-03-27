import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

//props {id, image, name, cost, days, tags}
const id = 'abc';
const image = 'expected image';
const name = 'expected name';
//const intro = 'expected intro';
const cost = 'expected cost';
const days = 30;
const tags = ['t1', 't2', 't3'];

describe('Component TripSummary', () => {
  
  it('Should render expected link',()=>{    
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags} />);
    expect(component.find('Link').prop('to')).toEqual(expectedLink);        
  });
  it('sould render proper src and alt', ()=> {
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags} />);
    expect(component.find('img').prop('src')).toEqual(image);
    expect(component.find('img').prop('alt')).toEqual(name);    
  });
  it('sould render proper name cost days', ()=> {
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags} />);
    expect(component.find('img').prop('alt')).toEqual(name);
    expect(component.find('h3').text()).toEqual(name);    
    expect(component.find('h3').text()).toEqual(name);
    expect(component.find('.details').find('span').at(0).text()).toEqual(days +' days');
    expect(component.find('.details').find('span').at(1).text()).toEqual('from ' + cost);
  });
  it('sould render with empty tags', ()=> {
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags} />);
    expect(component).toBeTruthy();        
  });
  it('sould render proper tags', ()=> {
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags} />);    
    const spans = component.find('.tags').find('span');
    tags.forEach((tag, index) => expect(spans.at(index).text()).toEqual(tag));  
  });
  it('sould not render without required props', ()=> {
    expect(() => shallow(<TripSummary />)).toThrow();        
  }); 
});