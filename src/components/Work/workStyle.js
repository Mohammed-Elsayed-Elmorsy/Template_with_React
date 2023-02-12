import styled from 'styled-components'


export const WorkContainer = styled.div`
background-color: #eee;
padding: 10px;
margin: 94px auto 0px;

`
export const StyledWork = styled.div`
width:100%;
display: flex;
justify-content: center;
gap: 10px;
text-align: center;
flex-wrap: wrap;
padding-bottom: 20px;
height:300px
`
export const Table = styled.div`
display:flex;
flex-direction:column;

`


export const WorkItem = styled.div`
border: 1px solid rgb(200, 200, 200);
height:100%
padding: 10px;
display:flex;
justify-content:center;
align-items:center;
width:32%;
transition: 0.3s;
color:${props=>props.first=== 1 ? "red" :"black"};
&:hover{
    box-shadow: 0px 0px 7px 0px black;
};
@media(max-width:700px){
   width:47%
}
`
export const WorkTitle = styled.h3`
font-size: 23px;
`
