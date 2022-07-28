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
  required,
  className,
}) => {
  return (
    <StyleSelectAll>
      <label className="select-label" style={{ fontSize: '14px' }}>
        {title}
      </label>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({
          field: { onChange, value, ref },
          formState: { errors },
        }) => (
          <Select
            ref={ref}
            className={className}
            options={options}
            onChange={onChange}
            value={value}
            defaultValue={defValue ? defValue : []}
            // isDisabled={disabled ? disabled : false}
            styles={customStyles}
            placeholder={placeholder}
            error={!!errors?.title}
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
