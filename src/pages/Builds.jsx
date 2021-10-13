import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/builds.css";

import Modal from "../components/Modal";
import Header from "../components/Header";
import YandexButton from "../components/YandexButton";
import BuildCard from "../components/BuildCard";
import triangle from "../static/images/triangle-right.svg";
import cog from "../static/images/cog.svg";

import buildsArr from "../mock/builds"; // должно прийти пропсом из редакса

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

function Builds() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
      <Header title={"philip1967/my-awesome-repo"}>
        <BuildButtons>
          <YandexButton
            onClick={() => {
              setIsOpen(true);
            }}
            label={"Run build"}
            icon={triangle}
            isGray={true}
          />
          <Link to="/settings">
            <YandexButton label={""} icon={cog} isGray={true} />
          </Link>
        </BuildButtons>  
      </Header>
      <div className="commits">
        {buildsArr.map((build) => (
          <BuildCard id={build.id} buildObj={build} />
        ))}
      </div>
      <YandexButton
        isGray={true}
        label={"Show more"}
      />
    </div>
  );
}

export default Builds;
