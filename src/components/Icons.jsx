import React from 'react';

// Logo component - Uses the exact PNG logo file
export const LogoIcon = ({ className = "", ...props }) => (
  <img
    src="/logo.png"
    alt="SKA Insight Logo"
    className={`transform transition-transform duration-300 group-hover:scale-110 ${className}`}
    {...props}
  />
);

export const ArrowRightIcon = ({ className = "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowLeftIcon = ({ className = "w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

export const ArrowUpIcon = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);

export const CheckCircleIcon = ({ className = "w-5 h-5 mr-2 text-blue-400 flex-shrink-0", ...props }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const XIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const BriefcaseIcon = ({ className = "w-6 h-6 text-blue-400", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const BrainCircuitIcon = ({ className = "w-6 h-6 text-blue-400", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 5a3 3 0 1 0-5.993.13a3 3 0 0 0 5.993-.13Zm0 0a3 3 0 1 0 5.993.13A3 3 0 0 0 12 5Z" />
    <path d="M12 12a3 3 0 1 0-5.993.13A3 3 0 0 0 12 12Zm0 0a3 3 0 1 0 5.993.13A3 3 0 0 0 12 12Z" />
    <path d="M12 19a3 3 0 1 0-5.993.13A3 3 0 0 0 12 19Zm0 0a3 3 0 1 0 5.993.13A3 3 0 0 0 12 19Z" />
    <path d="M21 12h-3" />
    <path d="M6 12H3" />
    <path d="m17 5-1-1" />
    <path d="m8 18-1 1" />
    <path d="m17 19-1 1" />
    <path d="m8 6-1-1" />
    <path d="M12 5V3" />
    <path d="M12 12v-2" />
    <path d="M12 19v-2" />
  </svg>
);

export const SparklesIcon = ({ className = "w-4 h-4 mr-2", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M9.93 2.07a1 1 0 0 0-1.86 0L7 6l-3.93.07a1 1 0 0 0 0 2L7 8l-1.07 3.93a1 1 0 0 0 1.86 0L8 8l1.07-3.93A1 1 0 0 0 9.93 2.07zM14 14l-1.07 3.93a1 1 0 0 0 1.86 0L16 14l1.07 3.93a1 1 0 0 0 1.86 0L18 14l3.93-.07a1 1 0 0 0 0-2L18 12l1.07-3.93a1 1 0 0 0-1.86 0L16 12l-1.07-3.93a1 1 0 0 0-1.86 0L12 12l-3.93.07a1 1 0 0 0 0 2L12 14z" />
  </svg>
);

// Service icons
export const serviceIcons = {
  consulting: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  ),
  development: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
      <path d="m12 22.08V12" />
    </svg>
  ),
  management: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  ),
};
