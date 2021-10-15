import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchBuilds } from "../redux/actions/settingsActions";
import Modal from "./Modal";
import Header from "./Header";
import YandexButton from "./YandexButton";
import BuildCard from "./BuildCard";
import triangle from "../static/images/triangle-right.svg";
import cog from "../static/images/cog.svg";

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HashInput = styled.input`
  padding: 0.75rem 1.5rem;
  flex: none;
  border-radius: 6px;
  border: 2px solid #d9d9d9;
  flex-grow: 0;
  width: 28rem;
  @media screen and (max-width: 840px) {
    width: auto;
  }
`;

const BuildButtons = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 840px) {
    justify-content: space-evenly;

    & .btn {
      font-size: 0;
      width: 2rem;
      height: 2rem;
      padding: 0;
    }
  }
`;

function BuildsContainer({ buildsArr, repoName, loading }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch()

  const title = "philip1967/" + repoName;

  return (
    <div className="builds-container">
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <ModalContent>
          <h3>New build</h3>
          <p>Enter the commit hash which you want to build.</p>
          <HashInput placeholder="Commit hash" />
          <div className="modal-buttons">
            <YandexButton
              label={"Run build"}
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <YandexButton
              isGray={true}
              label={"Cancel"}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </ModalContent>
      </Modal>
      <Header isBold={true} title={title}>
        <BuildButtons>
          <YandexButton
            onClick={() => {
              setIsOpen(true);
            }}
            isSettings={true}
            label={"Run build"}
            icon={triangle}
            isGray={true}
          />
          <Link to="/settings">
            <YandexButton
              isSettings={true}
              label={""}
              icon={cog}
              isGray={true}
            />
          </Link>
        </BuildButtons>
      </Header>
      <div className="commits">
        {buildsArr.map((build) => (
          <BuildCard key={build.id} buildObj={build} />
        ))}
      </div>
      {loading ? <Loader type="TailSpin" color="#00BFFF" height={40} width={40} /> : <YandexButton isGray={true} label={"Show more"} onClick={() => dispatch(fetchBuilds())} />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.settings.loading,
  builds: state.settings.builds,
  hasErrors: state.settings.hasErrors,
  repoName: state.settings.repoName
});

export default connect(mapStateToProps)(BuildsContainer);