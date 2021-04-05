import { FormLabelElement, FormInputElement, FormGroupElement, FormTextElement } from './style';

export const FormLabel = ({ children }) => <FormLabelElement>{children}</FormLabelElement>;

export const FormInput = props => <FormInputElement {...props}>{props.children}</FormInputElement>;

export const FormGroup = ({ children }) => <FormGroupElement>{children}</FormGroupElement>;

export const FormText = ({ children }) => <FormTextElement>{children}</FormTextElement>;
