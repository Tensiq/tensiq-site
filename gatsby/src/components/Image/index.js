import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {
  render() {
    const { group, src } = this.props;
    const sizes = Image.images[group].edges.filter(
      edge => edge.node.childImageSharp.sizes.originalName === src,
    )[0].node.childImageSharp.sizes;
    if (sizes === undefined) {
      return <img {...this.props} />;
    }
    return <Img sizes={sizes} />;
  }
}
Image.images = {};

Image.propTypes = {
  group: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
