import styled from 'styled-components';


export const PublishedDate = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: auto;
  top: -7px;
  height: 25px;
 line-height: 25px;
  padding-bottom: 2px;
  margin-top: -1rem;
  margin-bottom: 10px;
  font-size: 12px;
  color: #a6a7aa;
  border-bottom: 1px solid #f0f2f5;
  
  span {
  	position: relative;
	top: 2px;
	display: inline-block;
	margin-right: 6px;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	border-width: 4px;
	border-style: solid;
	border-color: #D0D8D8;
	-webkit-transition: border-width .2s ease-in-out;
	transition: border-width .2s ease-in-out;
	
	&.Dribble {
	  border-color: #ea4c89;
	}
  }
    `;
