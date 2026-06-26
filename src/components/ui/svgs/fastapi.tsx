import type { SVGProps } from "react";

const FastAPI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    fillRule="evenodd"
    clipRule="evenodd"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>FastAPI</title>
    <path d="M12 0C5.376 0 0 5.376 0 12c0 6.624 5.376 12 12 12 6.624 0 12-5.376 12-12 0-6.624-5.376-12-12-12zm-.624 21.624v-7.624H7.5L13.5 2.376v7.624h3.876L11.376 21.624z" />
  </svg>
);

export { FastAPI };
