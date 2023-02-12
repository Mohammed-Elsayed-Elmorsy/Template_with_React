import styled from 'styled-components'

export const SocialStyled = styled.div`
display: flex;
height:300px;
justify-content:center;
@media(max-width:786px){
   flex-direction:column
};
`
export const SocialItem = styled.div`
align-items: center;
display: flex;
justify-content: center;
padding:10px;
flex:1;
@media(max-width:786px){
    
 };
cursor:pointer;
background-color:${props=>props.background ? props.background :''}
`


export const SocialStyledH3 = styled.h3`
margin:0;
font-size:20px

`
export const IconDiv = styled.div`
font-size:19px;
background-color:#fff;
padding:15px;
width:17%;
text-align:center

`
export const SocialItemContent = styled.div`
font-size:20px;
color:#fff;
margin-left:8px;
padding-top:20px

`
