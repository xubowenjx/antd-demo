import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Switch, NavLink } from 'react-router-dom';
import './style.css';
const { Header, Content, Footer } = Layout;
class Layouter extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedKeys: [],
      breadcrumbs: [],
    };
  }
  selectMenu(menu) {
    this.setState({
      selectedKeys: [menu.key],
      breadcrumbs: ['Home', menu.key],
    });
  }
  componentWillMount() {
    let url = this.props.location.pathname;
    console.log(this.props.routes);
    for (let idx in this.props.routes) {
      let r = this.props.routes[idx];
      if (r.link === url) {
        this.setState({
          selectedKeys: [r.name],
          breadcrumbs: ['Home', r.name],
        });

        break;
      }
    }
  }
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            selectedKeys={this.state.selectedKeys}
            onSelect={this.selectMenu.bind(this)}
            style={{ lineHeight: '64px' }}
          >
            {this.props.routes.map((el, index) => {
              return (
                <Menu.Item key={el.name}>
                  <NavLink exact to={el.link}>
                    {el.text}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {this.state.breadcrumbs.map(el => {
              return <Breadcrumb.Item>{el}</Breadcrumb.Item>;
            })}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
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
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Layouter;
