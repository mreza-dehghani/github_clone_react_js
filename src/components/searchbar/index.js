import { Wrapper, SearchInput } from './style';

export default ({ name, onChange, placeholder }) => {
	return (
		<Wrapper>
			<SearchInput type="text" name={name} id={name} onChange={e => onChange(e)} placeholder={placeholder} />
		</Wrapper>
	);
};
