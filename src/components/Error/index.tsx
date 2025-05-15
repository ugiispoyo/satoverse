"use client";

import clsx from "clsx";

const Error = ({
  message,
  description,
}: {
  message: string;
  description?: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col max-w-[900px] mx-auto">
      <h1
        className={clsx(
          "text-lg text-[#ebb4b8]",
          description ? "mt-10 mb-4" : "my-7"
        )}
      >
        {message}
      </h1>
      {description && (
        <p className=" text-gray-500 dark:text-gray-600 text-md mb-7">
          {description}
        </p>
      )}
    </div>
  );
};

export default Error;
