import React, { useState } from 'react';

const DynamicTable = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd = () => {
        if (firstName && lastName) {
            if (editIndex !== null) {
                // Update existing row
                const newData = [...data];
                newData[editIndex] = { firstName, lastName };
                setData(newData);
                setEditIndex(null);
            } else {
                // Add new row
                setData([...data, { firstName, lastName }]);
            }
            setFirstName('');
            setLastName('');
        }
    };

    const handleEdit = (index) => {
        setFirstName(data[index].firstName);
        setLastName(data[index].lastName);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setData(data.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Dynamic Table</h1>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DynamicTable;
