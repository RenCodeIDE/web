import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "react-hook-form";

interface AuthFormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
  autoComplete?: string;
}

export function AuthFormField({
  id,
  label,
  type = "text",
  placeholder,
  error,
  register,
  autoComplete,
}: AuthFormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        aria-invalid={error ? "true" : "false"}
        autoComplete={autoComplete}
      />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}
