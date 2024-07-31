import { SetStateAction, useState } from 'react';
import Swal from 'sweetalert2';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Button, List, Avatar, Select } from 'antd';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAddClick = async () => {
    if (selectedOption) {
      console.log('Selected option:', selectedOption);
      Swal.fire('Added as a Winner', `You selected: ${selectedOption}`, 'success');
    } else {
      Swal.fire('Error', 'Please select a name', 'error');
    }
  };

  const handleSelectChange = (value: SetStateAction<null>) => {
    setSelectedOption(value);
  };

  const data = [
    { name: 'K.M.G.Kavindu Viranga Dias', profilePic: './src/assets/event1.jpeg' },
    { name: 'Keshali Dhananjana', profilePic: './src/assets/event1.jpeg' },
    { name: 'Viraji Dewmini', profilePic: './src/assets/event1.jpeg' },
    { name: 'Ranuri Dissanayake', profilePic: './src/assets/event1.jpeg' },
    { name: 'Ayesh Pramudith', profilePic: './src/assets/event1.jpeg' },
  ];

  return (

    <div className="bg-white mt-16 mx-40 rounded-xl shadow-2xl pb-16">

      <div className="flex pt-6 mb-1 justify-center text-3xl font-medium">
        Winners
      </div>
      <div className="flex flex-col flex-grow pr-10 mb-8 mt-0">
        <div className="flex justify-center mt-4">
          <Select
          className='size-9'
            showSearch
            style={{
              width: 200,
              marginRight: 10,
            }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            onChange={handleSelectChange}
            options={[
              {
                value: 'Viranga Dias',
                label: 'Viranga Dias',
              },
              {
                value: 'Keshali Dhananajana',
                label: 'Keshali Dhananajana',
              },
              {
                value: 'Viraji Dewmini',
                label: 'Viraji Dewmini',
              },
              {
                value: 'Ayesh Pramuditha',
                label: 'Ayesh Pramuditha',
              },
              {
                value: 'Ranuri Diassanayaka',
                label: 'Ranuri Diassanayaka',
              },
             
            ]}
          />
          <Button className='ml-2' type="primary" onClick={handleAddClick}>
            <div className="flex items-center text-lg">
              Add
              <IoMdAddCircleOutline className="text-xl mt-0.5 ml-1" />
            </div>
          </Button>
        </div>
      </div>
      <div className="px-20">
        <List
          className="text-lg"
          size="small"
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="flex items-center">
              <List.Item.Meta
                avatar={<Avatar className="ml-5 mr-3 size-10" src={item.profilePic} />}
                title={<div className="mt-1 h-full text-lg">{item.name}</div>}
              />
              <Button className="text-lg mr-4" type="primary" danger>
                Delete
              </Button>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default App;
