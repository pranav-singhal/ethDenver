import React from 'react';
import {getProjects} from "../../connections/httpInteractions";
import AppController from "./AppController";
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    Form,
    Dropdown,
    Button
} from "react-bootstrap";

export default class AdminApps extends React.Component {
    state = {
        apps: []
    }

    async componentWillMount() {

        await this.getListofApps()
    }

    getListofApps = async () => {
        // get username and password of admin from localstorage
        const adminUsername = localStorage.getItem('adminUsername')
        const adminPassword = localStorage.getItem('adminPassword')
        const appList = await getProjects(adminUsername)
        console.log('applist', appList)
        this.setState({apps: appList})

        // use details to get list of apps of this admin

    }

    render() {

        return (
            <Container className={'admin-apps'}>
                <Row>
                    <Nav>
                        <h1>Welcome {localStorage.getItem('adminUsername')}</h1>
                        <Nav className={'justify-content-end'}>
                            <Nav.Item>

                                <Nav.Link onClick={() => {
                                    this.props.history.push('create-new-app')
                                }}>Create Another APP</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Nav>
                </Row>
                <Row className={'dashboard-description'}>
                    <Col md={1}/>
                    <Col md={10}>

                        <p>This is your DashBoard, below is the list of Apps you have created using CypherPress</p>
                        <p>You can see the users using your apps, and choose which of them can using them for sharing
                            information( incase you dont want just anyone sharing data using your apps)</p>
                    </Col>
                    <Col md={1}/>
                </Row>
                <Row>

                    {this.state.apps.map(appName => {
                        return (
                            <Col md={6} className={'app-controller'}>
                                <Col md={11}>
                                    <AppController key={appName} appName={appName}/>
                                </Col>
                                <Col md={1}/>

                            </Col>)
                    })}
                </Row>
                {/*{await this.renderAppControllers()}*/}
                {/*<AppController appName={this.state.apps}/>*/}
                {/*<AppController />*/}
                {/*    <AppController />*/}
                {/*    <AppController />*/}
            </Container>

        )
    }
}