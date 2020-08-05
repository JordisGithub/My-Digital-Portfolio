import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import "./Scroll.css";

const Scroll = ({ showBelow }) => {
  // const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <>
      <div className="scroll-up">
        {show && (
          <IconButton onClick={handleClick}>
            <div className="up" id="up">
              <i className="fas fa-chevron-up"></i>
            </div>
          </IconButton>
        )}
      </div>
    </>
  );
};
export default Scroll;
