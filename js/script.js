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
  const pizzaSizes = document.getElementById("pizzaSizes").checked
  const extralarge = document.getElementById("extralarge").value;
  const toppingsCosts = document.getElementById("toppingsCosts").value

  const orderSummary = (6.0 + 1.0) * (1.0 - 0.13)

  if (pizzaSizes == "Large" || toppingsCosts == "1Topping" ) {
    document.getElementById("orderSummary").innerHTML =
      "Your pay will be:" + orderSummary + "$"
  } else if (pizzaSizes == "Large" || toppingsCosts == "2Topping") {
    document.getElementById("orderSummary").innerHTML =
      "Your pay will be:" + (6.0 + 1.75) * (1.0 - 0.13) + "$"
  } else if (pizzaSizes == "Large" || toppingsCosts == "3Topping") {
    document.getElementById("orderSummary").innerHTML =
      "Your pay will be:" + (6.0 + 2.5) * (1.0 - 0.13) + "$"
  } else if (pizzaSizes == "Large" || toppingsCosts == "4Topping") {
    document.getElementById("orderSummary").innerHTML = "Your pay will be:" + (6.0 + 3.35) * (1.0 - 0.13) +"$"
  } 
}
