import React from "react";
import PropTypes from "prop-types";

import ReUse from "../../../../services/helpers/reUseF";

const ResponsiveImage = ({ src, alt, sizes, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      loading="lazy"
      onError={ReUse.onImageError}
    />
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  className: PropTypes.string,
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  className: PropTypes.string,
};

ResponsiveImage.defaultProps = {
  sizes: "(max-width: 768px) 100vw, 50vw",
  className: "",
  alt: "Responsive Image",
};

export default ResponsiveImage;
