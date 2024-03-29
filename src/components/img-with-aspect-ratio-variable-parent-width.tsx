import IImageWithAspectRatioVariableParentWidth from "@/types/i-image-with-aspect-ratio-variable-parent-width";
import { getVariableParentStyle } from "@/utils/utils";
import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatioVariableParentWidth;
}

const ImgWithAspectRatioVariableParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const parentStyle = getVariableParentStyle(info);
  
  return (
    <div style={parentStyle}>
      <img style={{ width: "100%" }} src={imgSrc} alt={title} />
    </div>
  );
};

export default ImgWithAspectRatioVariableParentWidth;
