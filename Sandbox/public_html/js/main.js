/*
 * You Dont Know JavaScript sandbox
 */
(function iffy() {
    
    // console.log('DOM ready');

    /*
    function identify() {
            return this.name.toUpperCase();
    }

    function speak() {
            var greeting = "Hello, I'm " + identify.call( this );
            console.log( greeting );
    }

    var me = {
            name: "Kyle"
    };

    var you = {
            name: "Reader"
    };

    console.log( identify.call( me ) ); // KYLE
    console.log( identify.call( you ) ); // READER

    speak.call( me ); // Hello, I'm KYLE
    speak.call( you ); // Hello, I'm READER
    */
   
   /*
   var a = 'xxx';
   
   function foo( param ) {
       console.log(this);
       console.log(param);
   }
   foo.call(this, a);
   */
   
})();

/*
  
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    
    // debugger;
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`  
*/

/*
function foo() {
    //debugger;    
    console.log( this );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo();

// obj.foo.call(this);
*/

function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"
