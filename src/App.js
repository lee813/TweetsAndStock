import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import Criterion from "./Criterion";
import "./App.css";

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state={}
  loadTwitter = tweets => {
    this.setState({
      tweets
    });
  };
  render() {
    const { tweets } = this.state;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Row>
            <Col span={8}>
              <Criterion loadTwitter={this.loadTwitter} />
            </Col>
            <Col>
              <div>
                {tweets && tweets.map(tweet => <div>{tweet.text}
                <div>------------</div></div>)}
              </div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Tweets and Stock, Copyright by Frank Lee.
        </Footer>
      </Layout>
    );
  }
}

export default App;
