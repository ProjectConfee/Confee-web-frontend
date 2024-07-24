// import {
//     Button,
//     Checkbox,
//     Col,
//     DatePicker,
//     Divider,
//     Form,
//     Input,
//     Row,
//     Select,
//     Space,
//     TimePicker,
//     Typography
// } from "antd";
// import moment from 'moment';
// import {CheckboxChangeEvent} from "antd/es/checkbox";
// import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
//
//
// // import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
//
// const { Title } = Typography;
// const handleChange = (value: string) => {
//     console.log(`selected ${value}`);
// };
//
// const format = 'HH:mm';
// const checked = (e:CheckboxChangeEvent) => {
//     console.log(`checked = ${e.target.checked}`);
// };
//
// const onFinish = (values:never) => {
//     console.log('Received values of form:', values);
// };
//
// const onChange = (time: moment.Moment | null, timeString: string | string[]) => {
//     console.log(time, timeString);
// };
//
// const App = () => (
//     <>
//
//         <div className="bg-white mt-20 rounded-lg shadow-lg p-8">
//             <div className=" flex justify-center items-center mb-6">
//                 <Title level={3}>Add Conference Event</Title>
//             </div>
//
//             <div>
//                 <Row gutter={32}>
//                     <Col span={12}>
//
//                         <Form.Item name={['user', 'type']}>
//                             <div>
//                                 <label className="mb-2 font-medium text-gray-700">Type</label>
//                             </div>
//                             <div className="mt-2">
//                                 <Select
//                                     defaultValue="Select event type"
//
//                                     onChange={handleChange}
//                                     options={[
//                                         {
//                                             value: 'Conference Day 1',
//                                             label: 'Conference Day 1',
//                                         },
//                                         {
//                                             value: 'Conference Day 2',
//                                             label: 'Conference Day 2',
//                                         },
//                                         {
//                                             value: 'Pre Conference Workshops',
//                                             label: 'Pre Conference Workshops',
//                                         },
//                                         {
//                                             value: 'Post Conference Workshops',
//                                             label: 'Post Conference Workshops',
//                                         }
//                                     ]}
//                                 />
//                             </div>
//
//                         </Form.Item>
//                     </Col>
//
//                     <Col span={12}>
//                         <Form.Item name={['user', 'name']}>
//                             <div>
//                                 <label className="mb-2 font-medium text-gray-700">Title</label>
//                             </div>
//                             <Input className="mt-2"/>
//                         </Form.Item>
//                     </Col>
//                 </Row>
//
//                 <Form.Item name={['user', 'description']}>
//                     <div className="flex flex-col">
//                         <label className="mb-2 font-medium text-gray-700">Description</label>
//                         <Input.TextArea className="w-full"/>
//                     </div>
//                 </Form.Item>
//
//                 <Row gutter={32}>
//                     <Col span={12}>
//                         <Form.Item name={['user', 'date']}>
//                             <div className="flex flex-col">
//                                 <label className="mb-2 font-medium text-gray-700">Date</label>
//                                 <DatePicker onChange={onChange}/>
//                             </div>
//                         </Form.Item>
//                     </Col>
//
//                     <Col span={12}>
//                         <Form.Item name={['user', 'time']}>
//                             <div className="flex flex-col">
//                                 <label className="mb-2 font-medium text-gray-700">Time</label>
//                                 <TimePicker.RangePicker/>
//                             </div>
//                         </Form.Item>
//                     </Col>
//                 </Row>
//
//                 <Row gutter={32}>
//                     <Col span={12}>
//                         <Form.Item name={['user', 'venue']}>
//                             <div className="flex flex-col">
//                                 <label className="mb-2 font-medium text-gray-700">Venue</label>
//                                 <Input/>
//                             </div>
//                         </Form.Item>
//                     </Col>
//
//                     <Col span={12}>
//                         <Form.Item name={['user', 'investment']}>
//                             <div className="flex flex-col">
//                                 <label className="mb-2 font-medium text-gray-700">Investment</label>
//                                 <Input/>
//                             </div>
//                         </Form.Item>
//                     </Col>
//                 </Row>
//
//                 <Checkbox onChange={checked}>Lunch and refreshments are provided </Checkbox>
//
//                 <div>
//                     <Divider></Divider>
//                     <Title level={4}>Schedule</Title>
//                     <div>
//                         <Form
//                             name="dynamic_form_nest_item"
//                             onFinish={onFinish}
//                             // style={{
//                             //     maxWidth:'50%',
//                             // }}
//                             autoComplete="off"
//                         >
//
//                             <Form.List name="users">
//                                 {(fields, {add, remove}) => (
//                                     <>
//                                         {fields.map(({key, name, ...restField}) => (
//                                             <Space
//                                                 key={key}
//                                                 style={{
//                                                     display: 'flex',
//                                                     marginBottom: 8,
//                                                 }}
//                                                 align="baseline"
//                                             >
//
//                                                 <Form.Item
//                                                     {...restField}
//                                                     name={[name, 'time']}
//                                                 >
//                                                     <TimePicker format={format} style={{width: '200px'}}/>
//                                                 </Form.Item>
//
//                                                 <Form.Item
//                                                     {...restField}
//                                                     name={[name, 'event']}
//                                                 >
//                                                     <Input placeholder="Event" style={{width: '200px'}}/>
//                                                 </Form.Item>
//
//                                                 <Divider type={"vertical"}></Divider>
//
//                                                 <Form.Item
//                                                     {...restField}
//                                                     name={[name, 'author']}
//
//                                                 >
//                                                     <Input placeholder="Author" style={{width: '200px'}}/>
//                                                 </Form.Item>
//
//                                                 <Form.Item
//                                                     {...restField}
//                                                     name={[name, 'org']}
//
//
//                                                 >
//                                                     <Input placeholder="Organization/University"
//                                                            style={{width: '200px'}}/>
//                                                 </Form.Item>
//
//                                                 <Form.Item
//                                                     {...restField}
//                                                     name={[name, 'topic']}
//
//
//                                                 >
//                                                     <Input placeholder="Topic" style={{width: '200px'}}/>
//                                                 </Form.Item>
//
//                                                 <MinusCircleOutlined onClick={() => remove(name)}/>
//                                             </Space>
//                                         ))}
//                                         <Form.Item style={{maxWidth: '50%'}}>
//                                             <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
//                                                 Add field
//                                             </Button>
//                                         </Form.Item>
//                                     </>
//                                 )}
//                             </Form.List>
//                         </Form>
//                     </div>
//
//
//                 </div>
//
//                 <div className="flex justify-end mb-2">
//                     <Button type="primary" size="large">Add Event</Button>
//                 </div>
//             </div>
//
//         </div>
//     </>
// );
//
// export default App
