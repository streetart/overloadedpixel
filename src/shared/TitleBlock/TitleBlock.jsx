import React from 'react';
import {Title} from "./TitleBlock.style";

const TitleBlock = (props) => {
        return (
            <Title>
                <h2>{props.title}</h2>
                <p>{props.subTitle}</p>
            </Title>
        )

}

export default TitleBlock;
