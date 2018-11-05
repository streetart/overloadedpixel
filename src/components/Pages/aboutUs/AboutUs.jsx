import React, {Component} from 'react';
import {Card, Col, Icon, Row, Skeleton} from "antd";
import {
    AboutDesc,
    AboutHero,
    CardBody, Iconic,
    MainWrapper,
    MeetTheTeam,
    Placeholder,
    TopDesc,
    WhatWeDo
} from "./AboutUS.styles";

import {Link} from "react-router-dom";




const AboutContent = [
    {
        title: "Art of Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt laboret dolore magna ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    },
    {
        title: "Clean Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt laboret dolore magna ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    },
    {
        title: "Creating Brand consistence",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt laboret dolore magna ut consequat siad esqudiat dolor",
        path: "r",
        btnText: 'Read More'
    }
];
const ServicesContentRowOne = [
    {

        iconImg: "highlight",
        title: "Art Of Coding",
        desc: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    },
    {
        iconImg: "layout",
        title: "Responsive Design",
        desc: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    },
    {
        iconImg: "laptop",
        title: "Feature research",
        desc: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    }
];


const ServicesContentRowTwo = [
    {

       iconImg: "read",
        title: "Useful Documentation",
        desc: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    },
    {
        iconImg: "rest",
        title: "Fast Delivery",
        desc: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    },
    {
        iconImg: "folder-open",
        title: "Free Resources",
        desc: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        path: "",
        btnText: 'Read More'
    }
];

const TheTeam = [
    {
        profilePic: "http://www.overloadedpixel.com/static/img/01.jpg",
        imgAlt: "",
        TeamMember: "Blaine Lingard",
        Position: "Developer & Project Manager",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt laboret dolore magna ut consequat siad esqudiat dolor",
        DribbleLink: "",
        twitterLink: "",
        contactLink: "hello@overloadedpixel.com"
    },
    {
        profilePic: "http://www.overloadedpixel.com/static/img/02.jpg",
        imgAlt: "",
        TeamMember: "Calvin Smith",
        Position: "UX Engineer & Ui Designer",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt laboret dolore magna ut consequat siad esqudiat dolor",
        DribbleLink: "",
        twitterLink: "",
        contactLink: "hello@overloadedpixel.com"
    },
    {
        profilePic: "http://www.overloadedpixel.com/static/img/03.jpg",
        imgAlt: "",
        TeamMember: "Ryan Smith",
        Position: "Ui Designer & Prototype Animator",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt laboret dolore magna ut consequat siad esqudiat dolor",
        DribbleLink: "",
        twitterLink: "",
        contactLink: "hello@overloadedpixel.com"
    }
];

class AboutUs extends Component {
    state = {
        loading: false,
    };

    Skeleton = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.state({loading: true});
        }, 344000);
    };

    render() {
        return (
            <React.Fragment>
                <AboutHero>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                        enim minim estudiat veniam siad venumus dolore</p>
                </AboutHero>
                <MainWrapper>
                    <TopDesc>
                        <Row gutter={16}>
                            {AboutContent.map(({title, desc, path, btnText }) =>
                                <Col key={ title } className="gutter-row" xs={24} sm={4} lg={8}>
                                    <h3>{ title }</h3>
                                    <p>{ desc }</p>
                                    <Link to={ path } className="link">{ btnText }</Link>
                                </Col>
                             )}
                        </Row>
                    </TopDesc>
                    <AboutDesc>
                        <Row>
                            <Skeleton loading={this.state.loading}>
                                <Col span={14}>
                                    <h3>About Us</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut
                                        laboret dolore adipiscing elit sed tempor incididunt ut laboret dolore magna
                                        aliqua.
                                        Ut enimet minim veniam magna aliqua. Ut enim minim veniam exercitation laboris
                                        ut
                                        siad consequat siad minim enum esqudiat dolore.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut
                                        laboret dolore adipiscing elit sed tempor incididunt ut laboret dolore magna
                                        aliqua.
                                        Ut enimet minim veniam magna aliqua. Ut enim minim veniam exercitation laboris
                                        ut
                                        siad consequat siad minim enum esqudiat dolore.</p>
                                </Col>
                                <Col span={8} push={2}>
                                    <Placeholder hoverable cover={<img alt="example" style={{height: "300px"}}
                                                                       src="http://www.overloadedpixel.com/static/img/workspace.jpg"/>}/>

                                </Col>
                            </Skeleton>
                        </Row>

                    </AboutDesc>
                    <WhatWeDo>
                        <Row className="row-space-1 margin-b-2">

                            {ServicesContentRowOne.map(({iconImg, title, desc, path, btnText }) =>
                            <Col sm={8} className="sm-margin-b-2" key={title}>
                                <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                                    <div className="service" data-height="height">
                                        <div className="service-element">
                                            <Iconic type={iconImg} theme="outlined" />
                                        </div>
                                        <div className="service-info">
                                            <h3>{ title }</h3>
                                            <p className="margin-b-5">{ desc }</p>
                                        </div>
                                        <Link to={path} className="content-wrapper-link">{ btnText }</Link>
                                    </div>
                                </div>
                            </Col>
                            )}
                        </Row>


                        <Row className="row-space-1 margin-b-2">

                            {ServicesContentRowTwo.map(({iconImg, title, desc, path, btnText }) =>
                                <Col sm={8} className="sm-margin-b-2" key={title}>
                                    <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                                        <div className="service" data-height="height">
                                            <div className="service-element">
                                                <Iconic type={iconImg} theme="outlined" />
                                            </div>
                                            <div className="service-info">
                                                <h3>{ title }</h3>
                                                <p className="margin-b-5">{ desc }</p>
                                            </div>
                                            <Link to={path} className="content-wrapper-link">{ btnText }</Link>
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </WhatWeDo>

                    <MeetTheTeam>
                        <h1>Meet the team</h1>
                        <p style={{ marginRight: 16 }}>Lorem ipsum dolor sit amet consectetur adipiscing<br/> elit sed tempor incididunt ut
                            laboret dolore adipiscing elit sed tempor</p>
                        <Row gutter={16}>

                            {TheTeam.map(({profilePic, imgAlt, TeamMember, Position, desc, DribbleLink, twitterLink, contactLink }) =>
                            <Col xs={24} sm={4} lg={8}>
                                <Card
                                    hoverable
                                    cover={<img alt={imgAlt}
                                                src={profilePic}/>}
                                    actions={[<Link to={DribbleLink}><Icon type="dribbble" theme="outlined" /></Link>,<Link to={twitterLink}><Icon type="instagram" theme="outlined" /></Link> , <Link to={contactLink}><Icon type="mail" theme="outlined" /></Link> ]}
                                >
                                    <CardBody>
                                        <h4>{TeamMember}</h4>
                                        <span>{Position}</span>
                                        <p>{desc}</p>
                                    </CardBody>



                                </Card>
                            </Col>
                            )}

                        </Row>
                    </MeetTheTeam>
                </MainWrapper>
            </React.Fragment>
        );
    }
}

export default AboutUs;
