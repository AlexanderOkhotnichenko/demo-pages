import React from "react";
import ContentLoader from "react-content-loader";

export function Skeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={345}
      height={500}
      viewBox="0 0 345 500"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="298" y="248" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="0" rx="5" ry="5" width="345" height="5" />
      <rect x="340" y="-1" rx="5" ry="5" width="5" height="500" />
      <rect x="0" y="0" rx="5" ry="5" width="5" height="500" />
      <rect x="0" y="495" rx="5" ry="5" width="345" height="5" />
      <rect x="20" y="32" rx="5" ry="5" width="300" height="200" />
      <circle cx="40" cy="270" r="20" />
      <circle cx="105" cy="270" r="20" />
      <circle cx="174" cy="270" r="20" />
      <circle cx="236" cy="270" r="20" />
      <circle cx="302" cy="270" r="20" />
      <rect x="20" y="310" rx="5" ry="5" width="300" height="3" />
      <rect x="20" y="340" rx="5" ry="5" width="300" height="10" />
      <rect x="20" y="360" rx="5" ry="5" width="300" height="10" />
      <rect x="20" y="380" rx="5" ry="5" width="300" height="10" />
      <rect x="20" y="400" rx="5" ry="5" width="300" height="10" />
      <rect x="80" y="429" rx="18" ry="18" width="180" height="35" />
    </ContentLoader>
  );
}
