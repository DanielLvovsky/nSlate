import styled from "styled-components";
import { Form, Input } from "@rocketseat/unform";

export const NavFormUnform = styled(Form)`
  width: 100%;
  display: flex;

  align-items: center;
  border: 3px solid #1c1b1e;

  border-radius: 0px;
  overflow: hidden;
`;
export const InputUnform = styled(Input)`
  flex: 1;
  padding: 0.6rem 2.2rem;
  min-width: 0;
  width: 200%;
  color: white;
  background: #1C1B1E;
  transition: var(--transition);
  
  &:hover,
  &:focus {
    background: rgba(28, 27, 30, 0.5);
    
  }
`;
export const ButtonUnformContainer = styled.button`
  display: flex;
  border-radius: 0px;
  justify-content: center;
  width: 80px;
  background: #33383F;
  min-width: 49px;

  transition: var(--transition);
  &:hover {
    background: #4ecca3;
  }
`;
export const ButtonUnform = styled.div`
  color: white;

  height: 40px;
  width: 40px;
  
  padding: 8px;
`;
