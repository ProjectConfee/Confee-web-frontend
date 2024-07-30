







import {Button} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import {  Result } from 'antd';
import {Link} from "react-router-dom";


const App = () => {
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
  

  return (
    <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">

        <div style={{width: '60%', margin: '0 auto', alignItems: 'center', padding: '40px', marginTop: '60px'}}>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined/>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>
            <div className="flex items-center justify-center h-screen">
                <div className="text-center mb-80">
                    <Link to="/resource-home"> {/* Adjust the path as needed */}
                        <Button     type="primary" style={{ backgroundColor: '#3572EF', borderColor: '#3572EF' }}>Back to Homepage</Button>
                    </Link>
                </div>
                <br></br><br></br><br></br>


            </div>

            <div className="flex items-center justify-center h-screen">
                <div className="text-center mt-20">
                    <Result
                        status="success"
                        title="Successfully Uploaded your Resources!"
                        subTitle="Thank you for the support."
                        extra={[]}
                    />
                </div>
            </div>

        </div>


    </div>

  )
      ;
};

export default App;
