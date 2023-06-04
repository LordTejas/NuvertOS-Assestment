interface ISearchBarProps {
    value: string;
    onChange: (e: any) => void;
    placeholder?: string;
}

const SearchBar = (props: ISearchBarProps) => {
    return (
        <>
            <input 
            type="search" 
            placeholder={props.placeholder ? props.placeholder : ''} 
            className="w-full h-full border-[1px] border-neutral-300 rounded-full px-4 text-xl focus:outline-none"
            value={props.value}
            onChange={props.onChange}
            />
        </>
    );
}

export default SearchBar;
