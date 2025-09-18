function ProfileSkeleton() {
  return (
    <div className="flex flex-col border border-gray-200 p-3 rounded-[10px] mt-5 mb-5 lg:mt-0">
      <div className="animate-pulse w-36 h-3 mt-5"></div>
      <div className="flex items-center justify-between mt-5">
        <div className="animate-pulse w-28 md:w-56 h-2"></div>
        <div className="animate-pulse w-28 md:w-56 h-2"></div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="animate-pulse w-28 md:w-56 h-2"></div>
        <div className="animate-pulse w-28 md:w-56 h-2"></div>
      </div>
      <div className="flex items-center justify-between mt-5 mb-4">
        <div className="animate-pulse w-28 md:w-56 h-2"></div>
        <div className="animate-pulse w-28 md:w-56 h-2"></div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
