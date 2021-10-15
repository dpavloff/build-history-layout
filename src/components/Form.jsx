import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import MaskedInput from "react-text-mask";
import styled from "styled-components";

import YandexButton from "../components/YandexButton";
import { actionSaveRepoInfo } from '../redux/actions/settingsActions';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function Form() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [repoInfo, setRepoInfo] = useState({
    repoName: "",
    buildCommand: "",
    mainBranch: "",
    interval: "",
  });

  const handleRepoInfoChange = (e) => {
    setRepoInfo({ ...repoInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      repoInfo.repoName &&
      repoInfo.buildCommand &&
      repoInfo.mainBranch &&
      repoInfo.interval
    ) {
      dispatch(actionSaveRepoInfo(repoInfo));
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
          onChange={handleRepoInfoChange}
          name="interval"
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
