// components/ui/Loading.js
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className="max-w-4xl mx-auto  p-8 rounded-lg shadow-lg animate-pulse">
      <div className="h-8 bg-gray-300 mb-4 rounded"></div>
      
      <section className="mb-6">
        <div className="h-6 bg-gray-300 mb-2 rounded w-1/3"></div>
        <div className="flex">
          <div className="w-1/4">
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="w-3/4 space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </section>
      
      <section className="mb-6">
        <div className="h-6 bg-gray-300 mb-2 rounded w-1/3"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div className="flex" key={index}>
              <div className="w-1/4">
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="w-3/4 space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-6">
        <div className="h-6 bg-gray-300 mb-2 rounded w-1/3"></div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <ul className="space-y-2">
              {[...Array(4)].map((_, index) => (
                <li className="h-4 bg-gray-300 rounded" key={index}></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="flex flex-wrap">
              {[...Array(14)].map((_, index) => (
                <span className="h-4 bg-gray-300 rounded m-1 p-1" key={index}></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loading;
