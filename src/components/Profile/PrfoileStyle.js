import styled from 'styled-components' 
export const StyledPrfile = styled.div`
margin: 94px 0  ;
padding: 28px;
background-color: #eee;
`
export const StyledSkill = styled.div`
    
    display: flex;
    position: relative;
    justify-content: space-between;  
    &:after{
        position: absolute;
        content: '';
        width: ${props=>props.progress ? props.progress:""};
        height: 3px;
        background-color: red;
        bottom: 0;
    };
    padding:10px 0;
    text-transform:capitalize;

`  

export const Span = styled.span`
// margin-top:15px

`