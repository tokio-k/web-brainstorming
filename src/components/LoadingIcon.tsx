import type { VFC } from "react";

type Props = {
  isSmall?: boolean;
  isCenter?: boolean;
};

export const LoadingIcon: VFC<Props> = (props) => {
  return (
    <div
      className={
        props.isCenter
          ? "flex fixed justify-center items-center w-full h-screen"
          : "inline-block"
      }
    >
      <svg
        className={`text-blue-500 animate-spin ${
          props.isSmall ? "w-5 h-5 " : "w-14 h-14 "
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};
