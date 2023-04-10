import { useDispatch } from 'react-redux';

import { setFilter } from '../../redax/filterSlice';

import fields from 'components/shared/InputField/fields';
import { InputField } from '../shared/InputField/InputField';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const filterValue = e.target.value;

    dispatch(setFilter(filterValue));
  };
  return (
    <div>
      <InputField onChange={onChange} {...fields.nameFilter} />
    </div>
  );
};
