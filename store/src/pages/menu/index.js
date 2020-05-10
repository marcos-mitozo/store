import React, { useState } from 'react'
import '../../App.less'
import 'antd/dist/antd.less'
import { Layout, Menu, Breadcrumb } from 'antd'
import { SettingOutlined, SketchOutlined } from '@ant-design/icons'

import Home from '../home/index'
import { Register } from '../forms/user-register/index'
import { ProductRegister } from '../forms/product-register/index'
import Rings from '../jewels/rings/index'
import Necklaces from '../jewels/necklaces/index'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function MainMenu() {
    return (
        <Router>
            <Layout>
                <Header className="header" style={{ backgroundColor: "#780d54", height: 40 }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: "40px", backgroundColor: "#780d54", color: "#FFFFFF" }}
                    >
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2" style={{ float: "right" }}><Link to="/register">Registrar-se</Link></Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <SettingOutlined />
                                     Configurações
                                </span>
                            }
                            style={{ float: "right" }}
                        >
                            <Menu.ItemGroup title="Gerenciar" style={{ backgroundColor: "#540138" }}>
                                <Menu.Item key="setting:1"><Link to="/product-register">Novo Produto</Link></Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </Header>
                <Layout>
                    <Sider
                        collapsible
                        breakpoint="md"
                        width={220}
                        className="site-layout-background"
                        style={{
                            overflow: "auto",
                            height: "100vh",
                            backgroundColor: "white"
                        }}
                        theme="light"
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <SketchOutlined />
                                        Jóias
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to="/rings">Anéis</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/necklaces">Colares</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px', backgroundColor: "#ffedf9" }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 600,
                                backgroundColor: "#fce3f4"
                            }}
                        >
                            {
                                <Switch>
                                    <Route path="/rings">
                                        <Rings />
                                    </Route>
                                    <Route path="/necklaces">
                                        <Necklaces />
                                    </Route>
                                    <Route path="/register">
                                        <Register />
                                    </Route>
                                    <Route path="/product-register">
                                        <ProductRegister />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router >
    )
}

export default MainMenu;
