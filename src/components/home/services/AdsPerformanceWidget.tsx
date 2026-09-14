// import React, { useState, useEffect, useRef } from "react";
// import { avatars, chartData, CustomActiveDotProps } from "./ServiceData";
// import {
//   AreaChart,
//   Area,
//   Line,
//   ResponsiveContainer,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   TooltipProps,
// } from "recharts";

// interface RechartsMouseMoveState {
//   activePayload?: Array<{
//     payload: {
//       month: string;
//       spend: number;
//       recovery: number;
//     };
//   }>;
// }

// interface CustomTooltipProps extends TooltipProps<number, string> {
//   active?: boolean;
//   payload?: Array<{
//     value: number;
//     name: string;
//     dataKey: string;
//     payload: {
//       month: string;
//       spend: number;
//       recovery: number;
//     };
//   }>;
//   label?: string;
// }

// const CustomActiveDot = (props: CustomActiveDotProps) => {
//   const { cx, cy } = props;

//   if (cx === undefined || cy === undefined) {
//     return null;
//   }

//   const pillWidth = 21.290218;
//   const pillX = cx - pillWidth / 2;
//   const pillY = cy - 44.5;

//   return (
//     <g
//       pointerEvents="none"
//       style={{
//         overflow: "visible",
//       }}
//     >
//       <g transform={`translate(${pillX}, ${pillY})`}>
//         <defs>
//           <linearGradient
//             id="activeHoverPillGradient"
//             x1="7.25495"
//             y1="-18.5955"
//             x2="48.7472"
//             y2="117.566"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#CB3D0B" />
//             <stop offset="1" stopColor="#EE7950" />
//           </linearGradient>

//           <linearGradient
//             id="activeHoverLineGradient"
//             x1="10.7578"
//             y1="-1.70299"
//             x2="10.7576"
//             y2="-1.70299"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#F3F4FF" />
//             <stop offset="1" stopColor="white" />
//           </linearGradient>

//           <clipPath id="activeHoverPillClip">
//             <path
//               d="
//                 M0 5.85197
//                 C0 2.62002 2.62002 0 5.85197 0
//                 H15.4383
//                 C18.6702 0 21.2902 2.62001 21.2902 5.85197
//                 V114.052
//                 H0
//                 V5.85197Z
//               "
//             />
//           </clipPath>
//         </defs>

//         <g clipPath="url(#activeHoverPillClip)">
//           <path
//             d="
//               M0 5.85197
//               C0 2.62002 2.62002 0 5.85197 0
//               H15.4383
//               C18.6702 0 21.2902 2.62001 21.2902 5.85197
//               V114.052
//               H0
//               V5.85197Z
//             "
//             fill="url(#activeHoverPillGradient)"
//           />

//           <path
//             d="M10.7578 -18.0234L10.7577 116.38"
//             stroke="url(#activeHoverLineGradient)"
//             strokeWidth="1.2"
//           />
//         </g>
//       </g>

//       <circle
//         cx={cx}
//         cy={cy}
//         r={4.5}
//         fill="#F74608"
//         fillOpacity={0.8}
//         stroke="#FFFFFF"
//         strokeWidth={1.17}
//         style={{
//           filter: "drop-shadow(0px 1.17px 3.51px rgba(0, 0, 0, 0.15))",
//         }}
//       />
//     </g>
//   );
// };

// // Custom Tooltip Component with proper types
// const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     const spendData = payload.find((p) => p.dataKey === 'spend');
//     const recoveryData = payload.find((p) => p.dataKey === 'recovery');
    
//     return (
//       <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-100 min-w-[130px] animate-in fade-in duration-300">
//         <p className="text-xs font-semibold text-gray-600 mb-1.5">{label}</p>
//         <div className="space-y-1">
//           <div className="flex items-center justify-between gap-4">
//             <span className="text-xs text-gray-500">Spend</span>
//             <span className="text-xs font-semibold text-[#F74608]">
//               ${spendData?.value?.toLocaleString() || 0}
//             </span>
//           </div>
//           <div className="flex items-center justify-between gap-4">
//             <span className="text-xs text-gray-500">Recovery</span>
//             <span className="text-xs font-semibold text-[#18E44B]">
//               {recoveryData?.value || 0}%
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

