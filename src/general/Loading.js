import React from 'react';

/** Loading message until API is fetched. */

function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border-lg text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;