let tableData = [];

    function addRow() {
        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();

        if (firstName && lastName) {
            tableData.push({ firstName, lastName, selected: false });
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
                            <td><input type="checkbox" id="checkbox${index}" onchange="toggleRowSelection(${index})" ${row.selected ? 'checked' : ''}></td>
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

    function editRow(index) {
        let row = tableData[index];
        document.getElementById('firstName').value = row.firstName;
        document.getElementById('lastName').value = row.lastName;
        document.getElementById('addBtn').innerText = 'Update';
    }

    function deleteRow(index) {
        tableData.splice(index, 1);
        renderTable();
    }

    function deleteSelectedRows() {
        tableData = tableData.filter(row => !row.selected);
        renderTable();
        document.getElementById('deleteBtn').disabled = true;
    }

    function toggleRowSelection(index) {
        tableData[index].selected = !tableData[index].selected;
        let selectedRows = tableData.filter(row => row.selected);
        document.getElementById('deleteBtn').disabled = selectedRows.length === 0;
    }

    function toggleSelectAll() {
        let selectAllCheckbox = document.getElementById('selectAll');
        let checked = selectAllCheckbox.checked;
        tableData.forEach(row => {
            row.selected = checked;
        });
        renderTable();
        document.getElementById('deleteBtn').disabled = !checked;
    }