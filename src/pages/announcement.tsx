

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Button, Card } from 'antd';

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
      showCancelButton: true
    });

    if (text) {
      try {
        const response = await fetch('http://localhost:8080/api/announcements/add', { // Ensure correct endpoint
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

  return (
      <div className="bg-white mt-16 mx-20 rounded-3xl shadow-lg pb-16">
        <div className="flex pt-6 justify-center text-3xl font-medium">
          Announcements
        </div>
        <div className="flex flex-col flex-grow pr-10 mb-4 mt-0">
          <div className="flex items-center justify-center ml-auto my-3 mr-5">
            <Button type="primary" onClick={handleAddClick}>
              <div className="text-lg">ADD</div>
              <IoMdAddCircleOutline className="text-xl mt-0.5 -ml-1" />
            </Button>
          </div>
        </div>
        <div className="mx-14 mb-10">
          {announcements.map((announcement) => (
              <Card key={announcement.id} className='bg-slate-100'>
                <p className="text-lg">{announcement.announcement}</p>
                <div className="flex justify-end text-slate-500 text-sm">
                  {new Date(announcement.timestamp).toLocaleString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </div>
              </Card>
          ))}
        </div>
      </div>
  );
};

export default App;