// export const AdsPerformanceWidget = () => {
//   const [activeMonth, setActiveMonth] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(true);
//   const [showTooltip, setShowTooltip] = useState(false);
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const chartRef = useRef<any>(null);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // Auto-animate through months
//   useEffect(() => {
//     if (!isAnimating) {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//       return;
//     }

//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const next = (prev + 1) % chartData.length;
//         const month = chartData[next].month;
//         setActiveMonth(month);
//         setShowTooltip(true);
//         return next;
//       });
//     }, 2000);

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//     };
//   }, [isAnimating]);

//   // Pause animation on hover
//   const handleMouseEnter = () => {
//     setIsAnimating(false);
//     setShowTooltip(true);
//   };
  
//   const handleMouseLeave = () => {
//     setIsAnimating(true);
//   };

//   // Handle chart mouse move
//   const handleMouseMove = (nextState: unknown) => {
//     const state = nextState as RechartsMouseMoveState;
//     if (state?.activePayload && state.activePayload.length > 0) {
//       const data = state.activePayload[0].payload;
//       setActiveMonth(data.month);
//       setShowTooltip(true);
//       setIsAnimating(false);
//     }
//   };

//   const handleMouseLeaveChart = () => {
//     // Don't hide tooltip, let animation continue
//   };

//   // Get current data for tooltip
//   const getCurrentData = () => {
//     return chartData[currentIndex];
//   };

//   const currentData = getCurrentData();

//   return (
//     <div
//       className="w-full max-w-[416px] rounded-2xl bg-white p-3.5 sm:p-4 border-[6px] sm:border-[8px] border-[#F7BFE4] mx-auto"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between gap-2">
//         <div className="flex items-center gap-2">
//           <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF2EE]">
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 32 32"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12.6667 21V18.5M16 16.8333V21M19.3333 21V15.1667 M11.4167 15.5833L12.6372 14.1594 C13.4296 13.235 14.6531 12.8006 15.851 13.0184 C17.51 13.32 19.2115 12.7885 20.4038 11.5962L20.5833 11.4167 M14.5 23.5H17.5 C19.9998 23.5 21.2497 23.5 22.126 22.8634 C22.4089 22.6578 22.6578 22.4089 22.8634 22.126 C23.5 21.2497 23.5 19.9998 23.5 17.5 V14.5 C23.5 12.0002 23.5 10.7503 22.8634 9.87405 C22.6578 9.59107 22.4089 9.34221 22.126 9.13661 C21.2497 8.5 19.9998 8.5 17.5 8.5 H14.5 C12.0002 8.5 10.7503 8.5 9.87405 9.13661 C9.59107 9.34221 9.59107 9.59107 9.87405 9.87405 C8.5 10.7503 8.5 12.0002 8.5 14.5 V17.5 C8.5 19.9998 8.5 21.2497 9.13661 22.126 C9.34221 22.4089 9.59107 22.6578 9.87405 22.8634 C10.7503 23.5 12.0002 23.5 14.5 23.5Z"
//                 stroke="#F74608"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>

//           <p className="body-regular font-jakarta text-sm sm:text-base">Ads Performance</p>
//         </div>

//         <div className="flex -space-x-2 shrink-0">
//           {avatars.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt=""
//               className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px] rounded-full border-2 border-white object-cover"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="mt-4 flex items-start justify-between">
//         <div>
//           <p className="caption-regular font-jakarta text-[#626262]">Amount Spent</p>
//           <p className="body-regular text-[#41504D] font-bricolage">$42,850</p>
//         </div>

