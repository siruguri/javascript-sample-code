import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// all the properties that the jsdom defaultView object contains, such as navigator, and hoist them on to the Node.js global
Object.keys(window).forEach((key) => {
    if (!(key in global)) {
	global[key] = window[key];
    }
});

chai.use(chaiImmutable);

