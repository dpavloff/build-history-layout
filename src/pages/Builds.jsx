import { useState } from "react";
import styled from "styled-components";
import "../styles/builds.css";

import Modal from "../components/Modal";

import YandexButton from "../components/YandexButton";
import CommitCard from "../components/CommitCard";
import triangle from "../static/images/triangle-right.svg";
import cog from "../static/images/cog.svg";

import commitsArray from "../mock/commits"; // должно прийти пропсом из редакса

// Два состояния = зафетчили и не зафетчили
// Component-connect -
// map dispatch to props

const ModalContent = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1rem;
`;

const HashInput = styled.input`
  padding: 0.75rem 1.5rem;
  flex: none;
  border-radius: 6px;
  border: 2px solid #D9D9D9;
  flex-grow: 0;
  width: 28rem;
  @media screen and (max-width: 840px) {
    width:auto
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
            <YandexButton label={"Run build"} onClick={() => {setIsOpen(false)}}/>
            <YandexButton isGray={true} label={"Cancel"} onClick={() => {setIsOpen(false)}}/>
          </div>
          </ModalContent>
      </Modal>
      <div className="builds-header">
        <h2>philip1967/my-awesome-repo</h2> {/* // change to username later */}
        <div className="builds-buttons">
          <YandexButton
            onClick={() => {
              setIsOpen(true);
            }}
            label={"Run build"}
            icon={triangle}
            isGray={true}
          />
          <YandexButton label={""} icon={cog} isGray={true} />
        </div>
      </div>
      <div className="commits">
        {commitsArray.map((commit) => (
          <CommitCard commitObj={commit} />
        ))}
      </div>
      <YandexButton
        defaultClass="show-more"
        isGray={true}
        label={"Show more"}
      />
    </div>
  );
}

export default Builds;
