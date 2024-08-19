import React from 'react';
import { Form, Input, Button, Typography, Row, Col, message } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';

const ENV = import.meta.env


const { Title } = Typography;

const Inquiry: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();


    const success = (msg:string) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };

    const error = (msg:string) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };


    const sendEmail = (values: any) => {
        const templateParams = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message
        };

        emailjs.send(ENV.VITE_APP_EMAILJS_SERVICE_ID, ENV.VITE_APP_EMAILJS_TEMPLATE_ID, templateParams, ENV.VITE_APP_EMAILJS_PUBLIC_KEY)
            .then((response) => {
                console.log('Response: ', response);
                success('Inquiry sent successfully')
            })
            .catch((error) => {
                error('Something Went Wrong')
            });
    };

    const onFinish = (values: any) => {
        sendEmail(values);
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        error('Something Went Wrong')
    };

    return (
        <>
        {contextHolder}
            <Row justify="center">
                <Col span={12}>
                    <Title level={2} style={{ color: '#000' }}>Get a Quote</Title>
                    <Form
                        name="inquiry"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<MailOutlined />} />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input prefix={<PhoneOutlined />} />
                        </Form.Item>
                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                            <Input.TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Inquiry;