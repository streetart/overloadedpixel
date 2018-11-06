import React, {Component} from 'react';
import TextAnimation from "../shared/TextAnimation";
import {List, Pagination} from "antd";
import CardView from "./shared/CardView";
import TitleBlock from "../shared/TitleBlock/TitleBlock";
import styled from 'styled-components';

const PaginationCenter = styled.section`
  text-align: center;
  position: relative;
  margin: 0 auto 2rem;
`;

const data = [
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/420608/avatars/normal/85efe79991f3deb8a276a6c43fd93080.jpg?1464935474",
        title: 'Atom bomb',
        TeamMember: "Blaine Lingard",
        ImagePreview: "https://cdn.dribbble.com/users/420608/screenshots/2791714/cinema-4d.png",
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/138438/avatars/normal/bd1d987069602c559ee88d6af37e702a.jpg?1474030415",
        title: 'Cleaning App UI',
        TeamMember: "Calvin Smith",
        ImagePreview: "https://cdn.dribbble.com/users/138438/screenshots/2879596/cleaning_app_ui.png"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/389116/avatars/normal/0d62cb4abbd0396b468893876ff6f69d.jpg?1485874220",
        title: 'Become A Partner',
        TeamMember: "Ryan Smith",
        ImagePreview: "https://cdn.dribbble.com/users/389116/screenshots/5450569/become_a_partner.gif"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/138438/avatars/normal/bd1d987069602c559ee88d6af37e702a.jpg?1474030415",
        title: 'SuperSummary Logo Exploration',
        TeamMember: "Calvin Smith",
        ImagePreview: "https://cdn.dribbble.com/users/138438/screenshots/2181030/supersummary_logo.jpg"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/389116/avatars/normal/0d62cb4abbd0396b468893876ff6f69d.jpg?1485874220",
        title: 'Map App',
        TeamMember: "Ryan Smith",
        ImagePreview: "https://cdn.dribbble.com/users/389116/screenshots/3234465/map-app.png"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/420608/avatars/normal/85efe79991f3deb8a276a6c43fd93080.jpg?1464935474",
        title: 'Homer Simpson',
        TeamMember: "Blaine Lingard",
        ImagePreview: "https://cdn.dribbble.com/users/420608/screenshots/2607279/homer_still.png"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/420608/avatars/normal/85efe79991f3deb8a276a6c43fd93080.jpg?1464935474",
        title: 'Atom bomb',
        TeamMember: "Blaine Lingard",
        ImagePreview: "https://cdn.dribbble.com/users/420608/screenshots/2791714/cinema-4d.png",
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/138438/avatars/normal/bd1d987069602c559ee88d6af37e702a.jpg?1474030415",
        title: 'Cleaning App UI',
        TeamMember: "Calvin Smith",
        ImagePreview: "https://cdn.dribbble.com/users/138438/screenshots/2879596/cleaning_app_ui.png"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/389116/avatars/normal/0d62cb4abbd0396b468893876ff6f69d.jpg?1485874220",
        title: 'Become A Partner',
        TeamMember: "Ryan Smith",
        ImagePreview: "https://cdn.dribbble.com/users/389116/screenshots/5450569/become_a_partner.gif"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/138438/avatars/normal/bd1d987069602c559ee88d6af37e702a.jpg?1474030415",
        title: 'SuperSummary Logo Exploration',
        TeamMember: "Calvin Smith",
        ImagePreview: "https://cdn.dribbble.com/users/138438/screenshots/2181030/supersummary_logo.jpg"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/389116/avatars/normal/0d62cb4abbd0396b468893876ff6f69d.jpg?1485874220",
        title: 'Map App',
        TeamMember: "Ryan Smith",
        ImagePreview: "https://cdn.dribbble.com/users/389116/screenshots/3234465/map-app.png"
    },
    {
        SrcRef: "Dribble",
        PublishedDate: "07 Aug 2018",
        AvatarImg: "https://cdn.dribbble.com/users/420608/avatars/normal/85efe79991f3deb8a276a6c43fd93080.jpg?1464935474",
        title: 'Homer Simpson',
        TeamMember: "Blaine Lingard",
        ImagePreview: "https://cdn.dribbble.com/users/420608/screenshots/2607279/homer_still.png"
    },
]

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="containerBlock">
                    <TextAnimation/>
                </section>

                <section style={{padding: '2em'}}>
                    <TitleBlock
                        title={"Latest Free Design Resources"}
                        subTitle={"Hand-picked resources for web designer and developers, constantly updated."}
                    />
                    <List
                        grid={{gutter: 16, xs: 1, sm: 2, md: 3, lg: 4}}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <CardView
                                    SrcRef={item.SrcRef}
                                    PublishedDate={item.PublishedDate}
                                    title={item.title}
                                    ImagePreview={item.ImagePreview}
                                    AvatarImg={item.AvatarImg}
                                    TeamMember={item.TeamMember}
                                />
                            </List.Item>
                        )}
                    />

                </section>
                <PaginationCenter>
                    <Pagination defaultCurrent={1} total={50}/>
                </PaginationCenter>

            </React.Fragment>
        );
    }
}

export default Landing;


