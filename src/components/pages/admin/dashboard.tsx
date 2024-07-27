import React from 'react';

// Define the type for your custom component props
interface CustomSpanProps extends React.HTMLProps<HTMLSpanElement> {
  countTo: string;
}

const CustomSpan: React.FC<CustomSpanProps> = ({ countTo, children, ...props }) => {
  return (
    <span {...props} data-count-to={countTo}>
      {children}
    </span>
  );
};

// Usage of CustomSpan
export default function Dashboard() {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto space-y-6">
        <div className="w-full max-w-full px-3 mt-6 ml-auto xl:flex-0 shrink-0 xl:mt-0 xl:w-5/12">
          <div className="flex flex-wrap -mx-3">
            {/* Weather Box */}
            <div className="w-full max-w-full px-3 flex-0">
              <div className="border-black/12.5 shadow-soft-xl dark:shadow-soft-dark-xl bg-[#899cf0] relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-clip-border dark:bg-none">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-8/12 max-w-full px-3 my-auto flex-0">
                      <div className="numbers">
                        <p className="mb-0 font-semibold leading-normal text-white capitalize text-size-sm opacity-70">
                          Weather Today
                        </p>
                        <h5 className="mb-0 font-bold text-white">Delhi - 29°C</h5>
                      </div>
                    </div>
                    <div className="w-4/12 max-w-full px-3 text-right flex-0">
                      <h5 className="mb-0 mr-1 text-right text-white">Cloudy</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Container for Square Boxes */}
            <div className="w-full max-w-full px-3 mt-6 flex flex-wrap -mx-4 space-y-4">
              {/* Square Box 1 */}
              <div className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
                <div className="relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white shadow-md h-0 pb-[100%]">
                  <div className="flex-auto p-4 flex flex-col justify-between h-full">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-8/12 max-w-full px-3 my-auto flex-0">
                        <div className="numbers">
                          <p className="mb-0 font-semibold leading-normal text-black capitalize text-size-sm opacity-70">
                            Box Title 1
                          </p>
                          <h5 className="mb-0 font-bold text-black">Content 1</h5>
                        </div>
                      </div>
                      <div className="w-4/12 max-w-full px-3 text-right flex-0">
                        <h5 className="mb-0 mr-1 text-right text-black">Detail 1</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Square Box 2 */}
              <div className="w-full sm:w-1/2 px-4">
                <div className="relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white shadow-md h-0 pb-[100%]">
                  <div className="flex-auto p-4 flex flex-col justify-between h-full">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-8/12 max-w-full px-3 my-auto flex-0">
                        <div className="numbers">
                          <p className="mb-0 font-semibold leading-normal text-black capitalize text-size-sm opacity-70">
                            Box Title 2
                          </p>
                          <h5 className="mb-0 font-bold text-black">Content 2</h5>
                        </div>
                      </div>
                      <div className="w-4/12 max-w-full px-3 text-right flex-0">
                        <h5 className="mb-0 mr-1 text-right text-black">Detail 2</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
