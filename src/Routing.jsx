import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import { Layout, Menu } from "antd";

function Routing() {
    const { Header, Content, Footer } = Layout;
    const data = [
        {
            label: <Link to="/">Home</Link>,
        },
        {
            label: <Link to="/about">About</Link>,
        },
        {
            label: <Link to="/contact">Contact</Link>,
        },
    ];

    return (
        <Router>
            <Layout className="layout">
                <Header>
                    <Menu theme="dark" mode="horizontal" items={data} />
                </Header>
            </Layout>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}

            <Content
                style={{
                    padding: "50px 50px",
                }}
            >
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                </Switch>
            </Content>
        </Router>
    );
}

export default Routing;
