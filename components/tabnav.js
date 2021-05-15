export default function TabbedNav() {
  return (
    <>
      <ul className="nav nav-tabs justify-content-center my-5 py-3" id="myTab" role="tablist">
        <li className="nav-item me-3" role="presentation">
          <button
            className="nav-link active"
            id="dataviz-tab"
            data-bs-toggle="tab"
            data-bs-target="#dataviz"
            type="button"
            role="tab"
            aria-controls="dataviz"
            aria-selected="true"
          >
            Tableau Data Visualizations
          </button>
        </li>
        <li className="nav-item me-3" role="presentation">
          <button
            className="nav-link"
            id="github-tab"
            data-bs-toggle="tab"
            data-bs-target="#github"
            type="button"
            role="tab"
            aria-controls="github"
            aria-selected="false"
          >
            GitHub Data Projects
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="programming-tab"
            data-bs-toggle="tab"
            data-bs-target="#programming"
            type="button"
            role="tab"
            aria-controls="programming"
            aria-selected="false"
          >
            GitHub Programming Projects
          </button>
        </li>
      </ul>
    </>
  );
}
