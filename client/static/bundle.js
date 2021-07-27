(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
module.exports={
    "buys": [
        {
            "id": "12345",
            "ticker": "BTC/USDT",
            "fee": "1.5",
            "buy_level": "3012.36",
            "num_shared": "0.04",
            "stored_price": "3012.36",
            "user_id": "123456",
            "date_of_purchase": "1627313660218"
        }
    ],
    "sells": [
        {
            "id": "12345",
            "ticker": "EU/USDT",
            "fee": "1.5",
            "buy_level": "0.75",
            "num_shared": "1000",
            "stored_price": "0.0069",
            "user_id": "123456",
            "date_of_purchase": "1627113674551"
        }
    ]

}
},{}],3:[function(require,module,exports){
const { showLogin, doLogout, showError } = require('./lib/layout');
const { showPortfolio }  = require('./lib/portfolio.layout');//I want this to go into layout but it doesn't work otherwise

const { showAddInvest, showAddSell } = require('./lib/modal');

window.addEventListener('hashchange', updateContent);
document.addEventListener('DOMContentLoaded', updateContent);

function updateContent(){
    const hash = window.location.hash;
    const token = localStorage.getItem('token')
    console.log(hash);
    try{
        if(!token){
            showLogin();
        }
        else{
            if(hash == '#' ||hash == '' || hash == "#home" || hash == "#portfolio"){
                showPortfolio();
            } else if (hash == '#logout'){
                doLogout();
                hash = '#'
            }    
            else if (hash == "#invest"){
                showPortfolio();
                showAddInvest();
            } else if (hash.startsWith("#sell/#")){
                let sellId = hash.slice(7);
                showPortfolio();
                showAddSell(sellId);
            }
        }   
    } catch(e) {
        console.log(e);
        //showError();
    }/* 
    if(hash == '/#error'){
        //showError();
    } */
}

},{"./lib/layout":4,"./lib/modal":5,"./lib/portfolio.layout":6}],4:[function(require,module,exports){
const { showPortfolio } = require('./portfolio.layout.js');
module.export = { showPortfolio };
},{"./portfolio.layout.js":6}],5:[function(require,module,exports){

},{}],6:[function(require,module,exports){
const { getAll } = require('./requests');

function updateNav(){
    const newNav = [
        {
            p: "Portfolio",
            href: '#'
        },
        {
            p: "Invest",
            href: '#invest'
        },
        {
            p: "Sell",
            href: '#sell'
        },
        {
            p: "Logout",
            href: '#logout'
        }    
    ]
    let nav=document.querySelector("#linkset");
    nav.innerHTML="";
    for(link of newNav){
        let a = document.createElement('a');
        a.setAttribute('href',link.href);
        a.innerText= link.p;
        nav.append(a);
    }
}

function createTable(header, data){

    let table = document.createElement('table');
    let row = document.createElement('tr');
    const size = header.length;
    for(th of header){
        let cell = document.createElement('th');
        cell.innerText = th;
        row.append(cell);
    }

    table.append(row);

    for(invest of data){
        row = document.createElement('tr');
        row.setAttribute('id', invest.id);

        let ticker = document.createElement('td');
        ticker.innerText= invest.ticker;
        let num_shared = document.createElement('td');
        num_shared.innerText= invest.num_shared;
        let total_cost = document.createElement('td');
        total_cost.innerText= Number(invest.buy_level)*Number(invest.num_shared);
        let buy_level = document.createElement('td');
        buy_level.innerText= invest.buy_level;
        let fee = document.createElement('td');
        fee.innerText= invest.fee;       
        let actual_price = document.createElement('td');
        actual_price.innerText= invest.stored_price;

        row.append(ticker);
        row.append(num_shared);
        row.append(total_cost);
        row.append(buy_level); 
        row.append(fee);
        row.append(actual_price);
        if(size==7){
            let button = document.createElement('a');
            button.setAttribute('href',"/#sell/#"+invest.id);
            button.innerText= 'Sell'; 
            row.append(button);
        }
        
        table.append(row);
    }

    return table;
}

function updateMain(data){
    console.log('installing main');
    let main=document.querySelector("#main");
    main.innerHTML="";

    const thList = [
        "Ticker", "Number of Shares", "Total cost", "Buy level", "Fees", "Actual Price", "Update"
    ]
    const thListSells = [
        "Ticker", "Number of Shares", "Total cost", "Buy level", "Fees", "Actual Price"
    ]
    const buyTable = createTable(thList, data.buys);
    const sellsTable = createTable(thListSells, data.sells);
    main.append(buyTable);
    main.append(sellsTable);
}

async function showPortfolio(){
    console.log('inside portfolio layout');
    try{
        const data = await getAll();
        console.log(data);
        if (!data) {throw new Error('Problem in the database')}
        updateNav();
        console.log('nav installed');
        updateMain(data);
    }catch(e){
        console.log(e);
    }
}
module.exports = {
    showPortfolio
};
},{"./requests":7}],7:[function(require,module,exports){
(function (process){(function (){
const { doLogout } = require('./layout');

const portfolioData = require('../_data.example/portfolio.json');

const url = process.env.SERVER_URL || 'http://localhost:5000/';

async function getAll(){
    try {
        const options = { headers: new Headers({'Authorization': localStorage.getItem('token')}) }
        const response = await fetch(`${url}users`, options);
        const data = await response.json();
        if(data.err){
            //console.warn(data.err);
            data = portfolioData;
            //doLogout(); //activate when not testing
            console.log(data)
        }
        return data;
    } catch (err) {
        console.warn(err);
        return portfolioData;
    }
}

module.exports = {
    getAll
};
}).call(this)}).call(this,require('_process'))
},{"../_data.example/portfolio.json":2,"./layout":4,"_process":1}]},{},[3]);
