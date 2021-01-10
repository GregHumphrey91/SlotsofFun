import React from "react";
import { Image, Label } from "semantic-ui-react";
import allIcon from "../../assets/Img/Icons/filter/all.png";
import newIcon from "../../assets/Img/Icons/filter/new.png";
import topIcon from "../../assets/Img/Icons/filter/top.png";

const Filters = ({ setFilter }: any) => {
  return (
    <div className='filters'>
      <Label.Group>
        <Label className='fltAll' onClick={() => setFilter("all")}>
          <Image className='filter-all' src={allIcon} size='huge' />
        </Label>

        <Label className='fltAll' onClick={() => setFilter("new")}>
          <Image className='filter-new' src={newIcon} size='huge' />
        </Label>

        <Label className='fltAll' onClick={() => setFilter("high limit")}>
          <Image className='filter-top' src={topIcon} size='huge' />
        </Label>
      </Label.Group>
    </div>
  );
};

export default Filters;
