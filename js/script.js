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
  const pizzaSize = document.getElementById("pizzaSize").value
  const toppings = parseInt(document.getElementById("toppings").value)

  let baseCost
  if (pizzaSize === "Large") {
    baseCost = 6.0
  } else {
    baseCost = 10.0
  }

  let toppingCost
  if (toppings === 1) {
    toppingCost = 1.0
  } else if (toppings === 2) {
    toppingCost = 1.75
  } else if (toppings === 3) {
    toppingCost = 2.5
  } else if (toppings === 4) {
    toppingCost = 3.35
  } else {
    toppingCost = 0 // No toppings selected
  }

  const hstRate = 0.13
  const subtotal = baseCost + toppingCost
  const tax = subtotal * hstRate
  const finalCost = subtotal + tax

  document.getElementById("orderSummary").innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (HST): $${tax.toFixed(2)}</p>
        <p>Final Cost: $${finalCost.toFixed(2)}</p>
      `
}
