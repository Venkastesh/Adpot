import {
  ShimmerCategoryItem,
  ShimmerCircularImage,
  ShimmerText,
  ShimmerTitle,
} from "react-shimmer-effects";

const CHatProfileShimmer = () => {
  return (
    <div className="flex px-[15px] w-full gap-5 items-center justify-center my-2">
      <ShimmerCircularImage size={55} variant="primary" />
      <ShimmerText line={2} className={"w-full"} gap={10} variant="primary" />
    </div>
  );
};

export default CHatProfileShimmer;
