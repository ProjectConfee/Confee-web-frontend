//
//
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { Button, Card } from 'antd';
//
// // Define the type for announcements based on your backend entity
// interface Announcement {
//   id: number;
//   announcement: string;
//   timestamp: string; // Adjust the type if it's a different format
// }
//
// const App: React.FC = () => {
//   const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//
//   // Fetch all announcements from the backend
//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/announcements/getAll');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };
//
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);
//
//   // Handle adding a new announcement
//   const handleAddClick = async () => {
//     const { value: text } = await Swal.fire({
//       input: 'textarea',
//       inputLabel: 'New Announcement',
//       inputPlaceholder: 'Enter new announcement',
//       inputAttributes: {
//         'aria-label': 'Enter new announcement'
//       },
//       showCancelButton: true
//     });
//
//     if (text) {
//       try {
//         const response = await fetch('http://localhost:8080/api/announcements/add', { // Ensure correct endpoint
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ announcement: text }),
//         });
//
//         if (response.ok) {
//           Swal.fire('Announcement added!', '', 'success');
//           fetchAnnouncements();  // Refresh the announcements
//         } else {
//           Swal.fire('Error!', 'Failed to add announcement.', 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to add announcement.', 'error');
//       }
//     }
//   };
//
//   return (
//       <div className="bg-white mt-16 mx-20 rounded-3xl shadow-lg pb-16">
//         <div className="flex pt-6 justify-center text-3xl font-medium">
//           Announcements
//         </div>
//         <div className="flex flex-col flex-grow pr-10 mb-4 mt-0">
//           <div className="flex items-center justify-center ml-auto my-3 mr-5">
//             <Button type="primary" onClick={handleAddClick}>
//               <div className="text-lg">ADD</div>
//               <IoMdAddCircleOutline className="text-xl mt-0.5 -ml-1" />
//             </Button>
//           </div>
//         </div>
//         <div className="mx-14 mb-10">
//           {announcements.map((announcement) => (
//               <Card key={announcement.id} className='bg-slate-100'>
//                 <p className="text-lg">{announcement.announcement}</p>
//                 <div className="flex justify-end text-slate-500 text-sm">
//                   {new Date(announcement.timestamp).toLocaleString([], {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                     hour12: true
//                   })}
//                 </div>
//               </Card>
//           ))}
//         </div>
//       </div>
//   );
// };
//
// export default App;
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { Button, Card } from 'antd';
// import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported
//
// // Define the type for announcements based on your backend entity
// interface Announcement {
//   id: number;
//   announcement: string;
//   timestamp: string; // Adjust the type if it's a different format
// }
//
// const App: React.FC = () => {
//   const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//
//   // Fetch all announcements from the backend
//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/announcements/getAll');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };
//
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);
//
//   // Handle adding a new announcement
//   const handleAddClick = async () => {
//     const { value: text } = await Swal.fire({
//       input: 'textarea',
//       inputLabel: 'New Announcement',
//       inputPlaceholder: 'Enter new announcement',
//       inputAttributes: {
//         'aria-label': 'Enter new announcement'
//       },
//       showCancelButton: true,
//       confirmButtonText: 'Add',
//       cancelButtonText: 'Cancel',
//       customClass: {
//         confirmButton: 'bg-blue-500 text-white',
//         cancelButton: 'bg-gray-300'
//       }
//     });
//
//     if (text) {
//       try {
//         const response = await fetch('http://localhost:8080/api/announcements/add', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ announcement: text }),
//         });
//
//         if (response.ok) {
//           Swal.fire('Announcement added!', '', 'success');
//           fetchAnnouncements();  // Refresh the announcements
//         } else {
//           Swal.fire('Error!', 'Failed to add announcement.', 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to add announcement.', 'error');
//       }
//     }
//   };
//
//   return (
//       <div className="bg-gray-100 mt-12 mx-auto max-w-6xl p-4 rounded-xl shadow-lg">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-semibold text-gray-800">Announcements</h2>
//           <Button
//               type="primary"
//               onClick={handleAddClick}
//               className="flex items-center space-x-2"
//               icon={<IoMdAddCircleOutline className="text-xl" />}
//           >
//             <span className="text-lg">Add</span>
//           </Button>
//         </div>
//         <div className="space-y-4">
//           {announcements.map((announcement) => (
//               <Card
//                   key={announcement.id}
//                   className="bg-white border border-gray-200 rounded-lg shadow-sm"
//                   style={{ padding: '6px' }}
//               >
//                 <p className="text-lg text-gray-800">{announcement.announcement}</p>
//                 <div className="flex justify-end text-gray-500 text-sm mt-2">
//                   {new Date(announcement.timestamp).toLocaleString([], {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                     hour12: true
//                   })}
//                 </div>
//               </Card>
//           ))}
//         </div>
//       </div>
//   );
// };
//
// export default App;

// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { IoMdAddCircleOutline, IoMdTrash } from 'react-icons/io';
// import { Button, Card } from 'antd';
// import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported
//
// // Define the type for announcements based on your backend entity
// interface Announcement {
//   id: number;
//   announcement: string;
//   timestamp: string; // Adjust the type if it's a different format
// }
//
// const App: React.FC = () => {
//   const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//
//   // Fetch all announcements from the backend
//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/announcements/getAll');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };
//
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);
//
//   // Handle adding a new announcement
//   const handleAddClick = async () => {
//     const { value: text } = await Swal.fire({
//       input: 'textarea',
//       inputLabel: 'New Announcement',
//       inputPlaceholder: 'Enter new announcement',
//       inputAttributes: {
//         'aria-label': 'Enter new announcement'
//       },
//       showCancelButton: true,
//       confirmButtonText: 'Add',
//       cancelButtonText: 'Cancel',
//       customClass: {
//         confirmButton: 'bg-blue-600 text-white hover:bg-blue-700',
//         cancelButton: 'bg-gray-300 hover:bg-gray-400'
//       }
//     });
//
//     if (text) {
//       try {
//         const response = await fetch('http://localhost:8080/api/announcements/add', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ announcement: text }),
//         });
//
//         if (response.ok) {
//           Swal.fire('Announcement added!', '', 'success');
//           fetchAnnouncements();  // Refresh the announcements
//         } else {
//           Swal.fire('Error!', 'Failed to add announcement.', 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to add announcement.', 'error');
//       }
//     }
//   };
//
//   // Handle deleting an announcement
//   const handleDeleteClick = async (id: number) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//       customClass: {
//         confirmButton: 'bg-red-600 text-white hover:bg-red-700',
//         cancelButton: 'bg-gray-300 hover:bg-gray-400'
//       }
//     });
//
//     if (result.isConfirmed) {
//       try {
//         const response = await fetch(`http://localhost:8080/api/announcements/delete/${id}`, {
//           method: 'DELETE',
//         });
//
//         if (response.ok) {
//           Swal.fire('Deleted!', 'The announcement has been deleted.', 'success');
//           fetchAnnouncements();  // Refresh the announcements
//         } else {
//           Swal.fire('Error!', 'Failed to delete announcement.', 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to delete announcement.', 'error');
//       }
//     }
//   };
//
//   return (
//       <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
//           <Button
//               type="primary"
//               onClick={handleAddClick}
//               className="flex items-center space-x-2 text-lg rounded-full bg-blue-500 hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
//               icon={<IoMdAddCircleOutline className="text-2xl" />}
//           >
//             <span>Add</span>
//           </Button>
//         </div>
//         <div className="space-y-6">
//           {announcements.map((announcement) => (
//               <Card
//                   key={announcement.id}
//                   className="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//                   style={{ padding: '20px', borderRadius: '15px' }}
//               >
//                 <div className="flex justify-between items-start">
//                   <div className="flex-1">
//                     <p className="text-lg text-gray-800">{announcement.announcement}</p>
//                     <div className="flex justify-end text-gray-500 text-sm mt-4">
//                       {new Date(announcement.timestamp).toLocaleString([], {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         hour12: true
//                       })}
//                     </div>
//                   </div>
//                   <Button
//                       type="text"
//                       danger
//                       icon={<IoMdTrash className="text-red-600 text-2xl" />}
//                       onClick={() => handleDeleteClick(announcement.id)}
//                       className="ml-4"
//                   />
//                 </div>
//               </Card>
//           ))}
//         </div>
//       </div>
//   );
// };
//
// export default App;
//
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { IoMdAddCircleOutline, IoMdTrash, IoMdCreate } from 'react-icons/io';
// import { Button, Card } from 'antd';
// import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported
//
// // Define the type for announcements based on your backend entity
// interface Announcement {
//   id: number;
//   announcement: string;
//   timestamp: string; // Adjust the type if it's a different format
// }
//
// const App: React.FC = () => {
//   const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//
//   // Fetch all announcements from the backend
//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/announcements/getAll');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };
//
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);
//
//   // Handle adding a new announcement
//   const handleAddClick = async () => {
//     const { value: text } = await Swal.fire({
//       input: 'textarea',
//       inputLabel: 'New Announcement',
//       inputPlaceholder: 'Enter new announcement',
//       inputAttributes: {
//         'aria-label': 'Enter new announcement'
//       },
//       showCancelButton: true,
//       confirmButtonText: 'Add',
//       cancelButtonText: 'Cancel',
//       customClass: {
//         confirmButton: 'bg-blue-600 text-white hover:bg-blue-700',
//         cancelButton: 'bg-gray-300 hover:bg-gray-400'
//       }
//     });
//
//     if (text) {
//       try {
//         const response = await fetch('http://localhost:8080/api/announcements/add', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ announcement: text }),
//         });
//
//         if (response.ok) {
//           Swal.fire('Announcement added!', '', 'success');
//           fetchAnnouncements();  // Refresh the announcements
//         } else {
//           Swal.fire('Error!', 'Failed to add announcement.', 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to add announcement.', 'error');
//       }
//     }
//   };
//
//   // Handle editing an announcement
//   const handleEditClick = async (announcement: Announcement) => {
//     const { value: newText } = await Swal.fire({
//       input: 'textarea',
//       inputLabel: 'Edit Announcement',
//       inputValue: announcement.announcement,
//       inputPlaceholder: 'Edit announcement',
//       inputAttributes: {
//         'aria-label': 'Edit announcement'
//       },
//       showCancelButton: true,
//       confirmButtonText: 'Save',
//       cancelButtonText: 'Cancel',
//       customClass: {
//         confirmButton: 'bg-blue-600 text-white hover:bg-blue-700',
//         cancelButton: 'bg-gray-300 hover:bg-gray-400'
//       }
//     });
//
//     if (newText) {
//       try {
//         const response = await fetch(`http://localhost:8080/api/announcements/update/${announcement.id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ announcement: newText }),
//         });
//
//         if (response.ok) {
//           Swal.fire('Announcement updated!', '', 'success');
//           fetchAnnouncements();  // Refresh the announcements
//         } else {
//           Swal.fire('Error!', 'Failed to update announcement.', 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to update announcement.', 'error');
//       }
//     }
//   };
//
//   // Handle deleting an announcement
//   const handleDeleteClick = async (id: number) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//       customClass: {
//         confirmButton: 'bg-red-600 text-white hover:bg-red-700',
//         cancelButton: 'bg-gray-300 hover:bg-gray-400'
//       }
//     });
//
//     if (result.isConfirmed) {
//       try {
//         const response = await fetch(`http://localhost:8080/api/announcements/delete/${id}`, {
//           method: 'DELETE',
//         });
//
//         if (response.ok) {
//           Swal.fire('Deleted!', 'The announcement has been deleted.', 'success');
//           fetchAnnouncements();  // Refresh the announcements
//         } else {
//           Swal.fire('Error!', 'Failed to delete announcement.', 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to delete announcement.', 'error');
//       }
//     }
//   };
//
//   return (
//       <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
//           <Button
//               type="primary"
//               onClick={handleAddClick}
//               className="flex items-center space-x-2 text-lg rounded-full bg-blue-500 hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
//               icon={<IoMdAddCircleOutline className="text-2xl" />}
//           >
//             <span>Add</span>
//           </Button>
//         </div>
//         <div className="space-y-6">
//           {announcements.map((announcement) => (
//               <Card
//                   key={announcement.id}
//                   className="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//                   style={{ padding: '20px', borderRadius: '15px' }}
//               >
//                 <div className="flex justify-between items-start">
//                   <div className="flex-1">
//                     <p className="text-lg text-gray-800">{announcement.announcement}</p>
//                     <div className="flex justify-end text-gray-500 text-sm mt-4">
//                       {new Date(announcement.timestamp).toLocaleString([], {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         hour12: true
//                       })}
//                     </div>
//                   </div>
//                   <div className="flex space-x-4">
//                     <Button
//                         type="text"
//                         icon={<IoMdCreate className="text-blue-600 text-2xl" />}
//                         onClick={() => handleEditClick(announcement)}
//                     />
//                     <Button
//                         type="text"
//                         danger
//                         icon={<IoMdTrash className="text-red-600 text-2xl" />}
//                         onClick={() => handleDeleteClick(announcement.id)}
//                     />
//                   </div>
//                 </div>
//               </Card>
//           ))}
//         </div>
//       </div>
//   );
// };
//
// export default App;
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { IoMdAddCircleOutline, IoMdTrash, IoMdCreate } from 'react-icons/io';
import { Button, Card } from 'antd';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported

