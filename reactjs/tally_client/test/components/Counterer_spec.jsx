import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
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
    expect(buttons.length).to.equal(cts.length);
  });
});