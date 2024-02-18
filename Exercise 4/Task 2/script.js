let tableData = [];

    function addRow() {
        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();

        if (firstName && lastName) {
            if (editIndex === -1) {
                tableData.push({ firstName, lastName });
            } else {
                tableData[editIndex] = { firstName, lastName };
                editIndex = -1;
                document.getElementById('addBtn').innerText = 'Add';
            }

            renderTable();
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
        }
    }

    function renderTable() {
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        tableData.forEach((row, index) => {
            let newRow = `<tr>
                            <td>${row.firstName}</td>
                            <td>${row.lastName}</td>
                            <td>
                                <button class="btn btn-primary" onclick="editRow(${index})">Edit</button>
                                <button class="btn btn-danger" onclick="deleteRow(${index})">Delete</button>
                            </td>
                        </tr>`;
            tableBody.innerHTML += newRow;
        });
    }

    let editIndex = -1;
    function editRow(index) {
        editIndex = index;
        let row = tableData[index];
        document.getElementById('firstName').value = row.firstName;
        document.getElementById('lastName').value = row.lastName;
        document.getElementById('addBtn').innerText = 'Update';
    }

    function updateRow() {
        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();

        if (firstName && lastName && editIndex !== -1) {
            tableData[editIndex] = { firstName, lastName };
            editIndex = -1;
            document.getElementById('addBtn').innerText = 'Add';
            renderTable();
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
        }
    }

    function deleteRow(index) {
        tableData.splice(index, 1);
        renderTable();
    }