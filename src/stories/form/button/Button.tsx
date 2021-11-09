import './button.css';

interface ButtonProps {
  label: string
  variant: 'text' | 'contained' | 'outlined'
  color: 'primary' | 'secondary' | 'success' | 'error'
  onClick?: () => void
};

/*** Primary UI component for user interaction ***/
export const Button = ({ label='Button', variant='outlined', color='primary', ...rest }: ButtonProps) => {

  return (
    <button
      color={color}
      type="button"
      {...rest}
    >
      {label}
    </button>
  );
};