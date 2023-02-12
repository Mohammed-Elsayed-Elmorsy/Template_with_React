import styled from 'styled-components'


export const HeaderStyled = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 5px #ddd ;
padding: 10px 10px;
position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
background-color: white;
height:90px;
z-index:2

`

export const Ulstyle = styled.ul`
margin:0;
list-style: none;
display: flex;
padding:10px

`

export const LiStyle = styled.li`
margin: 0 5px;
`
export const AnchorStyle = styled.a`
padding: 8px;
text-decoration: none;
color: black;
cursor: pointer;
text-transform: capitalize;
font-weight: bold;
font-size: 17px;
transition: 0.4s;

`