//         <div>
//           <p className="caption-regular font-jakarta text-[#626262]">Recovery Accounts</p>
//           <p className="body-regular text-[#41504D] font-bricolage">98%</p>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="mt-3 h-28 w-full relative">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             ref={chartRef}
//             data={chartData}
//             style={{ overflow: "visible" }}
//             margin={{
//               top: 4,
//               right: 12,
//               left: 12,
//               bottom: 0,
//             }}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeaveChart}
//           >
//             <CartesianGrid
//               vertical
//               horizontal={false}
//               stroke="#EBF0F5"
//               strokeWidth={1}
//             />

//             <defs>
//               <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#F74608" stopOpacity={0.35} />
//                 <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
//               </linearGradient>

//               <linearGradient id="lineOrange" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#CB3D0B" />
//                 <stop offset="100%" stopColor="#EE7950" />
//               </linearGradient>
//             </defs>

//             <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />

//             <Area
//               type="monotone"
//               dataKey="spend"
//               stroke="url(#lineOrange)"
//               strokeWidth={2}
//               fill="url(#spendGradient)"
//               dot={false}
//               activeDot={<CustomActiveDot />}
//             />

//             <Line
//               type="monotone"
//               dataKey="recovery"
//               stroke="#18E44B"
//               strokeWidth={2}
//               dot={false}
//               activeDot={false}
//             />

//             <Tooltip
//               content={<CustomTooltip />}
//               cursor={false}
//               active={showTooltip}
//               defaultIndex={currentIndex}
//               position={{ y: -10 }}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Months with slider animation */}
//       <div className="mt-2 flex justify-between px-[12px]">
//         {chartData.map((d, index) => {
//           const isActive = activeMonth === d.month;
//           const isNext = index === (currentIndex + 1) % chartData.length;

//           return (
//             <div key={d.month} className="w-0 flex justify-center items-center">
//               <span
//                 className={`whitespace-nowrap transition-all duration-500 cursor-pointer ${
//                   isActive
//                     ? "text-xs font-semibold text-[#F74608] scale-110"
//                     : isNext && isAnimating
//                     ? "text-[#F74608] text-[8px] opacity-70"
//                     : "text-[#0A0A0A99] text-[8px]"
//                 }`}
//                 onClick={() => {
//                   setCurrentIndex(index);
//                   setActiveMonth(d.month);
//                   setShowTooltip(true);
//                   setIsAnimating(false);
//                 }}
//               >
//                 {d.month}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Progress indicator with slider animation */}
//       <div className="mt-3 flex justify-center gap-1.5">
//         {chartData.map((_, index) => (
//           <div
//             key={index}
//             className={`h-1.5 rounded-full transition-all duration-700 ease-in-out ${
//               index === currentIndex 
//                 ? "w-6 bg-gradient-to-r from-[#CB3D0B] to-[#EE7950]" 
//                 : "w-1.5 bg-[#F7BFE4]"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Current value display - slider style */}
//       <div className="mt-2 flex justify-between px-1 text-[8px] text-gray-400">
//         <span>${currentData?.spend?.toLocaleString() || 0}</span>
//         <span>{currentData?.recovery || 0}%</span>
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect, useRef } from "react";
import { avatars, chartData, CustomActiveDotProps } from "./ServiceData";
import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
} from "recharts";

interface RechartsMouseMoveState {
  activePayload?: Array<{
    payload: {
      month: string;
      spend: number;
      recovery: number;
    };
  }>;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    dataKey: string;
    payload: {
      month: string;
      spend: number;
      recovery: number;
    };
  }>;
  label?: string;
}

