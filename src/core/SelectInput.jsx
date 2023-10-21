import React from "react";
import Select from "react-select";

const SelectInput = ({
  selectedOptionState,
  options = [],
  placeholder = "Select...",
  formatOptionLabel = false,
  onChange = null,
  maxHeight = null,
  isClearable = true,
  minWidth,
  disabled = false,
  error,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = selectedOptionState;

  const styles = {
    control: (base) => ({
      ...base,
      fontSize: "14px",
      lineHeight: "20px",
      borderRadius: "7px",
      borderColor: "#E5E7EB",
      padding: "5px",
      minWidth,
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
    menuList: (styles) => {
      return {
        ...styles,
        maxHeight: maxHeight ? maxHeight : null,
      };
    },
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (onChange) {
      onChange();
    }
  };

  return (
    <div {...props}>
      <Select
        placeholder={placeholder}
        defaultValue={options[0]}
        closeMenuOnSelect={true}
        formatOptionLabel={formatOptionLabel}
        options={options}
        styles={styles}
        onChange={handleChange}
        value={selectedOption}
        isClearable={isClearable}
        isDisabled={disabled}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default SelectInput;
