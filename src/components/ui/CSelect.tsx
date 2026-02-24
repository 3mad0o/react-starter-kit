import type { StylesConfig } from 'react-select'
import Select, { type Props as SelectProps } from 'react-select'

type OptionType = {
  value: string | number
  label: string
}

type CSelectProps = SelectProps<OptionType,boolean>


const customStyles: StylesConfig<OptionType,boolean> = {
  control: (base, state) => ({
    ...base,

    // border-2
    borderWidth: '2px',

    // border-gray-300
    borderColor: state.isFocused ? '#e5e7eb' : '#d1d5db',

    // rounded-md
    borderRadius: '6px',

    // p-2
    padding: '2px',

    // remove default blue shadow
    boxShadow: state.isFocused ? '0 0 0 2px #e5e7eb' : 'none',

    // remove default outline
    outline: 'none',

    '&:hover': {
      borderColor: '#d1d5db',
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: '0 8px', // similar to px-2
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
}
export const CSelect = (props: CSelectProps) => {
  return <Select {...props} 
  styles={customStyles}
  />
}