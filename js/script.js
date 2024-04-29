// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function pickAPzza() {
  // input
  const pizzaSize= parseInt(document.getElementById('pizza-Size').value)
  const toppings = parseInt(document.getElementById('toppings').value)

  // process
  const pay = (pizzaSize + toppings) * (0.18) ;
  const taxes = (HoursWorked * HourlyWage) *  0.18 ;

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: $ ${pay.toFixed(2)}` ; 
  document.getElementById('taxes').innerHTML = 'The  goverment will take: $' + taxes.toFixed(2) ; 
}
