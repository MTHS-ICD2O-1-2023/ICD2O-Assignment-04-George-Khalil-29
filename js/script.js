// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
document
  .getElementById("calculateButton")
  .addEventListener("click", calculateCost)

function swapper() {
  toggleClass(document.getElementById("overlay"), "open")
}

var el = document.getElementById("overlayBtn")
el.addEventListener("click", swapper, false)

var text = document.getElementById("overlayBtn")
text.onclick = function () {
  this.innerHTML = this.innerHTML === "Menu" ? "Close" : "Menu"
  return false
}