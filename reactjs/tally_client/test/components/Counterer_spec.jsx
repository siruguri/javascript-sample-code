import React from 'react';
import ReactDOM from 'react-dom';

import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';

import Counterer from '../../src/components/Counterer';

describe('Tallying counts', () => {
  it('renders a pair of buttons', () => {
  	const cts = ['Audi', 'Toyota', 'bmw'];
    const component = renderIntoDocument(
      <Counterer counts={cts} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    /* some bare metal shit here... https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList*/
    expect(ReactDOM.findDOMNode(component).querySelectorAll('button')[0].
    	classList.contains('carname-button')).to.equal(true);
    expect(ReactDOM.findDOMNode(component).querySelectorAll('button')[0].
    	classList.contains('is-red')).to.equal(false);

    Simulate.click(buttons[0]);
    expect(ReactDOM.findDOMNode(component).querySelectorAll('button')[0].
    	classList.contains('is-red')).to.equal(true);    

    expect(buttons.length).to.equal(cts.length);
  });
});
