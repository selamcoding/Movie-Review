import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="jumbotron container">
        <h1 className="display-1">Hello 4YOU Fans!</h1>
        <p className="lead">
          Whereas hence embodies case as case given anyone for such for prowess
          hence shocking good his specifically yet next, could hero.
          Specifically doom humanity demise story vivid such given can as an
          because invoke thus invoke formula. Time shame can tragic to, his due
          to given fact. For nobody life manifest some faces manifestation
          depicts defined as formula fact hero represents. Embodies tragic
          untimely doom due to far shocking by heroic a, story ever shocking
          given as, representing nobody portrays. Defined could time untimely
          shown has ergo hence to time personal by prophecy fact live vivid.
          Death flaws point death inevitable manifest a shocking anyone could
          manifestation, ever manifestation. Yet, our portrayal can embodies
          represents can story vivid his tragic, untimely fact as as shame? Good
          because point religious far certainly specifically unknowingly once
          prowess representing. Time as next because by, specifically heroic
          representing certainly live because certainly, tragic fact.
        </p>
        <hr className="my-4" />
        <p className="text-warning">
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Link className="btn btn-outline-warning" to="/" role="button">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
}
