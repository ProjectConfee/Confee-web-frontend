import { List, Avatar, Button } from 'antd';

const App = () => {
  const data = [
    {
      name: 'K.M.G.Kavindu Viranga Dias',
      profilePic: './src/assets/event1.jpeg',
      university: 'University of Colombo',
    },
    {
      name: 'K.M.G.Kavindu Viranga Dias',
      profilePic: './src/assets/event1.jpeg',
      university: 'University of Colombo',
    },
    {
      name: 'K.M.G.Kavindu Viranga Dias',
      profilePic: './src/assets/event1.jpeg',
      university: 'University of Colombo',
    },
    {
      name: 'K.M.G.Kavindu Viranga Dias',
      profilePic: './src/assets/event1.jpeg',
      university: 'University of Colombo',
    },
    {
      name: 'K.M.G.Kavindu Viranga Dias',
      profilePic: './src/assets/event1.jpeg',
      university: 'University of Colombo',
    },
  ];

  const handleViewPaperClick = (name: string) => {
    console.log(`View Paper clicked for: ${name}`);
    // Add logic to view the paper
  };

  return (
      <div className="bg-white mt-16 mx-80 rounded-xl shadow-2xl pb-16">
        <div className="flex pt-6 mb-6 justify-center text-3xl font-medium">
          Winners
        </div>
        <div className="px-20">
          <List
              className="text-lg"
              size="small"
              bordered
              dataSource={data}
              renderItem={(item) => (
                  <List.Item className="flex items-center justify-between">
                    <List.Item.Meta
                        avatar={<Avatar className="ml-5 mr-3 size-10 mt-2" src={item.profilePic} />}
                        title={
                          <div className="mt-1 h-full text-lg">
                            {item.name}
                            <div className="text-sm text-gray-500">{item.university}</div>
                          </div>
                        }
                    />
                    <Button className="ml-2" type="primary" onClick={() => handleViewPaperClick(item.name)}>
                      View Profile
                    </Button>
                  </List.Item>
              )}
          />
        </div>
      </div>
  );
};

export default App;
