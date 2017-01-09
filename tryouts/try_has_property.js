function where(collection, source) {
    var arr = collection;
    // What's in a name?

    arr.filter(function(elt, index, array) {
	var has_equiv = false;
	Object.keys(source).forEach(function(key, j, klist) {
	    has_equiv = has_equiv || (elt.hasOwnProperty(key) && elt.key == source.key);
	});

	return has_equiv;
    });

    return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
