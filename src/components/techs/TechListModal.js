import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null && techs.length !== 0 ?(
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)):
            <p className = "center">No Techs Registered....</p>}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
