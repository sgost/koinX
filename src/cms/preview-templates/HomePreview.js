import React from "react";
import PropTypes from "prop-types";

const HomePreview = ({ entry }) => {

  const data = entry.getIn(["data"]).toJS();

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );

};

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default HomePreview;
