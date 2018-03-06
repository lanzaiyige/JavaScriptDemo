// 'use strict';

if (Math.abs(1/3 - (1 - 2/3)) < 0.0000001) {
// if (isNaN(NaN)) {
  // alert('yes');
} else {
  // alert('no');
}

var person = {
  name : 'Bruno Mars',
  age : 20,
  tags : ['objective-c','c#','javascript'],
  'school' : '16中学'
}

var multLineStr = `
line 1
line 2
line 3
`

var name = 'kangkang';
var age = 20;
var message = `你好,${name},你今年${age}岁了`;

// console.log(message);

var s = 'Hello World';

var arr = ['C','D','E','F'];
arr.push('G','H');
arr.unshift('B');
arr.shift();
var arrad = arr.concat(['i','j'])

var joinArr = arr.join('-');

var multArr = [[1,2,3],[4,5,6],[7,8,9]];

var m = ['A','B','C'];
m.forEach(function(element,index,array){
});


var abs = function (x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
};

function abs_check(x) {
  if (typeof x !== 'number') {
    throw 'Not a number';
  }

  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}



function foo(a, b, ...rest) {
  if(arguments.length == 0) {
    console.log(0);
    return;
  }

  for (var i = 2; i < arguments.length; i++) {
    var result = arguments[i];
  }

  console.log('a=' + a);
  console.log('b=' + b);
  console.log(rest);
}



function f_dict() {
  return {'name':'kangkang'};
}


function area_of_circle(r,pi) {
  var argsLength = arguments.length;
  var r2 = r * r;
  if(argsLength > 1) {
    return r2 * pi;
  } else {
    return r2 * 3.14;
  }

  return 0;
}


function test_func_area() {
  var x = 1;
  function bar() {
    var y = x + 1;
  }
  var z = y + 1;
}



function variableUpgrade() {
  var x = 'Hello, ' + y;
  console.log(x);
  var y = 'kangkang';

  for (var i = 0; i < 4; i++) {

  }
  i += 1;
}

function struct() {
  let [x,[y,z]] = ['a',['b','c']];
  console.log(x);
  console.log(y);
  console.log(z);
}


function test_struct() {
  var person = {
    pname : '小明',
    age : 20,
    gender : 'male'
  }

  var {pname:nickname, age} = person;

  var x,y = ({x,y} = {name:'小明',x:100,y:200});
  console.log();

  var x=1,y=2;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}


function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}

var xiaoming = {
  name:'小明',
  birth:1990,
  age : function() {
    var that = this;
    function getAgeFromBirth() {
      var y = new Date().getFullYear();
      return y - that.birth;
    }
    return getAgeFromBirth();
  }
}
var fn = xiaoming.age;


var xiaohong = {
  name:'小红',
  birth:1992,
  age:getAge
}

var count = 0;
var oldParseInt = parseInt;
window.parseInt = function() {
  count += 1;
  return oldParseInt.apply(null, arguments);
};

parseInt('10');
parseInt('20');
parseInt('30');

function add(x,y,f) {
  return f(x) + f(y);
}

var r = add(-5,-6,Math.abs);


var testReduceArr = [1,3,5,7];
var res = testReduceArr.reduce(function(x,y) {
  return x+y;
});

function pow(x) {
  return x * x;
}

function powMult(x,y) {
  return x * 10 + y;
}

var res1 = testReduceArr.reduce(powMult);


function string2int(s) {
  var temp = s.split('');
  var result2 = temp.map(function (x) {
    return +x;
  });
  return result2;
}


function firstLetterUpper(arr) {
  var res11 = arr.map(function(x) {
    var str = x.toLowerCase();
    var result = str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase();
    return result;
  });

  return res11;
}

function testFilter(arr) {
  var r = arr.filter(function(x) {
    return x > 0;
  });
  return r;
}

function testFilterLog(arr) {
  var r = arr.filter(function(element, index, self){
    return self.indexOf(element) === index;
  });
  return r;
}

function get_primes() {
  var x, r, arr = [];
  for (x = 1; x < 100; x++) {
      arr.push(x);
  }

  return arr.filter(function(x) {
    var flag = true;
    if(x == 1) return false;
    for (var i = 2; i < x; i++) {
      if(x % i == 0) {
        flag = false;
        break;
      }
    }
    return flag;
  });
}

function count() {
  var arr = [];
  for (var i = 1; i <= 3; i++) {
    arr.push(function() {

    });
  }
}

