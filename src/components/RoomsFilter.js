import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

//get all unique values in select
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}


const RoomsFilter = ({rooms}) => {
    
    const context=useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context
  
    //get unique type
    let types=getUnique(rooms,'type');
    
    //get all
     types=['all', ...types];

    //map to jsx
    types=types.map((item,index)=>{
    return (

     <option value={item} key={index}>{item}</option>
     );
    });


    let people=getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return (
        <option key={index} value={item}>{item}</option>
        )
    })

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
            {/* select type */}

            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                </select>

            </div>

            {/* end select  type */}

             {/* guest  */}

             <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select
                name="capacity"
                id="capacity"
                value={capacity}
                className="form-control"
                onChange={handleChange}>
                    {people}
                </select>

            </div>

            {/* end   guest */}

            {/* price */}

            <div className="form-group">
    <label htmlFor="price">room price ${price}
    </label>
    <input type="range" name="price" min={minPrice}
    max={maxPrice} id="price" className="form-control" value={price} onChange={handleChange}  />
            </div>
            {/* end   price */}

             {/*  size */}

             <div className="form-group">
    <label htmlFor="size">room size
    </label>
<div className="size-inputs">
    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
    
</div>
    </div>

              {/* end   size */}

         {/*    extras */}
         <div className="form-group">
         <div className="single-extra">
        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
        <label htmlFor="breakfast">breakfast</label>
        </div>

        <div className="single-extra">
        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
        <label htmlFor="pets">pets</label>
        </div>
    </div>

          {/* end   extras */}

            </form>
        </section>
    );
};

export default RoomsFilter;