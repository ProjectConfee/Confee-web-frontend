// import React from 'react';
// import { Input } from 'antd';

// import { InboxOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { message, Upload } from 'antd';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import { Button, Space } from 'antd';

// const { TextArea } = Input;
// const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     console.log('Change:', e.target.value);
//   };
//   const { Dragger } = Upload;

//   const props: UploadProps = {
//     name: 'file',
//     multiple: true,
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     onChange(info) {
//       const { status } = info.file;
//       if (status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully.`);
//       } else if (status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//     onDrop(e) {
//       console.log('Dropped files', e.dataTransfer.files);
//     },
//   };
//   const [passwordVisible, setPasswordVisible] = React.useState(false);
// const App: React.FC = () => (
  

// <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
// <div className='flex flex-col justify-center items-center h-full mt-20 ml-50'>
// <h2 className="text-2xl font-semibold text-center mt-[-10]">Badge Details</h2><br></br><br></br>
// <div><p>Name of the Company:</p><br></br>
// <Input  size="large" placeholder="Company Name" style={{ width: '600px' }}/></div>
// </div>
//     {/* <br></br><br></br> */}
//     {/* <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>
//       <p>Privilages:</p><br></br>
//       <TextArea
//       showCount
//       maxLength={100}
//       onChange={onChange}
//       placeholder="Enter the Privilages"
//       style={{ height: 120, resize: 'none' ,width:'600px'}}
//     />
      
//     </div> */}
//     <br></br><br></br>
//     <div><p>Company Email:</p><br></br><Input  size="large" placeholder="Company Email" style={{ width: '600px' }}/></div>
//     <br></br><br></br>



//     <Space direction="vertical">
//       <Input.Password placeholder="input password" />
//       <Input.Password
//         placeholder="input password"
//         iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//       />
//       <Space direction="horizontal">
//         <Input.Password
//           placeholder="input password"
//           visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
//         />
//         <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
//           {passwordVisible ? 'Hide' : 'Show'}
//         </Button>
//       </Space>
//     </Space>
//     <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>
//       <p>Upload the Badge:</p><br></br>
//       <Dragger {...props} style={{ width: '600px' }}>
//     <p className="ant-upload-drag-icon  " >
//       <InboxOutlined />
//     </p>
//     <p className="ant-upload-text">Click or drag file to this area to upload</p>
//     <p className="ant-upload-hint">
//       Support for a single or bulk upload. Strictly prohibited from uploading company data or other
//       banned files.
//     </p>
//   </Dragger>
      
//     </div>
    
//     <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>
   
//   </div>
   
  
// </div>

// );
// export default App;
import React, { useState } from 'react';
import { Input, message, Upload, Button, Space } from 'antd';
import { InboxOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import {  Flex } from 'antd';

const { TextArea } = Input;
const { Dragger } = Upload;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const uploadProps: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const App: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
      <div className='flex flex-col justify-center items-center h-full mt-20 ml-50'>
        <h2 className="text-2xl font-semibold text-center mt-[-10]">Sponsor Registration</h2>
        <br /><br />
        <div className='mb-8'>
          <p>Name of the Company:</p>
          <br />
          <Input size="large" placeholder="Company Name" style={{ width: '600px' }} />
        </div>
        <div className='mb-8'>
          <p>Company Email:</p>
          <br />
          <Input size="large" placeholder="Company Email" style={{ width: '600px' }} />
        </div>
        <div className='mb-8'>
          <p>Password:</p>
          <br />
          <Space direction="vertical" style={{ width: '600px' }}>
            
            <Space direction="horizontal">
              <Input.Password
                placeholder="input password"
                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                style={{ width: 600 }}
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
          <br />
          <Input size="large" placeholder="Company Badge Name" style={{ width: '600px' }} />
        </div>
      </div>
      
      <Flex gap="small" wrap>
    <Button type="primary">Submit</Button>
    
  </Flex>
    </div>
  );
};

export default App;







 



  







  










