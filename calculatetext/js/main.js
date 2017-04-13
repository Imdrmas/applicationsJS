/*global console*/

var myTextarea = document.getElementById('my-text'),

  mySpen = document.getElementById('my-span');

  myTextarea.onkeyup = function () {

    'use strict';
    mySpen.textContent = 50 - this.value.length;
    if (mySpen.textContent < 0) {

      mySpen.style.color = '#F00';


    }

          else {

            mySpen.style.color = '#000';
          }

  };
