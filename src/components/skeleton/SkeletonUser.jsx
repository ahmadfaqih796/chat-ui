import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonUser = () => {
  const skeletonItems = [];
  for (let index = 0; index < 7; index++) {
    skeletonItems.push(
      <Skeleton
        key={index}
        variant="rounded"
        width="100%"
        height={70}
        sx={{ mb: 2, borderRadius: "1em" }}
      />
    );
  }
  return <>{skeletonItems}</>;
};

export default SkeletonUser;
