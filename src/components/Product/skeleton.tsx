import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton = () => (
  <ContentLoader
    speed={2}
    width={473}
    height={633}
    viewBox="0 0 473 633"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="w-full flex flex-col max-w-[472.7px] min-h-[632.6px]"
  >
    <rect x="0" y="0" rx="0" ry="0" width="473" height="633" />
  </ContentLoader>
);

export default ProductSkeleton;
