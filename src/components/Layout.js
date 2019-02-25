import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Switch, NavLink } from 'react-router-dom';
import './style.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
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
    let link = menu.item.props['data-component'];
    let breadcrumb = menu.item.props['data-breadcrumb'];
    if (link) {
      let key = menu.key;
      let idx = key.indexOf(':');
      //key = idx > -1 ? key.substring(0, idx) : key;
      console.log(menu, key);
      this.setState({
        selectedKeys: [key],
        breadcrumbs: ['Home', ...breadcrumb],
      });
    }
  }
  componentWillMount() {
    let url = this.props.location.pathname;
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
              return !el.submenu ? (
                <Menu.Item
                  key={el.name}
                  data-component={!!el.link}
                  data-breadcrumb={[el.text]}
                >
                  {el.link ? (
                    <NavLink to={el.link} exact>
                      {el.icon && <Icon type={el.icon} />}
                      {el.text}
                    </NavLink>
                  ) : (
                    <span>
                      {el.icon && <Icon type={el.icon} />}
                      {el.text}
                    </span>
                  )}
                </Menu.Item>
              ) : (
                <SubMenu
                  title={
                    <span className='submenu-title-wrapper'>
                      <Icon type='setting' />
                      {el.text}
                    </span>
                  }
                  key={el.name}
                >
                  {el.submenu.map(ele => {
                    return (
                      <Menu.Item
                        key={ele.name}
                        data-component={true}
                        data-breadcrumb={[el.text, ele.text]}
                      >
                        <NavLink to={ele.link} exact>
                          {ele.icon && <Icon type={ele.icon} />}
                          {ele.text}
                        </NavLink>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {this.state.breadcrumbs.map(el => {
              return <Breadcrumb.Item key={el}>{el}</Breadcrumb.Item>;
            })}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
            <Switch>
              {this.props.routes.map((el, index) => {
                return (
                  el.component && (
                    <Route
                      key={index}
                      path={el.link}
                      component={el.component}
                      // render={(props) => (<el.component {...props}/>)}
                    />
                  )
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
