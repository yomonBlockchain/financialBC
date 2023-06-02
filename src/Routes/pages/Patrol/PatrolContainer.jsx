import React from "react";
import PatrolPresenter from "./PatrolPresenter";
import { useOutletContext } from "react-router-dom";

const PatrolContainer = () => {
  const { hide, setHide } = useOutletContext();
  return <PatrolPresenter hide={hide} setHide={setHide} />;
};

export default PatrolContainer;
