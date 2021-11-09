import { Button as MuiButton } from "@mui/material";


interface ButtonProps {
  label: string
  variant: 'contained' | 'outlined' | 'text'
  color: 'primary' | 'secondary' | 'success' | 'error'
  onClick?: () => void
};

/*** Primary UI component for user interaction ***/
export const Button = ({ label, variant, color, ...rest }: ButtonProps) => {
  return (
    <MuiButton
      color={color}
      type="button"
      variant={variant}
      {...rest}
    >
      {label}
    </MuiButton>
  );
};