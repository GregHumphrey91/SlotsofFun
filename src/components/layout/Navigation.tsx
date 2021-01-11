import React from "react";
import { Input, Icon } from "semantic-ui-react";
import {
  FilterProps,
  SearchProps,
} from "../../interfaces/NavigationProps.interface";
import Filters from "./Filters";

const Navigation = ({
  search,
  setSearch,
  filter,
  setFilter,
}: FilterProps & SearchProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter("");
    setSearch(e.target.value);
  };

  return (
    <div className='nav-menu'>
      <h1 className='title'>SLOTS</h1>

      <Filters filter={filter} setFilter={setFilter} />

      <Input
        className='search'
        placeholder='Search'
        value={search}
        onChange={onChange}
        icon={<Icon name='search' inverted circular />}
      />
    </div>
  );
};

export default Navigation;
