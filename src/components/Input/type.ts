export interface InputProps {
  id: string;
  name: string;
  type?: "text" | "password" | "search";
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
