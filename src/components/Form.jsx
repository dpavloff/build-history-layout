import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { saveRepoInfo, saveInterval } from "../redux/slices";
import YandexButton from "../components/YandexButton";
import MaskedInput from "react-text-mask";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [repoInfo, setRepoInfo] = useState({
    repoName: "",
    buildCommand: "",
    mainBranch: "",
  });

  const [interval, setInterval] = useState(10);

  const handleRepoInfoChange = (e) => {
    setRepoInfo({ ...repoInfo, [e.target.name]: e.target.value });
  };

  const handleIntervalChange = (e) => {
    setInterval(Number(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      repoInfo.repoName &&
      repoInfo.buildCommand &&
      repoInfo.mainBranch &&
      interval
    ) {
      dispatch(
        saveRepoInfo({
          repoInfo: repoInfo,
        })
      );
      dispatch(
        saveInterval({
          interval: interval,
        })
      );

      // dispatch(

      // )

      history.push("/builds");
    }
  };

  return (
    <FormContainer>
      <label htmlFor="repoName">
        GitHub repository <span className="asterisk"> *</span>
      </label>
      <input
        onChange={handleRepoInfoChange}
        type="text"
        name="repoName"
        placeholder="user-name/repo-name"
        required
      />

      <label htmlFor="buildCommand">
        Build command <span className="asterisk"> *</span>
      </label>
      <input
        onChange={handleRepoInfoChange}
        type="text"
        name="buildCommand"
        placeholder="npm install"
        required
      />

      <label htmlFor="mainBranch">Main branch</label>
      <input
        onChange={handleRepoInfoChange}
        type="text"
        name="mainBranch"
        placeholder="master"
        required
      />
      <div>
        <span>Synchronize every </span>
        <MaskedInput
          onChange={handleIntervalChange}
          className="minute-input"
          mask={[/[1-9]/, /\d+/]}
        />
        <span> minutes</span>
      </div>
      <div className="buttons">
        <YandexButton onClick={onSubmit} label="Save" />
        <Link to="/home">
          <YandexButton label="Cancel" isGray="true" />
        </Link>
      </div>
    </FormContainer>
  );
}
