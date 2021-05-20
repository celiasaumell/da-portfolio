export default function TabbedNav() {
  return (
    <>
      <ul className="nav nav-tabs justify-content-center my-5" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="btn nav-link active btn-tab"
            id="dataviz-tab"
            data-bs-toggle="tab"
            data-bs-target="#dataviz"
            type="button"
            role="tab"
            aria-controls="dataviz"
            aria-selected="true"
          >
          Data Visualization
          </button>
        </li>
        <div id="tabBarConnectingLine"></div>
        <li className="nav-item" role="presentation">
          <button
            className="btn nav-link btn-tab"
            id="github-tab"
            data-bs-toggle="tab"
            data-bs-target="#github"
            type="button"
            role="tab"
            aria-controls="github"
            aria-selected="false"
          > Data Science
          </button>
        </li>
      </ul>
    </>
  );
}
