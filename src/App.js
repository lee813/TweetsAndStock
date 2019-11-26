import React from 'react';
import { Layout, Menu } from 'antd';
import Criterion from './Criterion'
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Criterion />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Tweets and Stock, Copyright by Frank Lee.</Footer>
  </Layout>
  );
}

export default App;
