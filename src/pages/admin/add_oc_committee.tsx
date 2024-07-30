import { useState } from 'react';
import Swal from 'sweetalert2';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Button, Input, List } from 'antd';

const App = () => {
  const [email, setEmail] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [committeeMembers, setCommitteeMembers] = useState([
    { name: 'K.M.G.K. Viranga Dias' },
    { name: 'Keshali Dhananajana' },
    { name: 'Viraji Dewmini' },
    { name: 'Ayesh Pramuditha' },
    { name: 'Ranuri Diassanayaka' },
  ]);

  const handleAddClick = () => {
    if (email && nicNumber) {
      const newMember = { name: email };
      setCommitteeMembers([...committeeMembers, newMember]);
      setEmail('');
      setNicNumber('');
      Swal.fire('Added to OC Committee', `You added: ${email}`, 'success');
    } else {
      Swal.fire('Error', 'Please fill in both fields', 'error');
    }
  };

  return (
    <div className="bg-white mt-16 mx-80 rounded-xl shadow-2xl pb-16">
      <div className="flex pt-6 mb-1 justify-center text-3xl font-medium">OC Committee</div>
      <div className="flex flex-col flex-grow pr-10 mb-8 mt-0">
        <div className="flex justify-center mt-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: 10, width: 150 }}
          />
          <Input
            placeholder="NIC Number"
            value={nicNumber}
            onChange={(e) => setNicNumber(e.target.value)}
            style={{ marginRight: 10, width: 150 }}
          />
          <Button className="ml-2" type="primary" onClick={handleAddClick}>
            <div className="flex items-center text-lg">
              Add
              <IoMdAddCircleOutline className="text-xl mt-0.5 ml-1" />
            </div>
          </Button>
        </div>
      </div>
      <div className="px-20">
        <List
          itemLayout="horizontal"
          dataSource={committeeMembers}
          renderItem={(member, index) => (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    setCommitteeMembers(committeeMembers.filter((_, i) => i !== index));
                    Swal.fire('Removed', `${member.name} has been removed from the OC committee`, 'success');
                  }}
                >
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta title={member.name} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default App;
