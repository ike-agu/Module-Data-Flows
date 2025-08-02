let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
/*
# Exercise
- In `exercise.js`, you have been provided with a takeout order. Write a program that will print out the receipt for this order.
- Log each individual item to the console.
- Log the total cost of the order to the console.
- Use object destructuring to access the values you need from each item.
- Pay attention to the exact formatting of the expected result.

## Expected result
```
QTY     ITEM                TOTAL
1       Hot Cakes           2.32
2       Apple Pie           2.78
1       Egg McMuffin        2.80
1       Sausage McMuffin    3.00
2       Hot Coffee          2.00
4       Hash Brown          1.60

Total: 14.50
```*/

/*-----------steps--------------
- create a function called receipt and it take an argument called order.
- Log each individual item to the console.
- Log the total cost of the order to the console.
- Use object destructuring to access the values you need from each item.
- convert them to the exact formats as the example i.e pound:pence and log them

*/

function receipt(order){
  console.log("QNT".padEnd(8) +  "ITEM".padEnd(24) +  "TOTAL")
  let grandTotalPence = 0//this sets the initial accumulator in pence
  for(const item of order){
    const {quantity, itemName, unitPricePence} = item;
    const itemTotalPence = quantity * unitPricePence;
    grandTotalPence += itemTotalPence; //This line accumulates the total
const  itemTotal = (itemTotalPence/100).toFixed(2);
const qtyString = String(quantity).padEnd(8)
const itemString= itemName.padEnd(24)
const totalString  = itemTotal;
// console.log(qtyString + itemString + totalString)
  }
 // This is to Print grand total of receipt
const grandTotal = (grandTotalPence / 100).toFixed(2);
console.log("\n" );
console.log("Total: " + grandTotal);
}


// console.log(receipt(order))
