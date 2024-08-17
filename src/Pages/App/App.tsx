import Home from "../Home/Home";
import { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  UserOutlined,
  InfoCircleOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Alert, Button, Layout, Menu, Spin, Typography } from 'antd';
import type { MenuProps } from 'antd';
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import './App.css';
import categoriesData from '../../Data/categories.json';
import { Category } from "../Categories/Categories.interface";
import ProductsCategory from "../Categories/Categories";
const { Title } = Typography;

const { Header, Sider, Content } = Layout;


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState('4');

  useEffect(() => {
    setLoading(true);
    try {
      setCategories(categoriesData);
    } catch (error) {
      setError('Failed to load categories');
    }
    finally {
      setLoading(false);
    }
  }, []);

  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = [
    {
      key: '4',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: () => setSelectedItem('4'),
    },
    {
      key: '1',
      icon: <ProductOutlined />,
      label: 'Categories',
      children: categories.map((category) => {
        return {
          label: category.name,
          key: `category_${category.id}`,
          disabled: category.products.length === 0,
          onClick: () => {
            setSelectedCategory(category);
          }
        };
      }),
      onClick: () => setSelectedItem('1'),
    },
    {
      key: '2',
      icon: <InfoCircleOutlined />,
      label: 'About Us',
      onClick: () => setSelectedItem('2'),
    },
    {
      key: '3',
      icon: <UserOutlined />,
      label: 'Contact Us',
      onClick: () => setSelectedItem('3'),
    },
  ]
  if (loading) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error} type="error" />;
  return (
    <>
      <Layout className={'Layout'}>
        <Sider className="Sider" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo-container">

            <img className="Logo" src="https://raw.githubusercontent.com/reniz-shah/Soul-Centric/main/src/assets/logo.png" alt="" />
            {
              collapsed ? null :
                <Title className="LogoTitle" level={4}>Soul Centric</Title>

            }
          </div>


          <Menu
            mode="inline"
            defaultSelectedKeys={['4']}
            items={items}
          />
        </Sider>
        <Layout>
          <Header className="Header">
            <Button
              className="MenuButton"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />

          </Header>
          <Content className="Content">
            {selectedItem === '4' ? <Home /> : null}
            {selectedItem === '1' ? <ProductsCategory category={selectedCategory} /> : null}
            {selectedItem === '2' ? <AboutUs /> : null}
            {selectedItem === '3' ? <ContactUs /> : null}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
