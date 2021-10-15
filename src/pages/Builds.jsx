import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import "../styles/builds.css";

import BuildsContainer from "../components/BuildsContainer";
import { fetchBuilds } from "../redux/actions/settingsActions";

const LoaderContainer = styled.div`
  margin: auto;
`

function Builds({ loading, builds, hasErrors, repoName }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBuilds());
  }, [dispatch]);

  const renderContent = () => {
    if (!builds.length && loading) return <LoaderContainer><Loader type="TailSpin" color="#00BFFF" height={80} width={80} /></LoaderContainer>;
    if (hasErrors)
      return (
        <p>There appears to be an error with the server. Please try again.</p>
      );
    return <BuildsContainer buildsArr={builds} repoName={repoName} />;
  };

  return renderContent();
}

const mapStateToProps = (state) => ({
  loading: state.settings.loading,
  builds: state.settings.builds,
  hasErrors: state.settings.hasErrors,
  repoName: state.settings.repoName
});

export default connect(mapStateToProps)(Builds);
