import { InputTextContainer, Label, InputTextStyled } from "./InputTextStyles";

interface InputTextProps {
  required?: boolean; 
  label: string;
  value?: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({
  required = false, 
  label,
  value,
  placeholder,
  type,
  onChange,
}: InputTextProps) {
  return (
    <InputTextContainer className="w-full">
      <Label htmlFor="">{label}</Label>
      <InputTextStyled
        type={type}
        className="input input-bordered w-full"
        value={value}
        required={required}  
        onChange={onChange}
      />
    </InputTextContainer>
  );
}
