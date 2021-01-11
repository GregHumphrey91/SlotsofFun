import React from "react";
import { Image, Label } from "semantic-ui-react";
import {
  allIcon,
  allHover,
  newIcon,
  newHover,
  topIcon,
  topHover,
} from "../common/FilterIcons";

import { FilterProps } from "../../interfaces/NavigationProps.interface";

const Filters = ({ filter, setFilter }: FilterProps) => {
  return (
    <Label.Group>
      <Label
        className='filters filter-all-container'
        onClick={() => setFilter("all")}
        active={filter === "all" ? true : false}
      >
        <Image className='filter-all' src={allIcon} size='huge' />
        <Image className='filter-all-hover' src={allHover} size='huge' />
      </Label>

      <Label
        className='filters filter-new-container'
        onClick={() => setFilter("new")}
        active={filter === "new" ? true : false}
      >
        <Image className='filter-new' src={newIcon} size='huge' />
        <Image className='filter-new-hover' src={newHover} size='huge' />
      </Label>

      <Label
        className='filters filter-high-limit-container'
        onClick={() => setFilter("high limit")}
        active={filter === "high limit" ? true : false}
      >
        <Image className='filter-top' src={topIcon} size='huge' />
        <Image className='filter-top-hover' src={topHover} size='huge' />
      </Label>
    </Label.Group>
  );
};

export default Filters;
