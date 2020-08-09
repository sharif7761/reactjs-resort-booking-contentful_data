
 import React, { Fragment } from 'react';
 import RoomsFilter from './RoomsFilter';
 import RoomsList from './RoomsList';

 import {withRoomConsumer} from '../context';
 import Loading from './Loading';


 const RoomsContainer = ({context}) => {
 const {loading,sortedRooms,rooms}=context;
 if(loading){
                   return <Loading/>
                        }
                         return (
                             <Fragment>
                             
                             <RoomsFilter rooms={rooms} />
                             <RoomsList rooms={sortedRooms} />
                         </Fragment>
                         )
}


export default withRoomConsumer (RoomsContainer);


// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';

// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             { value=>{
//                    const {loading,sortedRooms,rooms}=value;
//                    if(loading){
//                        return <Loading/>
//                    }
//                     return (
//                         <div>
//                         from rooms container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                     )
//                 }
//             }


//         </RoomConsumer>


      
//     );
// };

// export default RoomsContainer;