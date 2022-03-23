function calcTip(){
/* --------------------------------Step 1: grab the input values------------------------------------------------------ */
                                                          let tipAmount = document.getElementById("tipForm").value;
                                                          let billAmount = document.getElementById("billInput").value;


/* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
                                                          // sets a variable for the Tip Amount that is a number
                                                          let tipPrice = parseFloat(tipAmount);
                                                          // sets a variable for the Bill Amount that is a number
                                                          let billPrice = parseFloat(billAmount);

/* --------------------------------Step 3: grab the elements (paragraph w id)---------------------------------------------------------- */
                                                          // sets a var to the ID of 'bill-p'
                                                          let bill = document.getElementById('bill-p');
                                                          // sets a var to the ID of 'tip-p'
                                                          let tip = document.getElementById('tip-p');
                                                          // sets a var to the ID of 'total-p'
                                                          let total = document.getElementById('total-p');
/* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
                                                          // calulate total tip (tip % * bill) and store it in the a new variable
                                                          let totalTip = (tipPrice * billPrice);
                                                          // calcualte total bill (totalTip + billAmount) and store it in a new variable
                                                          let totalBill = totalTip + billPrice;

/* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
                                                          // change the innerHTML of the tip var from step 3 to the total tip from step 4
                                                          tip.innerHTML = "$" + totalTip.toFixed(2);
                                                          // change the innterHTML of the bill var from step 3 to the total bill var from step 2
                                                          bill.innerHTML = "$" + billPrice.toFixed(2);
                                                          // change the innerHTML of the total var from step 3 to the total bill var from step 4
                                                          total.innerHTML = "$" + totalBill.toFixed(2);


}
