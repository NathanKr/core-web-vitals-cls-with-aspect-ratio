import NextImageWithAspectRatio from "@/components/next-image-with-aspect-ratio";
import ETab from "@/types/e-tab";
import { LOREM_100_STRING } from "@/utils/constants";
import { infoBig, infoSmall } from "@/utils/utils";

import { Alert } from "@mui/material";

const keepPseudoAspectRatioNextImage = () => {
  return (
    <>
      <h1>{ETab.keepPseudoAspectRatioNextImage}</h1>
      <h2>
        <Alert severity="success">
          Use next.js Image with fill , and relative+aspect-ratio for parent ==
          {">"} <strong>CLS</strong> ok : 0 
        </Alert>
        <Alert severity="success">
          <strong>LCP</strong> is ok ~ 1 sec
        </Alert>
      </h2>
      <h3>pic width {"<"} parent width</h3>
      <NextImageWithAspectRatio info={infoSmall} />
      <h3>pic width {">"} parent width</h3>
      <NextImageWithAspectRatio info={infoBig} />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default keepPseudoAspectRatioNextImage;
