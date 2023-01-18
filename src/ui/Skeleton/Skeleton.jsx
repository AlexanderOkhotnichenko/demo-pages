import React from "react";
import ContentLoader from "react-content-loader";

export function Skeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={547}
      viewBox="0 0 500 547"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}>
      <rect x="100" y="0" rx="5" ry="5" width="8" height="547" />
      <rect x="100" y="0" rx="5" ry="5" width="400" height="8" />
      <rect x="492" y="0" rx="5" ry="5" width="8" height="547" />
      <rect x="100" y="539" rx="5" ry="5" width="400" height="8" />
      <rect x="0" y="30" rx="5" ry="5" width="400" height="220" />
      <rect x="430" y="30" rx="50" ry="50" width="35" height="35" />
      <rect x="430" y="75" rx="50" ry="50" width="35" height="35" />
      <rect x="430" y="120" rx="50" ry="50" width="35" height="35" />
      <rect x="430" y="165" rx="50" ry="50" width="35" height="35" />
      <rect x="430" y="210" rx="50" ry="50" width="35" height="35" />
      <rect x="125" y="270" rx="5" ry="5" width="350" height="2" />
      <rect x="125" y="290" rx="5" ry="5" width="350" height="155" />
      <rect x="200" y="465" rx="25" ry="25" width="200" height="54" />
    </ContentLoader>
  );
}
