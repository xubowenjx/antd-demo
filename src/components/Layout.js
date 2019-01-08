import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import "./style.css";
import router from "../router";
const { Header, Content, Footer } = Layout;
class Layouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              {router.map((el, index) => {
                return (
                  <Menu.Item key={index}>
                    <Link to={el.link}>{el.text}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              <Switch>
                {router.map((el, index) => {
                  return (
                    <Route
                      exact
                      key={index}
                      path={el.link}
                      component={el.component}
                    />
                  );
                })}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default Layouter;