var testAnoymas = (function(x) {return x * x;}(2));

function create_counter(x) {
  var temp = x || 0;
  return {
    inc : function() {
      return (temp += 1);
    }
  }
}

var c1 = create_counter(10);



function make_pow(n) {
  return function(x) {
    return Math.pow(x, n);
  }
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);


var xiaokang = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON : function() {
      return {
        name : this.name,
        age : this.age
      }
    }
};

function convert(key, value) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
}

var json = JSON.stringify(xiaokang, convert, ' ');


var Student = {
  name:'Robot',
  height:1.2,
  run:function() {
    console.log(this.name+'is Running!');
  }
}

function createStudent(name) {
  var s = Object.create(Student);
  s.name = name;
  return s;
}

var s_xiaoming = createStudent('大明');


function language(name) {
  this.name = name;
  this.hello = function() {
    alert('Hello');
  }
}


var english = new language('English');

function Product(props) {
  this.name = props.name;
  this.price = props.price;
}

Product.prototype.makeDesc = function() {
  alert('this product\' name is ' + this.name);
}

function createProduct(props) {
  return new Product(props || {});
}

var iphone = createProduct({
  name:'iphone 6s',
  price:4599
});

var oauth_url = '123';
var  base_url = '456';
var link = oauth_url || base_url || "";

var selector = document.querySelector('#test');
var test=document.querySelector('#test');

function changeDiv() {
  var p = document.getElementById('abcs');
  p.innerText = 'wahaha';
  p.style.color= '#ff0000';
  p.style.fontWeight='bold';
}

function check_form() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    // 继续下一步:
    return true;
}

function success(str) {
  console.log(str);
}

function fail(str) {
  console.error(str);
}

function reqeust(success, fail) {
  var num = 5;
  if (num > 0) {
    success('成功');
  } else {
    fail('失败');
  }
}

// var pp = new Promise(reqeust);
// pp.then(success).then(fail).then(function(result){ console.log('haha'); });

var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var result = langs.filter(function () {
  return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
});
// console.log(result.html());

// $('#test-ul li').text('haha');

// $('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');
$('#test-css').addClass('highlight');
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';
$('#test-css').append(ps);
$('#test-css').on('mouseenter',function(){
  alert('Hello, i ma Pascal');
});

$(function(){
  $('#login-form').on('submit',function(){
    alert('submit');
  });
});

var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

selectAll.click(function(){
  if(selectAll.is(':checked')) {
    langs.prop("checked",true);
    selectAllLabel.hide();
    deselectAllLabel.show().off();
  }
});

// $.ajax('/api/categories',{
//
// }).done(function(data){
//
// }).fail(function(data){
//
// }).always(function(data){
//
// });
//
// $.get('/path/to/resource',{
//   name:'Bob',
//   check:1
// });

$.fn.highlight1 = function(){
  this.css('backgroundColor','#fffceb').css('color','#d85030');
  return this;
}

// $('#test-highlight1 span').highlight1();

$.fn.highlight2 = function() {
  var opts = $.extend({},$.fn.highlight.default, options);
  this.css('backgroundColor', opts.backgroundColor).css('color',opts.color);
  return this;
}

// $.fn.highlight.default = {
//   color: '#d85030',
//   backgroundColor: '#fff8de'
// }

var x = "";
var y = "abc";

if (x || y) {
  // console.log("wahaha");
}

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

UserException.prototype.toString = function() {
  return this.name+':'+this.message+'';
}

// throw new UserException("wahaha");

function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if(selectObject.options[i].selected) {
      numberSelected++;
    }
  }

  return numberSelected;
}

var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
  alert('选择的数量是:'+howMany(document.selectForm.musicTypes));
});


