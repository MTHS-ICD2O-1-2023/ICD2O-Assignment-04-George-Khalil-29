// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateCost(){
  const pizzaSize = document.getElementById("pizzaSizes").checked
  const toppingCost = document.getElementById("toppingsCosts").checked

  if (pizzaSize == "Large") {
    document.getElementById("orderSummary").innerHTML = 'your order is Large pizza $6.00';
  }
}