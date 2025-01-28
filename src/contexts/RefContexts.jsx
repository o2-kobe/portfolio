import { createContext, useRef } from "react";
import PropTypes from "prop-types";

const RefsContext = createContext();

function RefsProvider({ children }) {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <RefsContext.Provider
      value={{
        homeRef,
        skillsRef,
        projectsRef,
        connectRef,
      }}
    >
      {children}
    </RefsContext.Provider>
  );
}

RefsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RefsProvider, RefsContext };
