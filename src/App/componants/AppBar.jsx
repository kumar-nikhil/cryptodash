import React from 'react'
import styled, {css} from 'styled-components'

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`
const Logo = styled.div `
    font-size: 1.5em;

`
const ControlButtonElem = styled.div `
    cursor: pointer;
    ${props => props.active && css`
    text-shadow: 10px 10px 60px #f17808;
    color: blue;
  `}

`

function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}){
    return(
        <ControlButtonElem active={active}>
            {toProperCase(name)}
        </ControlButtonElem>
    )
}


export default function(){
    return <Bar>
    <Logo>CryptoDash</Logo>
    <div />
    <ControlButton active name="d ashboard" />
    <ControlButton name="Settings" />
    </Bar> 
}