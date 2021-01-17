import React from "react";
import '../global.css';
import CafeMenu from '../components/CafeMenu';

export default function MenuPreview({ entry }) {
  const menu = entry.getIn(["data"]).toJS();
  const data = {
    markdownRemark: {
      frontmatter: {
        ...menu,
      },
    },
  };
  return <CafeMenu data={data} />;
}