const CustomActiveDot = (props: CustomActiveDotProps) => {
  const { cx, cy } = props;

  if (cx === undefined || cy === undefined) {
    return null;
  }

  const pillWidth = 21.290218;
  const pillX = cx - pillWidth / 2;
  const pillY = cy - 44.5;

  return (
    <g
      pointerEvents="none"
      style={{
        overflow: "visible",
      }}
    >
      <g transform={`translate(${pillX}, ${pillY})`}>
        <defs>
          <linearGradient
            id="activeHoverPillGradient"
            x1="7.25495"
            y1="-18.5955"
            x2="48.7472"
            y2="117.566"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#CB3D0B" />
            <stop offset="1" stopColor="#EE7950" />
          </linearGradient>

          <linearGradient
            id="activeHoverLineGradient"
            x1="10.7578"
            y1="-1.70299"
            x2="10.7576"
            y2="-1.70299"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F3F4FF" />
            <stop offset="1" stopColor="white" />
          </linearGradient>

          <clipPath id="activeHoverPillClip">
            <path
              d="
                M0 5.85197
                C0 2.62002 2.62002 0 5.85197 0
                H15.4383
                C18.6702 0 21.2902 2.62001 21.2902 5.85197
                V114.052
                H0
                V5.85197Z
              "
            />
          </clipPath>
        </defs>

        <g clipPath="url(#activeHoverPillClip)">
          <path
            d="
              M0 5.85197
              C0 2.62002 2.62002 0 5.85197 0
              H15.4383
              C18.6702 0 21.2902 2.62001 21.2902 5.85197
              V114.052
              H0
              V5.85197Z
            "
            fill="url(#activeHoverPillGradient)"
          />

          <path
            d="M10.7578 -18.0234L10.7577 116.38"
            stroke="url(#activeHoverLineGradient)"
            strokeWidth="1.2"
          />
        </g>
      </g>

      <circle
        cx={cx}
        cy={cy}
        r={4.5}
        fill="var(--color-primary)"
        fillOpacity={0.8}
        stroke="#FFFFFF"
        strokeWidth={1.17}
        style={{
          filter: "drop-shadow(0px 1.17px 3.51px rgba(0, 0, 0, 0.15))",
        }}
      />
    </g>
  );
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const spendData = payload.find((p) => p.dataKey === "spend");
    const recoveryData = payload.find((p) => p.dataKey === "recovery");

    return (
      <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-100 min-w-[130px]">
        <p className="text-xs font-semibold text-gray-600 mb-1.5">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs text-gray-500">Spend</span>
            <span className="text-xs font-semibold text-primary tabular-nums">
              ${spendData?.value?.toLocaleString() || 0}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs text-gray-500">Recovery</span>
            <span className="text-xs font-semibold text-[#18E44B] tabular-nums">
              {recoveryData?.value || 0}%
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const AdsPerformanceWidget = () => {
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAnimating) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % chartData.length;
        const month = chartData[next].month;
        setActiveMonth(month);
        setShowTooltip(true);
        return next;
      });
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAnimating]);

  const handleMouseEnter = () => {
    setIsAnimating(false);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsAnimating(true);
  };

  const handleMouseMove = (nextState: unknown) => {
    const state = nextState as RechartsMouseMoveState;
    if (state?.activePayload && state.activePayload.length > 0) {
      const data = state.activePayload[0].payload;
      setActiveMonth(data.month);
      setShowTooltip(true);
      setIsAnimating(false);
    }
  };

  const handleMouseLeaveChart = () => {};

  const getCurrentData = () => {
    return chartData[currentIndex];
  };

  const currentData = getCurrentData();

  return (
    <div
      className="w-full max-w-[416px] rounded-2xl bg-white p-3.5 sm:p-4 border-[6px] sm:border-[8px] border-[#F7BFE4] mx-auto select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF2EE]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 21V18.5M16 16.8333V21M19.3333 21V15.1667 M11.4167 15.5833L12.6372 14.1594 C13.4296 13.235 14.6531 12.8006 15.851 13.0184 C17.51 13.32 19.2115 12.7885 20.4038 11.5962L20.5833 11.4167 M14.5 23.5H17.5 C19.9998 23.5 21.2497 23.5 22.126 22.8634 C22.4089 22.6578 22.6578 22.4089 22.8634 22.126 C23.5 21.2497 23.5 19.9998 23.5 17.5 V14.5 C23.5 12.0002 23.5 10.7503 22.8634 9.87405 C22.6578 9.59107 22.4089 9.34221 22.126 9.13661 C21.2497 8.5 19.9998 8.5 17.5 8.5 H14.5 C12.0002 8.5 10.7503 8.5 9.87405 9.13661 C9.59107 9.34221 9.59107 9.59107 9.87405 9.87405 C8.5 10.7503 8.5 12.0002 8.5 14.5 V17.5 C8.5 19.9998 8.5 21.2497 9.13661 22.126 C9.34221 22.4089 9.59107 22.6578 9.87405 22.8634 C10.7503 23.5 12.0002 23.5 14.5 23.5Z"
                stroke="var(--color-primary)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <p className="body-regular font-jakarta text-sm sm:text-base">
            Ads Performance
          </p>
        </div>

        <div className="flex -space-x-2 shrink-0">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px] rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          <p className="caption-regular font-jakarta text-[#626262]">Amount Spent</p>
          <p className="body-regular text-[#41504D] font-bricolage tabular-nums">
            $42,850
          </p>
        </div>

        <div>
          <p className="caption-regular font-jakarta text-[#626262]">
            Recovery Accounts
          </p>
          <p className="body-regular text-[#41504D] font-bricolage tabular-nums">
            98%
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-3 h-28 w-full relative overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            ref={chartRef}
            data={chartData}
            style={{ overflow: "visible" }}
            margin={{
              top: 4,
              right: 12,
              left: 12,
              bottom: 0,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveChart}
          >
            <CartesianGrid
              vertical
              horizontal={false}
              stroke="#EBF0F5"
              strokeWidth={1}
            />

            <defs>
              <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="lineOrange" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#CB3D0B" />
                <stop offset="100%" stopColor="#EE7950" />
              </linearGradient>
            </defs>

            <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />

            <Area
              type="monotone"
              dataKey="spend"
              stroke="url(#lineOrange)"
              strokeWidth={2}
              fill="url(#spendGradient)"
              dot={false}
              activeDot={<CustomActiveDot />}
              isAnimationActive={false}
            />

            <Line
              type="monotone"
              dataKey="recovery"
              stroke="#18E44B"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              active={showTooltip}
              defaultIndex={currentIndex}
              position={{ y: -10 }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Months */}
      <div className="mt-2 flex justify-between px-[12px] h-4 items-center">
        {chartData.map((d, index) => {
          const isActive = activeMonth === d.month;
          const isNext = index === (currentIndex + 1) % chartData.length;

          return (
            <div key={d.month} className="w-0 flex justify-center items-center">
              <span
                className={`whitespace-nowrap transition-colors duration-300 cursor-pointer text-[10px] ${
                  isActive
                    ? "font-semibold text-primary"
                    : isNext && isAnimating
                    ? "text-primary opacity-70"
                    : "text-[#0A0A0A99]"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setActiveMonth(d.month);
                  setShowTooltip(true);
                  setIsAnimating(false);
                }}
              >
                {d.month}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="mt-3 flex justify-center items-center gap-1.5 h-2">
        {chartData.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ease-in-out transform-gpu ${
              index === currentIndex
                ? "w-6 bg-gradient-to-r from-[#CB3D0B] to-[#EE7950]"
                : "w-1.5 bg-[#F7BFE4]"
            }`}
          />
        ))}
      </div>

      {/* Current value display */}
      <div className="mt-2 flex justify-between px-1 text-[8px] text-gray-400 h-3 items-center">
        <span className="tabular-nums">
          ${currentData?.spend?.toLocaleString() || 0}
        </span>
        <span className="tabular-nums">{currentData?.recovery || 0}%</span>
      </div>
    </div>
  );
};