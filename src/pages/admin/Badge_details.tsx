import React from 'react';
import { Input } from 'antd';

import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { Button, Flex } from 'antd';
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };
  const { Dragger } = Upload;

  const props: UploadProps = {
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
const App: React.FC = () => (


<div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-5 rounded-lg'>

<h2 className="text-2xl font-semibold text-center mt-[-10]">Badge Details</h2><br></br><br></br>
<div><p>Name of the Badge:</p><br></br>
<Input  size="large" placeholder="Badge Name" style={{ width: '600px' }}/></div>

    <br></br><br></br>

      <p>Privilages:</p><br></br>
      <TextArea
      showCount
      maxLength={100}
      onChange={onChange}
      placeholder="Enter the Privilages"
      style={{ height: 120, resize: 'none' ,width:'600px'}}
    />


    <br></br><br></br>
    {/*<div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>*/}
      <p>Upload the Badge:</p><br></br>
      <Dragger {...props} style={{ width: '600px' }}>
    <p className="ant-upload-drag-icon  " >
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>

    {/*</div>*/}

    <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>

  </div>
  <br></br>
  <Flex gap="small" wrap  >
    <Button type="primary">Submit</Button>

  </Flex>

</div>

);
export default App;




















