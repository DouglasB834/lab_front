import React, { ReactNode } from "react";
interface INotificationRootProps {
  hasSubmit: () => void;
  children: ReactNode;
}

export const FormContainerRoot = ({
  children,
  hasSubmit,
}: INotificationRootProps) => {
  return (
    <form
      noValidate
      onSubmit={hasSubmit}
      className="flex flex-col shadow-md p-4 rounded-lg gap-4"
    >
      {children}
    </form>
  );
};
