

// import Swal from 'sweetalert2';
// import { IoMdAddCircleOutline } from 'react-icons/io';
import {  Card } from 'antd';

const App = () => {
  // const handleAddClick = async () => {
  //   const { value: text } = await Swal.fire({
  //     input: 'textarea',
  //     inputLabel: 'New Announcement',
  //     inputPlaceholder: 'Enter new announcement',
  //     inputAttributes: {
  //       'aria-label': 'Enter new announcement'
  //     },
  //     showCancelButton: true
  //   }) as { value: string | null };
  //
  //   if (text) {
  //     Swal.fire(text);
  //   }
  // };

  return (
    <>
      <div className="bg-white mt-16 mx-20 rounded-3xl shadow-lg pb-16 ">
        <div className="flex pt-6 justify-center text-3xl font-medium">
          Announcements
        </div>
        {/*<div className="flex flex-col flex-grow pr-10 mb-4 mt-0">*/}
        {/*  /!*<div className="flex items-center justify-center ml-auto my-3 mr-5">*!/*/}
        {/*  /!*  /!*<Button type="primary" onClick={handleAddClick}>*!/*!/*/}
        {/*  /!*  /!*  <div className="text-lg">*!/*!/*/}
        {/*  /!*  /!*    ADD*!/*!/*/}
        {/*  /!*  /!*  </div>*!/*!/*/}
        {/*  /!*  /!*  <IoMdAddCircleOutline className="text-xl mt-0.5 -ml-1" />*!/*!/*/}
        {/*  /!*  /!*</Button>*!/*!/*/}
        {/*  /!*</div>*!/*/}
        {/*</div>*/}
        <div className="mx-14 pb-4">
          <Card className=''>
            <p className="text-xl">Card content Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <div className="flex justify-end text-slate-500 text-lg">
              1 hour ago
            </div>
          </Card>
        </div>
        <div className="mx-14 pb-4 shadow-3xl">
          <Card className=''>
            <p className="text-xl">Card content Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <div className="flex justify-end text-slate-500 text-lg">
              1 hour ago
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default App;


