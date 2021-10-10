import React from "react";
import { Link } from "react-router-dom";
import YandexButton from "../components/YandexButton";
import MaskedInput from "react-text-mask";
import styled from "styled-components";
import store from "../store";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      gitRepo: "",
      buildCommand: "",
      mainBranch: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    store.dispatch({ type:"SAVE_INPUTS", action: { gitRepo: this.gitRepo, buildCommand: this.buildCommand, mainBranch: this.mainBranch } })
  }

  render() {
    const FormContainer = styled.form`
      display: flex;
      flex-direction: column;
    `;

    return (
      <FormContainer>
        <label htmlFor="git-repo">
          GitHub repository <span className="asterisk"> *</span>
        </label>
        <input
          type="text"
          name="git-repo"
          placeholder="user-name/repo-name"
          required
        />

        <label htmlFor="build-command">
          Build command <span className="asterisk"> *</span>
        </label>
        <input
          type="text"
          name="build-command"
          placeholder="npm install"
          required
        />

        <label htmlFor="branch">Main branch</label>
        <input type="text" name="branch" placeholder="master" required />
        <div>
          <span>Synchronize every </span>
          <MaskedInput
            value={10}
            className="minute-input"
            mask={[/[1-9]/, /\d+/]}
          />
          <span> minutes</span>
        </div>
        <div className="buttons">
          <Link to="/builds">
            <YandexButton label={"Save"} />
          </Link>
          <Link to="/home">
            <YandexButton label={"Cancel"} isGray="true" />
          </Link>
        </div>
      </FormContainer>
    );
  }
}
