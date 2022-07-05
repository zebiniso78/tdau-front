import React from 'react';
import { Items } from '../card/items';
export default function CardProviderComponent({ data, program, type }) {
  switch (type) {
    case '/bachelor':
      return data
        ?.filter(
          (x) =>
            x?.programme_id ===
            program?.find((y) => y?.name?.toLowerCase() === 'bachelor')?.id
        )
        ?.map((item) => <Items key={item?.id} item={item} />);
    case '/master':
      return data
        ?.filter(
          (x) =>
            x?.programme_id ===
            program?.find((y) => y?.name?.toLowerCase() === 'master')?.id
        )
        ?.map((item) => <Items key={item?.id} item={item} />);

    default:
      return data
        ?.filter(
          (x) =>
            x?.programme_id ===
            program?.find((y) => y?.name?.toLowerCase() === 'phd')?.id
        )
        ?.map((item) => <Items key={item?.id} item={item} />);
  }
}
