import React, { useState } from "react";
import { Followings } from "./Followings";
import styled from "styled-components";
import { ReposWrapper } from "./ReposWrapper";

const NewWrapper = styled.div`
    margin:  auto;
    text-align: center;
`;
const Centred = styled.div`
    display: block;
    margin: 0 auto;
`;

export function Form() {
    const [ user, setUser] = useState('');
    let [recUser, setRecUser] = useState([]);
    let [followersCount, setfollowersCount] = useState([]);
    let [followings, setFollowings] = useState([]);
    let [repos, setRepos] = useState([]);

    const onUserChange = (e) => {
        setUser((prev) => ({  ...prev, user: e.target.value   }))
    };



    const onSubmitHandler = (e) => {
        e.preventDefault();
        function getUser() {
            fetch(`https://api.github.com/users/${user.user}`)
                .then((res) => res.json())
                .then((json) =>  setRecUser(recUser = json))
                .then( function () {
                    fetch(`${recUser.followers_url}`)
                        .then((res) => res.json())
                        .then((json) => setfollowersCount(followersCount = json.length));})
                .then( function () {
                    fetch(`https://api.github.com/users/${recUser.login}/following`)
                        .then((res) => res.json())
                        .then((json) => setFollowings(followings = json));})
                .then( function () {
                    fetch(`${recUser.repos_url}`)
                        .then((res) => res.json())
                        .then((json) => setRepos(repos = json));})

        }

        getUser();

    };

    return (
        <>
            <NewWrapper>
            <form >
                <input  placeholder="Input user..." onChange={onUserChange}/>
                <button onClick={onSubmitHandler}>Search</button>
            </form>
            <div className="UserWrapper">
                <div>
                    <img src={recUser.avatar_url} alt="user avatar"/>
                </div>
                <p>Bio: {recUser.bio}</p>
                <div>
                    <a href={recUser.html_url}>Name: {recUser.login}</a>
                </div><br/>
                <div>
                    <p>Followers: {followersCount} </p>
                </div><br/>

                <Centred>
                    <Followings followings={followings}/>
                </Centred>
                <ReposWrapper repos={repos}/>
            </div>
            </NewWrapper>
        </>
    )
}
