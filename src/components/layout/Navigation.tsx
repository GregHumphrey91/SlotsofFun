import React from "react";
import { Input, Icon } from "semantic-ui-react";
import Filters from "./Filters";

const Navigation = ({ search, setSearch, setFilter }: any) => {
  const onChange = (e: any) => {
    setFilter("");
    setSearch(e.target.value);
  };

  return (
    <div className='nav-menu'>
      <h1 className='title'>SLOTS</h1>

      <Filters setFilter={setFilter} />

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
