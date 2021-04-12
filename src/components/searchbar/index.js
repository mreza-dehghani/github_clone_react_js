import { Wrapper, SearchInput } from './style';

export default ({ name, onChange, placeholder, styleType }) => {
	return (
		<Wrapper styleType={styleType}>
			<SearchInput
				type="text"
				name={name}
				id={name}
				onChange={e => onChange(e)}
				placeholder={placeholder}
				styleType={styleType}
			/>
		</Wrapper>
	);
};
