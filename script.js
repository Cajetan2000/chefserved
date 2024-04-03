document.addEventListener('DOMContentLoaded', function () {
    const allItemsButton = document.querySelector('button:nth-of-type(1)');
    const itemButton = document.querySelector('button:nth-of-type(2)');
    const recordsDiv = document.querySelector('.records');
    const apiURL = 'https://farmercrops-29dc18f2823d.herokuapp.com/api/crops';

    allItemsButton.addEventListener('click', function() {
        fetch(apiURL)
            .then(response => response.json())
            .then(data => displayItems(data))
            .catch(error => console.error('Error fetching data:', error));
    });

    itemButton.addEventListener('click', function() {
        const inputHTML = `<input type="text" id="itemId" placeholder="Enter Item ID">
                           <button id="displayItem">Display</button>`;
        recordsDiv.innerHTML = inputHTML;
        document.getElementById('displayItem').addEventListener('click', function() {
            const itemId = document.getElementById('itemId').value;
            fetch(`${apiURL}/${itemId}`) // Assuming the API supports fetching by ID
                .then(response => response.json())
                .then(data => displayItems([data])) // Wrapping in array to reuse displayItems function
                .catch(error => console.error('Error fetching item:', error));
        });
    });

    function displayItems(items) {
        let tableHTML = `<table width="100%">
                            <thead>
                                <tr>
                                    <th>Item ID</th>
                                    <th>Item Name</th>
                                    <th>Item Amount</th>
                                </tr>
                            </thead>
                            <tbody>`;
        items.forEach(item => {
            tableHTML += `<tr>
                            <td>${item.id}</td>
                            <td>${item.type}</td>
                            <td>${item.bags || item.count}</td>
                          </tr>`;
        });
        if(items.length === 0) {
            tableHTML += `<tr><td colspan="3">No items found.</td></tr>`;
        }
        tableHTML += `</tbody></table>`;
        recordsDiv.innerHTML = tableHTML;
    }
});

