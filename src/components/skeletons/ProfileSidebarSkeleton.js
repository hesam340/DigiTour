function ProfileSidebarSkeleton() {
  return (
    <div className="flex items-center justify-between lg:flex-col lg:items-start lg:justify-center lg:h-fit w-full lg:w-[30%] xl:w-[25%] lg:border lg:border-[#00000033] lg:rounded-[10px] max-lg:mt-5 lg:px-3 lg:py-6">
      <div className="animate-pulse w-16 h-2 lg:w-44 lg:h-4"></div>
      <div className="animate-pulse w-16 h-2 lg:w-44 lg:h-4 lg:mt-7"></div>
      <div className="animate-pulse w-16 h-2 lg:w-44 lg:h-4 lg:mt-7"></div>
    </div>
  );
}

export default ProfileSidebarSkeleton;
