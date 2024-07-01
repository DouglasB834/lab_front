import React, { ButtonHTMLAttributes, ElementType } from "react";
import { Button } from "../ui/button";

interface iFormPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ElementType;
  text: string;
}

export const FormButtonType = ({ icon, text, ...rest }: iFormPropsButton) => {
  return (
    <Button {...rest} type="submit">
      {text}
    </Button>
  );
};
