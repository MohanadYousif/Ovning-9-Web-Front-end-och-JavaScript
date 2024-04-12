function addItem() {
    const inputField = document.getElementById('itemInput');
    const itemText = inputField.value.trim();
    if (itemText !== '') {
        const itemList = document.getElementById('itemList');
        const li = document.createElement('li');
        li.textContent = itemText;
        
        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        li.addEventListener('click', toggleItem);
        itemList.appendChild(li);
        inputField.value = '';
    } else {
        alert("The box is empty! input is required.");
    }
}

function toggleItem() {
    this.classList.toggle('completed');
}