// Define the type for announcements based on your backend entity
interface Announcement {
  id: number;
  announcement: string;
  timestamp: string; // Adjust the type if it's a different format
}

const App: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  // Fetch all announcements from the backend
  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/announcements/getAll');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Handle adding a new announcement
  const handleAddClick = async () => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'New Announcement',
      inputPlaceholder: 'Enter new announcement',
      inputAttributes: {
        'aria-label': 'Enter new announcement'
      },
      showCancelButton: true,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'bg-blue-600 text-white hover:bg-blue-700',
        cancelButton: 'bg-gray-300 hover:bg-gray-400'
      }
    });

    if (text) {
      try {
        const response = await fetch('http://localhost:8080/api/announcements/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ announcement: text }),
        });

        if (response.ok) {
          Swal.fire('Announcement added!', '', 'success');
          fetchAnnouncements();  // Refresh the announcements
        } else {
          Swal.fire('Error!', 'Failed to add announcement.', 'error');
        }
      } catch (error) {
        Swal.fire('Error!', 'Failed to add announcement.', 'error');
      }
    }
  };

  // Handle editing an announcement
  const handleEditClick = async (announcement: Announcement) => {
    const { value: newText } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Edit Announcement',
      inputValue: announcement.announcement,
      inputPlaceholder: 'Edit announcement',
      inputAttributes: {
        'aria-label': 'Edit announcement'
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'bg-blue-600 text-white hover:bg-blue-700',
        cancelButton: 'bg-gray-300 hover:bg-gray-400'
      }
    });

    if (newText) {
      try {
        const response = await fetch(`http://localhost:8080/api/announcements/update/${announcement.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ announcement: newText }),
        });

        if (response.ok) {
          Swal.fire('Announcement updated!', '', 'success');
          fetchAnnouncements();  // Refresh the announcements
        } else {
          Swal.fire('Error!', 'Failed to update announcement.', 'error');
        }
      } catch (error) {
        Swal.fire('Error!', 'Failed to update announcement.', 'error');
      }
    }
  };

  // Handle deleting an announcement
  const handleDeleteClick = async (id: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      customClass: {
        confirmButton: 'bg-red-600 text-white hover:bg-red-700',
        cancelButton: 'bg-gray-300 hover:bg-gray-400'
      }
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:8080/api/announcements/delete/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          Swal.fire('Deleted!', 'The announcement has been deleted.', 'success');
          fetchAnnouncements();  // Refresh the announcements
        } else {
          Swal.fire('Error!', 'Failed to delete announcement.', 'error');
        }
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete announcement.', 'error');
      }
    }
  };

  return (
      <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
          <Button
              type="primary"
              onClick={handleAddClick}
              className="flex items-center space-x-2 text-lg rounded-full bg-blue-500 hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
              icon={<IoMdAddCircleOutline className="text-2xl" />}
          >
            <span>Add</span>
          </Button>
        </div>
        <div className="space-y-6">
          {announcements.map((announcement) => (
              <Card
                  key={announcement.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-100"
                  style={{ padding: '12px', borderRadius: '10px', position: 'relative' }}
              >
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-800 mb-0">{announcement.announcement}</p>
                  <div className="text-gray-500 text-sm mb-4">
                    {new Date(announcement.timestamp).toLocaleString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-4">
                    <Button
                        type="text"
                        icon={<IoMdCreate className="text-blue-600 text-2xl" />}
                        onClick={() => handleEditClick(announcement)}
                        className="text-lg"
                    />
                    <Button
                        type="text"
                        danger
                        icon={<IoMdTrash className="text-red-600 text-2xl" />}
                        onClick={() => handleDeleteClick(announcement.id)}
                        className="text-lg"
                    />
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </div>
  );
};

export default App;
