import React from "react";
import LastMovieInDb from "./LastUserInDb";
import CategoriesInDb from "./CategoriesInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastMovieInDb />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <CategoriesInDb />
    </div>
  );
}

export default ContentRowCenter;
