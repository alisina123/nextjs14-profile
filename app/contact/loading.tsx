const HomePageLoading = () => (
  <div className="animate-pulse">
    {/* Skeleton for loading state */}
    <div className="relative z-10 mx-auto px-4 py-10 xs:py-24 sm:px-6 md:max-w-md md:px-8">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-6 w-1/2 rounded bg-gray-300"></div>
            <div className="h-10 w-full rounded bg-gray-300"></div>
          </div>
          <div className="space-y-2">
            <div className="h-6 w-1/2 rounded bg-gray-300"></div>
            <div className="h-10 w-full rounded bg-gray-300"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-6 w-1/3 rounded bg-gray-300"></div>
          <div className="h-10 w-full rounded bg-gray-300"></div>
        </div>
        <div className="space-y-2">
          <div className="h-6 w-1/4 rounded bg-gray-300"></div>
          <div className="h-28 w-full rounded bg-gray-300"></div>
        </div>
        <div className="h-12 w-full rounded bg-gray-300"></div>
      </div>
    </div>
  </div>
);

export default HomePageLoading;
