import './button.css';

interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined'
  label: string
  onClick?: () => void
};

/*** Primary UI component for user interaction ***/
export const Button = ({ variant='outlined', label='Button', ...rest }: ButtonProps) => {

  return (
    <button 
      type="button"
      {...rest}
    >
      {label}
    </button>
  );
};