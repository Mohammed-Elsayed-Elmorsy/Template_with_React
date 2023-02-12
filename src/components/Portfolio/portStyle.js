import styled from 'styled-components'
export const PortStyled = styled.div`
padding: 10px 0 38px;
background-color: #eee;
margin: 94px 0px 0px;
// height:1400px;
// @media(max-width:1000px){
// height:900px;
// }
` 
export const PortItemsStyled = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
gap: 10px;
` 

export const PortItemStyled = styled.div`
background-color: rgb(255, 254, 254);
padding: 10px;
// width: 23.8%;
cursor:pointer;
transition:0.3s;
@media(max-width:767px){
        width: 42%;
};
@media(min-width:768px){
        width: 28%;
};
@media(min-width:1200px){
        background-color: rgb(255, 254, 254);
        padding: 10px;
        width: 20.4%;
};
&:hover{      
        // box-shadow: 1px 1px 4px 0px black;
        // filter: brightness(1.1);
        // filter: blur(1px);
        // filter: grayscale(100%);
        filter: drop-shadow(3px 3px 7px black) ;
        // filter: sepia(60%);
}
` 
export const PortStyledSpan = styled.span`
display: block;
` 
export const PortStyledImg = styled.img`
max-width: 100%;
` 
export const PortStyledUl = styled.ul`
list-style: none;
display: flex;
justify-content: space-between;
padding: 0;
text-align: center;
width: 60%;
margin: 15px auto;
@media(max-width:768px){
        width:100%
}
` 
export const PortStyledLI = styled.li`
flex: 1;
margin: 5px;
` 
export const PortStyledAnchor = styled.a`

padding: 10px 0;
text-decoration: none;
color: black;
display: block;
transition: 0.4s;
background-color:${props=>props.active ? "orange":""};
color:${props=>props.active ? "white":""}
` 
