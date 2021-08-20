import React from "react";
import PropTypes from "prop-types";

const RepoItems = ({ repo }) => {
  const { html_url, name } = repo;
  return (
    <div className='card'>
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
    </div>
  );
};

RepoItems.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItems;
