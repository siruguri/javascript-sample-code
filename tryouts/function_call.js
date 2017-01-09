(function (a) {
    console.log(typeof this)
    alert(a);
    }).call(this, 42);
