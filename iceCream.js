// List to store ice cream objects
let inventory = [];

// Function to add a new ice cream
function addIceCream() {
    const flavor = document.getElementById("flavor").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const imageUrl = document.getElementById("image").value;  // Image URL

    // Create a new ice cream object and add it to the inventory
    const iceCream = {
        flavor: flavor,
        price: price,
        quantity: quantity,
        imageUrl: imageUrl
    };

    inventory.push(iceCream);  // Add the new ice cream to the inventory
    displayInventory();        // Update the inventory display
    updateTotalValue();        // Recalculate the total value
    updateAvailableStock();    // Update available stock
}

// Function to update an existing ice cream
function updateIceCream() {
    const flavorToUpdate = prompt("Enter the flavor you want to update:");
    const iceCream = inventory.find(iceCream => iceCream.flavor === flavorToUpdate);

    if (iceCream) {
        iceCream.flavor = prompt("Enter new flavor:");
        iceCream.price = parseFloat(prompt("Enter new price:"));
        iceCream.quantity = parseInt(prompt("Enter new quantity:"));
        iceCream.imageUrl = prompt("Enter new image URL:");  // Update the image URL if needed

        displayInventory();    // Update the inventory display
        updateTotalValue();    // Recalculate the total value
        updateAvailableStock(); // Update available stock
    } else {
        alert("Flavor not found.");
    }
}

// Function to display the current inventory
function displayInventory() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";  // Clear the list

    inventory.forEach(iceCream => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${iceCream.imageUrl}" alt="${iceCream.flavor}" width="100" height="100">
            <strong>${iceCream.flavor}</strong>: $${iceCream.price.toFixed(2)} (Quantity: ${iceCream.quantity})
        `;
        inventoryList.appendChild(listItem);
    });
}

// Function to calculate the total value of the inventory
function updateTotalValue() {
    let totalValue = 0;
    inventory.forEach(iceCream => {
        totalValue += iceCream.price * iceCream.quantity;  // Price * quantity for each ice cream
    });

    document.getElementById("totalValue").textContent = totalValue.toFixed(2);  // Update total value in the DOM
}

// Function to calculate the total available stock (quantity) of ice creams
function updateAvailableStock() {
    let totalStock = 0;
    inventory.forEach(iceCream => {
        totalStock += iceCream.quantity;  // Sum the quantity of each ice cream
    });

    document.getElementById("availableStock").textContent = totalStock;  // Update the available stock in the DOM
}
