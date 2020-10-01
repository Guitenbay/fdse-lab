import React from 'react';
import { Tabs, Form, Input, Button, Select, Table } from 'antd';
import 'antd/dist/antd.css'
import './StudentForm.css'
import  { get, post, put, deleteFunction } from '../request/requst'
import { URL_ROOT } from '../api.config';

const { Option } = Select;
const { TabPane } = Tabs;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class StudentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ListTotal:0,
            data:[]
        };
    }

    componentWillMount(){
        this.getStudentData();
    }

    getStudentData(){
        const url = `${URL_ROOT}/api/v1/student`;
        get(url).then(d=>{
            if(d.data && d.code === 200){
                this.setState({
                    ListTotal:d.data.length,
                    data:d.data
                })
            }
        })
    }

    onAddStudentInfo = values => {
        let studentInfo = {
            "studentList": [],
        };
        let studentList = [];
        studentList.push(values);
        studentInfo.studentList = studentList;
        const url = `${URL_ROOT}/api/v1/student`;
        post(url, studentInfo).then(d=>{
            alert(d.msg);
            if(d.msg === "success!"){
                this.getStudentData();
            }
        })
    };

    onChangeStudentInfo = values => {
        const url = `${URL_ROOT}/api/v1/student`;
        put(url, values).then(d=>{
            alert(d.msg);
            if(d.msg === "success!"){
                this.getStudentData();
            }
        })
    }

    onDeleteStudentInfo = values => {
        const url = `${URL_ROOT}/api/v1/student`;
        deleteFunction(url, values).then(d=>{
            alert(d.msg);
            if(d.msg === "success!"){
                this.getStudentData();
            }
        })
    }

    render(){
        const { data, ListTotal } = this.state;
        const Pagination = {
            total:ListTotal,
            defaultPageSize:8,
            defaultCurrent:1,
            showSizeChanger:true,
            showQuickJumper:true,
            pageSizeOptions:[5,8,10,15,20],
            hideOnSinglePage:false,
            showTotal:total => "共" + total + "条"
        }
        const columns = [
            {
                title: '学号',
                dataIndex: 'studentId',
                width: 200,
                defaultSortOrder: "ascend",
                sorter: (a, b) => parseInt(a.studentId) - parseInt(b.studentId)
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: 200
            },
            {
                title: '院系',
                dataIndex: 'department',
                width: 200
            },
            {
                title: '专业',
                dataIndex: 'major',
                width: 200
            }
        ];
        return(
            <div className="tabsList">
                <Tabs defaultActiveKey="1"  tabPosition={"top"}>
                    <TabPane tab="添加学生信息" key="1">
                        <div className="title">添加学生信息</div>
                        <Form {...layout} name="control-ref" onFinish={this.onAddStudentInfo}>
                            <Form.Item name="studentId" label="学号" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="department" label="院系" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Select a department option"
                                    allowClear
                                >
                                    <Option value="计算机学院">计算机学院</Option>
                                    <Option value="软件学院">软件学院</Option>
                                    <Option value="信息学院">信息学院</Option>
                                    <Option value="法学院">法学院</Option>
                                    <Option value="商学院">商学院</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="major" label="专业" rules={[{ required: true }]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="查看学生信息" key="2">
                        <div className="title">学生信息表</div>
                        <div style={{width:"90%", marginLeft:"5%"}}>
                            <Table
                                columns={columns} dataSource={data} pagination={Pagination}
                            />
                        </div>
                    </TabPane>
                    <TabPane tab="修改学生信息" key="3">
                        <div className="title">修改学生信息</div>
                        <Form {...layout} name="control-ref" onFinish={this.onChangeStudentInfo}>
                            <Form.Item name="studentId" label="学号" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="department" label="院系" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Select a department option"
                                    allowClear
                                >
                                    <Option value="计算机学院">计算机学院</Option>
                                    <Option value="软件学院">软件学院</Option>
                                    <Option value="信息学院">信息学院</Option>
                                    <Option value="法学院">法学院</Option>
                                    <Option value="商学院">商学院</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="major" label="专业" rules={[{ required: true }]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="删除学生信息" key="4">
                        <div className="title">删除学生信息</div>
                        <Form {...layout} name="control-ref" onFinish={this.onDeleteStudentInfo}>                            
                            <Form.Item name="studentId" label="选择删除学号" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Select a studentId delete"
                                    allowClear
                                >
                                    {
                                        data.map(index=>{
                                            return(        
                                                <Option value={index.studentId}>{index["studentId"]}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default StudentForm;