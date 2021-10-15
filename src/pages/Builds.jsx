import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import "../styles/builds.css";

import BuildsContainer from "../components/BuildsContainer";
import { fetchBuilds } from "../redux/actions/settingsActions";

function Builds({ loading, builds, hasErrors }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBuilds());
  }, [dispatch]);

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (hasErrors)
      return (
        <p>There appears to be an error with the server. Please try again.</p>
      );
    if (builds) return <BuildsContainer buildsArr={builds} />;
  };

  return renderContent();
}

const mapStateToProps = (state) => ({
  loading: state.settings.loading,
  builds: state.settings.builds,
  hasErrors: state.settings.hasErrors,
});

export default connect(mapStateToProps)(Builds);
