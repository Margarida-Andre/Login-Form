export interface ButtonProps {
  description: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
}
