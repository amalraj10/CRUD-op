import React, { useState, useEffect } from 'react';
import { getAllMessage, deleteMessage } from '../service/allAPI';

function SubmittedData() {
    const [allMessage, setAllMessage] = useState([]);

    useEffect(() => {
        getAllUploadedMessage();
    }, []);

    const getAllUploadedMessage = async () => {
        try {
            const response = await getAllMessage();
            setAllMessage(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteMessage(id);
            // Update state after deletion
            const updatedMessages = allMessage.filter(message => message.id !== id);
            setAllMessage(updatedMessages);
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
    };

    const thStyle = {
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
        padding: '8px',
        textAlign: 'left',
        border: '1px solid #dddddd',
    };

    const tdStyle = {
        padding: '8px',
        textAlign: 'left',
        border: '1px solid #dddddd',
    };

    const evenRowStyle = {
        backgroundColor: '#f9f9f9',
    };

    const hoverRowStyle = {
        backgroundColor: '#e9e9e9',
    };

    return (
        <div>
            <h2>Submitted Data</h2>
            <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Message</th>
                            <th style={thStyle}>Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {allMessage.map((message, index) => (
                            <tr key={index} style={index % 2 === 0 ? evenRowStyle : null} onMouseOver={(e) => e.target.style.backgroundColor = hoverRowStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = (index % 2 === 0 ? evenRowStyle.backgroundColor : null)}>
                                <td style={tdStyle}>{message.name}</td>
                                <td style={tdStyle}>{message.email}</td>
                                <td style={tdStyle}>{message.message}</td>
                                <td style={tdStyle}>
                                    <button >Edit</button> {/* Button for edit */}
                                    <button onClick={() => handleDelete(message.id)}>Delete</button> {/* Button for delete */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SubmittedData;



// import React, { useState, useEffect } from 'react';
// import { getAllMessage, deleteMessage, updateMessage } from '../service/allAPI';

// function SubmittedData() {
//     const [allMessage, setAllMessage] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editedMessage, setEditedMessage] = useState({
//         id: null,
//         name: '',
//         email: '',
//         message: ''
//     });

//     useEffect(() => {
//         getAllUploadedMessage();
//     }, []);

//     const getAllUploadedMessage = async () => {
//         try {
//             const response = await getAllMessage();
//             setAllMessage(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deleteMessage(id);
//             // Update state after deletion
//             const updatedMessages = allMessage.filter(message => message.id !== id);
//             setAllMessage(updatedMessages);
//         } catch (error) {
//             console.error('Error deleting message:', error);
//         }
//     };

//     const handleEdit = (id) => {
//         // Find the message to be edited from the list
//         const messageToEdit = allMessage.find(message => message.id === id);
//         // Set the edit mode and populate the editedMessage state
//         setEditMode(true);
//         setEditedMessage({
//             id: messageToEdit.id,
//             name: messageToEdit.name,
//             email: messageToEdit.email,
//             message: messageToEdit.message
//         });
//     };

//     const handleSaveEdit = async () => {
//         try {
//             await updateMessage(editedMessage);
//             // Update state after successful update
//             const updatedMessages = allMessage.map(message =>
//                 message.id === editedMessage.id ? editedMessage : message
//             );
//             setAllMessage(updatedMessages);
//             // Reset edit mode and clear edited message state
//             setEditMode(false);
//             setEditedMessage({
//                 id: null,
//                 name: '',
//                 email: '',
//                 message: ''
//             });
//         } catch (error) {
//             console.error('Error updating message:', error);
//         }
//     };

//     const tableStyle = {
//         width: '100%',
//         borderCollapse: 'collapse',
//     };

//     const thStyle = {
//         backgroundColor: '#f2f2f2',
//         fontWeight: 'bold',
//         padding: '8px',
//         textAlign: 'left',
//         border: '1px solid #dddddd',
//     };

//     const tdStyle = {
//         padding: '8px',
//         textAlign: 'left',
//         border: '1px solid #dddddd',
//     };

//     const evenRowStyle = {
//         backgroundColor: '#f9f9f9',
//     };

//     const hoverRowStyle = {
//         backgroundColor: '#e9e9e9',
//     };

//     return (
//         <div>
//             <h2>Submitted Data</h2>
//             <div style={{ overflowX: 'auto' }}>
//                 <table style={tableStyle}>
//                     <thead>
//                         <tr>
//                             <th style={thStyle}>Name</th>
//                             <th style={thStyle}>Email</th>
//                             <th style={thStyle}>Message</th>
//                             <th style={thStyle}>Actions</th> {/* New column for actions */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allMessage.map((message, index) => (
//                             <tr key={index} style={index % 2 === 0 ? evenRowStyle : null} onMouseOver={(e) => e.target.style.backgroundColor = hoverRowStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = (index % 2 === 0 ? evenRowStyle.backgroundColor : null)}>
//                                 <td style={tdStyle}>{editMode && editedMessage.id === message.id ? <input type="text" value={editedMessage.name} onChange={(e) => setEditedMessage({ ...editedMessage, name: e.target.value })} /> : message.name}</td>
//                                 <td style={tdStyle}>{editMode && editedMessage.id === message.id ? <input type="email" value={editedMessage.email} onChange={(e) => setEditedMessage({ ...editedMessage, email: e.target.value })} /> : message.email}</td>
//                                 <td style={tdStyle}>{editMode && editedMessage.id === message.id ? <input type="text" value={editedMessage.message} onChange={(e) => setEditedMessage({ ...editedMessage, message: e.target.value })} /> : message.message}</td>
//                                 <td style={tdStyle}>
//                                     {editMode && editedMessage.id === message.id ? (
//                                         <React.Fragment>
//                                             <button onClick={handleSaveEdit}>Save</button> {/* Button to save edit */}
//                                             <button onClick={() => setEditMode(false)}>Cancel</button> {/* Button to cancel edit */}
//                                         </React.Fragment>
//                                     ) : (
//                                         <React.Fragment>
//                                             <button onClick={() => handleEdit(message.id)}>Edit</button> {/* Button to initiate edit */}
//                                             <button onClick={() => handleDelete(message.id)}>Delete</button> {/* Button to delete */}
//                                         </React.Fragment>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default SubmittedData;
