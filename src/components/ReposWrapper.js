import React from "react";
import {ReposCard} from "./ReposCard";
import styled from "styled-components"

const ReposWrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export function ReposWrapper(props) {
    return (
        <ReposWrapperDiv>
            {
                props.repos.map((item) => <ReposCard {...item} key={item.id}/>)
            }
        </ReposWrapperDiv>
    )
}