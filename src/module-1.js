import _ from 'lodash';

import './module-1.css';

export default function() {
    var el = document.querySelector('#module-1');
    let module = Symbol('module 1');
    el.textContent = `Hello ${module.toString()}`;
}

export var n = 101;
