import type { ReactNode } from 'react';

interface FormGroupProps {
  label: string;
  children: ReactNode; // Accetta qualsiasi cosa (input, select, ecc.)
}

export const FormGroup = ({ label, children }: FormGroupProps) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {children}
    </div>
  );
};