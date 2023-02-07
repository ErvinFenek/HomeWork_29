import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    margin: 15px 15px 15px 0;
    border: 1px solid rgba(128,0,0,0.6);
`;
const LinkLogin = styled.a`
    text-decoration: none;
    color: maroon;
`;
const ImgFolowerWrapper = styled.img`
    width: 150px;
    height: 150px;
`;


export function Card(props) {
    console.log(props)
    return (
        <CardWrapper>
            <ImgFolowerWrapper src = {props.avatar_url}/><br/>
            <LinkLogin href = {`${props.html_url}`}>{props.login}</LinkLogin>

        </CardWrapper>
    )
}