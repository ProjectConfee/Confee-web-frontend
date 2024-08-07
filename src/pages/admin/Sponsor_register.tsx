
import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';

// import type { UploadProps } from 'antd';
import {  Flex } from 'antd';







const App: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center h-full ml-50'>
      <div className='flex flex-col justify-center items-center h-full mt-10 ml-50'>
        <h2 className="text-2xl font-semibold text-center mt-[-10]">Sponsor Registration</h2>
        <br/><br/>
        <div className='mb-8'>
          <p>Name of the Company:</p>
          <br/>
          <Input size="large" placeholder="Company Name" style={{width: '600px'}}/>
        </div>
        <div className='mb-8'>
          <p>Company Email:</p>
          <br/>
          <Input size="large" placeholder="Company Email" style={{width: '600px'}}/>
        </div>
        <div className='mb-8'>
          <p>Company URL  :</p>
          <br/>
          <Input size="large" placeholder="Company URL" style={{width: '600px'}}/>
        </div>
        <div className='mb-8'>
          <p>Password:</p>
          <br/>
          <Space direction="vertical" style={{width: '600px'}}>

            <Space direction="horizontal">
              <Input.Password
                  placeholder="input password"
                  visibilityToggle={{visible: passwordVisible, onVisibleChange: setPasswordVisible}}
                  style={{width: 600}}
              />
              {/* <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
                {passwordVisible ? 'Hide' : 'Show'}
              </Button> */}
            </Space>
          </Space>
        </div>
        {/* <div className='mb-8'>
          <p>Upload the Badge of the Company:</p>
          <br />
          <Dragger {...uploadProps} style={{ width: '600px' }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
            </p>
          </Dragger>
        </div> */}

        <div className='mb-8'>
          <p>Badge Name of the Company:</p>
          <br/>
          <Input size="large" placeholder="Company Badge Name" style={{width: '600px'}}/>
        </div>
      </div>

      <Flex gap="small" wrap>
        <Button type="primary">Submit</Button>

      </Flex>
    </div>
  );
};

export default App;







 



  







  










