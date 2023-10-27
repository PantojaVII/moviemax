import { InputTextContainer, Label, InputTextStyled } from "./InputTextStyles";

interface InputTextProps {
  label: string;
  value?: string;
  placeholder: string;
  type: string;
}

export default function InputText({
  label,
  value,
  placeholder,
  type,
}: InputTextProps) {
  return (
    <InputTextContainer className="w-full">
      <Label htmlFor="">{label}</Label>
      <InputTextStyled
        type={type}
        className="input input-bordered w-full"
        value={value}
      />
    </InputTextContainer>
  );
}
