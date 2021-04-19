import { Wrapper, SearchInput } from './style';

export default ({ name, onChange, placeholder, styleType, searchbarRef }) => {
	return (
		<Wrapper styleType={styleType}>
			<SearchInput
				ref={searchbarRef}
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
