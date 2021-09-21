// NPM packages
import { useHistory, useParams } from "react-router";

// Project files
import data from "data/candidates.json";

// Interface
type PropParams = {
  url: string;
};

export default function Profile() {
  // Properties
  const history = useHistory();
  const { url } = useParams<PropParams>();
  const candidate = data.find((item) => item.url === url);
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;
  const isWillingToRecolate =
    candidate?.is_willing_to_relocate && " • Willing to relocate";

  // safeguard
  if (candidate === undefined) return <p>No candidate found</p>;

  return (
    <div id="about" className="container">
      {/* Header */}
      <img src={imageFile} alt="Candidate thumbnail" />
      <h1>{candidate.name}</h1>
      <h2>
        {candidate.city}
        {isWillingToRecolate}
      </h2>
      <p>{candidate.description}</p>

      {/* Education */}
      <h2>Education</h2>

      {/* Work */}
      <h2>Work experience</h2>

      {/* Tech skills */}
      <h2>Tech skill</h2>

      {/* Languages */}
      <h2>Languages spoken</h2>

      {/* Footer */}
      <a
        className="button"
        href={candidate.portofolio_url}
        target="_blank"
        rel="noreferer"
      >
        View portfolio
      </a>
      <button className="link" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
