import styled from 'styled-components'
import img from '../../assets/images/home-bg.jpg'

export const StyledLand = styled.div`
background: url(${img});
background-size: cover;
margin-top: 80px;
height: calc(100vh - 90px);
background-position: center center;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`

export const StyledLandContentBtn = styled.button`
        background-color: #f50;
        border: 0;
        padding: 10px;
        color: white;
        font-size: 19px;
        cursor: pointer;
        width: 150px;
        transition: 0.3s;
        &:hover{
            background-color: rgb(23, 111, 236);
        }

`
export const LandH2 = styled.h2`
    font-size: 37px;
`
export const LandH3 = styled.h3`
    font-size: 23px;
`
export const Landp = styled.p`
    font-size: 19px;
    line-height: 29px;
` 
