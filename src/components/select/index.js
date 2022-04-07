import React from 'react';
import Select from 'react-select';
import { StyleSelectAll } from '../../styles/globalStyle';
import { customStyles } from './style';

const UserFormSelectComponent = ({
  Controller,
  control,
  title,
  options,
  defValue,
  disabled,
  name,
  placeholder,
  required
}) => {
  return (
    <StyleSelectAll>
      <label className="select-label" style={{fontSize: '14px'}}>{title}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field: { onChange, value } }) => (
          <Select
            className="select-element"
            options={options}
            onChange={onChange}
            value={value}
            defaultValue={defValue ? defValue : []}
            // isDisabled={disabled ? disabled : false}
            styles={customStyles}
            placeholder={placeholder}
          />
        )}
      />
    </StyleSelectAll>
  );
};

export default UserFormSelectComponent;

export const SelectItem = (allfaculty, setState) => {
  setState([]);
  let sortArr = allfaculty?.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });
  setState(sortArr);
};
