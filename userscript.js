// ==UserScript==
// @name         Use aalto libroxy
// @version      2024-01-26
// @author       You
// @match        https://ieeexplore.ieee.org/*
// @match        https://dl.acm.org/*
// @match        https://www.sciencedirect.com/*
// @match        https://link.springer.com/*
// @match        https://www.talouselama.fi/*
// @match        https://www.tekniikkatalous.fi/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log("IN USER SCRIPT")
  let current_url = window.location.href
  // console.log(current_url)

  let split_url = current_url.split("/")
  // console.log(split_url)

  // Replace dots with dashes and add .libproxy.aalto.fi to the end
  split_url[2] = split_url[2].split(".").join("-") + ".libproxy.aalto.fi"
  // console.log(split_url)

  const new_url = split_url.join("/")

  const user_confirmation = confirm("Do you want to change to '" + new_url + "'?")

  if (user_confirmation) {
    window.location.href = new_url
  }

  // Your code here...
})();