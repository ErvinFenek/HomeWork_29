import React from "react";
import styled from "styled-components";

const ReposCardWrapper = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid darkorange;
`;
const LickRepos = styled.a`
    text-decoration: none;
    color: darkgreen;
`;

export function ReposCard(props) {
    console.log(props)
    return (
        <ReposCardWrapper>
            <LickRepos href={props.html_url}>{props.name}</LickRepos>
            <p>Forks: {props.forks_count}</p>
            <p>Issues: {props.open_issues_count}</p>
        </ReposCardWrapper>

    )
}