import styled, { css } from 'styled-components'

export const StyledCharacter = styled.li `
 strong{
    font-size: 1.3rem;
 }
 ${({status})=> {
    if(status == 'Dead'){
    return css`
    background-color: #fad9d2;
    span{
    color:red;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    right: 1rem;
    top: 1rem;
    }
    `}else if (status == 'Alive'){
    return css`
    background-color: #cedaea;
    span{
    color:#0a05d1;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    right: 1rem;
    top: 1rem;
    }
    `
    }else {
    return css`
    background-color: #f7cd7b;
    span{
    color:#ff7f00;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    right: 1rem;
    top: 1rem;
    }
    `
    }
 }}
   
`