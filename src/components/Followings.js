import React, { useState } from "react";
import { FollowerCard } from "./FollowerCard"
import styled from "styled-components";

const FollowingsWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;
export function Followings(props) {
    return (
        <FollowingsWrapper>
            {
                props.followings.map((item) => <FollowerCard {...item} key={item.id}/>)
            }
        </FollowingsWrapper>

    )
}