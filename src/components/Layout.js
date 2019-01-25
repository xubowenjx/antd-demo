import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Route, Switch, Link } from "react-router-dom";
import "./style.css";
const { Header, Content, Footer } = Layout;
class Layouter extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            {this.props.routes.map((el, index) => {
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
              {this.props.routes.map((el, index) => {
                return (
                  <Route
                    key={index}
                    path={el.link}
                    component={el.component}
                    // render={(props) => (<el.component {...props}/>)}
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
    );
  }
}

export default Layouter;
