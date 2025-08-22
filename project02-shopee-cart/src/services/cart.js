async function displayCart(userCart) {
  console.log("\nShopee Cart List:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$${item.price} |
      Quantidade: ${item.quantity} | Subtotal ${item.subtotal()}`
    );
  });
}

async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  console.log("\n🛒 Shopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
  console.log(`🧮 Total: ${result}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((product) => product.name === item.name);
  if (indexFound === -1) {
    console.log("Item não encontrado.");
    return;
  }
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;

    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }

}

export { addItem, calculateTotal, deleteItem, removeItemByIndex, removeItem, displayCart };