function mapDeduce(func, array) {
  var result = [],
      i;

  for (var i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  return result;
}

function factorial(number) {
  return number * 2;
}

var testMapDeduc = mapDeduce(factorial, [2,3,4]);
// console.log(testMapDeduc);

var createPet = function(name) {
  var sex;

  return {
    setName : function(newName) {
      name = newName;
    },

    getName : function() {
      return name;
    }
  }
}

var cat = createPet("PatPat");
// console.log(cat.getName());

function funcDefaultParam(a,b=2) {
  console.log(a*b);
}

// funcDefaultParam(2);

function IncreaseAge() {
  var self = this;

  self.age1 = 0;
  setInterval(function growUp(){
    self.age1++;
    console.log(self.age1);
  },1000);
}


function ArrowFunctionIncreaseAge() {
  this.age = 0;
  setInterval(()=>{
    this.age++;
    console.log(this.age);
  },1000);
}

// var aa = new ArrowFunctionIncreaseAge();

function Car(newName,newModel,newYear) {

  function wahaha() {
    console.log(this.name,this.model,this.year);
  }

  var name,model,year;
  this.name = newName;
  this.model = newModel;
  this.year = newYear;
  this.wahaha = wahaha;

}
Car.prototype.color = null;

var car = {
  console : function()  {
    window.console.log("haha");
  }
};

var audi = new Car("audi","SUV",2006);
audi.color = "black";
// audi.wahaha();
// console.log(audi.color);


var d = Date.prototype;
Object.defineProperty(d, "year", {
  get : function() {
    return this.getFullYear()
  },
  set : function(y) {
    this.setFullYear(y)
  }
});

var now = new Date();
// console.log(now.year);
now.year = 2019;
// console.log(now.year);

function insertionSort(array) {
  var length = array.length,
  i,
  j,
  temp;

  for (var i = 1; i < length; i++) {
    temp = array[i];
    for (var j = i; j >= 0; j--) {
      if(array[j-1] > temp) {
        array[j] = array[j-1];
      } else {
        array[j] = temp;
        break;
      }
    }
  }

  return array;
}

var result = insertionSort([5,6,3,1,8,7,2,4]);
// console.log(result);

// var o1 = Object.create({x:1,y:2});
// console.log(o1.prototype)

// var oo = [
//   Object.create({x:1,y:2}),
//   Object.create({x:1,y:2}),
//   Object.create({x:1,y:2}),
//   Object.create({x:1,y:2})
// ];

function getValue(port) {
  var total = 0.0;
  for(var stock in port) {
    console.log(stock);
  }
}

function inherit(p) {
  if(p == null) throw TypeError();
  if(Object.create) {
    return Object.create(p);
  }

  var t = typeof p;
  if(t !== "object" && t !== "function") throw TypeError();
  function f() {};
  f.prototype = p;
  return new f();
}


// var o = {r:1};
// var c = inherit(o);
// c.x = 1;
// c.y = 1;

// console.log(c.propertyIsEnumerable("r"));

// var o = {x:1,y:2,z:3};
// for(p in o) {
//   console.log(p)
// }


var o = {
  data_prop : "value",
  get accessor_prop() {
    return this.data_prop;
  },
  set accessor_prop(value) {
    this.data_prop = value
  }
}

o.accessor_prop = 1;
// console.log(o.accessor_prop);

var dodo = {};
Object.defineProperty(dodo, "x",{
  value:undefined,
  writable:false,
  enumerable:false,
  configurable:true
});

dodo.x = 12;
// console.log(dodo.x);

var array = [1,2,3,4,5];
// console.log(Object.getPrototypeOf(array));
var result = array.reduce(function(x,y){
  return x+y;
},0);
// console.log(result);

// console.log(Array.isArray(array));

var simulatorArray = {};
var i = 0;
while(i < 5) {
  simulatorArray[i] = i * 2;
  i++;
}

// console.log(simulatorArray);
// console.log(Array.isArray(simulatorArray));

var s = 'test';
// console.log(s.charAt(0));

var ff = function(x,y) {
  return x+y;
}

var fo = {};
fo.ff = ff;
// console.log(fo.ff(1,2));

var addition = {
  a : 1,
  b : 2,
  add : function() {
    this.result = this.a + this.b;
  }
};
addition.add()
// console.log(addition.result);

function kk_max() {
  var max = 0;
  for(var i = 0;i < arguments.length;i++) {
    if(arguments[i] > max) max = arguments[i];
  }
  return max;
}

// console.log(kk_max(1,2,3,4,5,6,9));

var scope = 'global';
function testScope() {
  var scope = 'local';
  function f() {
    return scope;
  }

  return f;
}

var uniqueIdentifier = (function (){
  var counter = 0;
  return function() {
    return ++counter;
  };
}());

// console.log(uniqueIdentifier());

var callTest = {
  'haha' : function(){
    console.log('haha');
  }
};

function testCall(x,y) {
  console.log('x:'+x+',y:'+y);
}

// testCall.call(this, 1,2);

function threesix(y) {
  return this.x + y;
}

var o = {x:1};
var g = threesix.bind(o);
// console.log(g(2));

var threeseventy = new Function("x","y","return x+y");
console.log(threeseventy(4,2));
