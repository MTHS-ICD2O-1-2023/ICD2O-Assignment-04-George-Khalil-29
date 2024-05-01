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
  const pizzaSizes = document.getElementById("pizzaSizes").value
  const toppingCost = document.getElementById("toppingsCosts").value

  if (pizzaSizes =="Large" || toppingCost == "1Topping") {
    document.getElementById("orderSummary").innerHTML = 'your order cost is:';
  }
  if (pizzaSizes == "Large" || toppingCost == "2Topping") {
    document.getElementById("orderSummary").innerHTML = 'Your order cost is:';
  }
}