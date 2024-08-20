import { Typography, Card } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

import './ContactUs.css'

const { Title } = Typography;

const ContactUs = () => {
    return (
        <>
            <Title level={2} style={{ color: '#000' }}>Contact Us</Title>
            <div className='contact'>
                <Card title="Address" style={{ width: 300 }}>
                    <p>
                        <b>Soul-Centric</b><br />
                        20, Aarti flat, <br />
                        Kaanala, Shlpi Nagar, <br />
                        Bhvnagar, Guarat 364001, <br />
                    </p>
                </Card>
                <Card title="Contact Info" style={{ width: 300 }}>
                    <li> <PhoneOutlined /> +91 9762184784</li>
                    <li> <PhoneOutlined /> +91 9762184784</li>
                    <br />
                    <li> <MailOutlined /> info@Soulcentric.com</li>
                    <li> <MailOutlined /> sales@Soulcentric.com</li>
                </Card>

                <Card title="Map" style={{ width: 300 }}>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.2431384826177!2d72.14054539678955!3d21.770849000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5b9277524a65%3A0xbc65ace8d18a3eb8!2sSoul-Centric%20Golden%20Age%20Pvt.%20Ltd.%20Organic%20product%20for%20weight%20loss%2C%20weight%20gain%20%26%20immunity%20boost!5e0!3m2!1sen!2sus!4v1724063522483!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                    </div>
                </Card>


            </div>

        </>
    )
}

export default ContactUs;