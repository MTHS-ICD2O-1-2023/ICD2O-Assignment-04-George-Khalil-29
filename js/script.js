// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateCost() {
  const pizzaSizes = document.getElementById("pizzaSizes").value
  const toppingsCosts = document.getElementById("toppingsCosts").value

  const Large1Topping = (6.00 + 1.00) * (1.0 - 0.18)
   const Large2Topping = (6.0 + 1.75) * (1.0 - 0.18)
  
  if (pizzaSizes == "Large" || toppingsCosts == "1Topping") {
    document.getElementById("Large1Topping").innerHTML =
      "Your Pay will be:$" + (6.0 + 1.0) * (1.0 - 0.18)
  }
  else if (pizzaSizes == "Large" || toppingsCosts == "2Topping") {
    document.getElementById(Large2Topping).innerHTML =
      "Your pay will be:$" + (6.0 + 1.75) * (1.0 - 1.18)
  }
 }
