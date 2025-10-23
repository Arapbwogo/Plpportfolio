document.addEventListener('DOMContentLoaded', () => {
  const itemContainer = document.getElementById('itemContainer');
  const addItemButton = document.getElementById('addItemButton');
  let itemCount = 0; // To keep track of item numbers

  addItemButton.addEventListener('click', () => {
    itemCount++;

    // Create a new div element for the item
    const newItem = document.createElement('div');
    newItem.classList.add('addedItem'); // Apply the CSS class
    newItem.textContent = `Item ${itemCount}`; // Set text content

    // Append the new item to the container
    itemContainer.appendChild(newItem);
  });
});
document.addEventListener('DOMContentLoaded',()=>{
  
})