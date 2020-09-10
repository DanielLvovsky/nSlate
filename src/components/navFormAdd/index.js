import React from "react";

import { useSelector } from "react-redux";

import { db } from "../../firebase";

import { Plus as Add } from "styled-icons/boxicons-regular";

import { toast } from "react-toastify";

import * as S from "./styled";

const NavFormAdd = () => {
  const userData = useSelector((state) => state.user.data);

  function handleAddTodo({ text }, { resetForm }) {
    if (!text.length) {
      toast.error("Enter a task");
      return;
    }
    db.collection("todo").add({
      text,
      completed: false,
      userEmail: userData.email,
      date: new Date(),
    });
    resetForm();
  }
  return (
    <S.NavFormUnform onSubmit={handleAddTodo}>
      <S.InputUnform placeholder="Enter a task" type="text" name="text" />
      <S.ButtonUnformContainer>
        <S.ButtonUnform type="submit">
          <Add />
        </S.ButtonUnform>
      </S.ButtonUnformContainer>
    </S.NavFormUnform>
  );
};

export default NavFormAdd;
