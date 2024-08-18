export const Select = ({options}) => {
    return(
            <select>
                    {options.map(option => <option value={option.value} key={option.key}>{option.value}</option>)}
            </select>
    )
}