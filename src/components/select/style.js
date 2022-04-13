export const customStyles = {
   dropdownIndicator: (provided, state) => ({
     ...provided,
     transition: 'all 0.3s',
     transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
   }),
   option: (provided, state) => ({
    ...provided,
    fontSize: '14px'
  }),
   placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      color: "#A8A8A8",
      fontSize: '12px'
    };
  },
   control: (provided, { isDisabled, isFocused }) => ({
     ...provided,
     cursor: isDisabled ? 'text' : 'pointer',
     backgroundColor: isDisabled
       ? '#f9f9f9 '
       : isFocused
       ? 'transparent'
       : '#fff',
     backdropFilter: isDisabled ? 'blur(50px)' : null,
     border: '1px solid #BCC6D4',
     border: isFocused
       ? '1px solid rgba(3,58,29,0.5) !important'
       : '1px solid #BCC6D4',
     userSelect: 'none',
     borderRadius: '4px',
     fontSize: '14px',
     '&:focus': {
       border: isFocused
         ? 'border: 1px solid #BCC6D4 !important'
         : 'transparent',
     },
   }),
 };