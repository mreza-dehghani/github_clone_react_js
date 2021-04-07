import { CardWrapper, CardHeader, CardBody, CardFooter } from './style';

export const Card = ({ children }) => {
	return <CardWrapper>{children}</CardWrapper>;
};

export const Header = ({ children }) => <CardHeader>{children}</CardHeader>;

export const Body = ({ children }) => <CardBody>{children}</CardBody>;

export const Footer = ({ children }) => <CardFooter>{children}</CardFooter>;
