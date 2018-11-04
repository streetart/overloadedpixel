import styled from 'styled-components';
import {HeroBanner} from "../../../shared/heroBanner/HeroBanner.styles";
import {Card, Icon} from "antd";

export const MainWrapper = styled.div`
 
  	border-bottom: 1px solid #edf0f2;
`;

export const TopDesc = styled.div`
padding: 6em 2em;
  background-color: #FFFFFF;
  	border-bottom: 1px solid #edf0f2;
`;

export const AboutDesc = styled.div`
padding: 6em 2em;
  background-color: #FFFFFF;

`;

export const MeetTheTeam = styled.div`
padding: 3em 2em 6em;


`;

export const AboutHero = styled(HeroBanner)`
  object-fit: scale-down;
  width: 100%;
`;
export const Placeholder = styled(Card)`
  
  width: 100%;
  height: 250px;
  
`;


export const WhatWeDo = styled.section`
  padding: 50px 2em 0;
`;


export const CardBody = styled.div`
  padding: 0 1rem 1rem 1rem;
  h4 {
  	color: #515769;
  		font-size: 22px;
  			font-weight: 700;
  			padding-bottom: 0;
  			margin-bottom: 0;
  			line-height: 2;
  			}
  			span {
  				font-size: 13px;
  				line-height: 3;
	font-weight: 300;
	color: #bfc1c7;
	text-transform: uppercase;
  			}
  			
  	
`;

export const Iconic = styled(Icon)`
	font-size: 30px;
	color: #999caa;
	margin-bottom: 1rem;
	span {
	  font-size: 10px;
	}
	i {
	  font-size: 30px;
	}
`;
