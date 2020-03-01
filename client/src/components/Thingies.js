import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ArrayOptions } from "../helpers/ArrayOptions";

import EventPopulate from "./EventPopulate";

function Thingies() {
  const { events, fetchEvents } = useContext(GlobalContext);

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   <ArrayOptions array="testArray" />;
  //   let choosenArray = ArrayOptions("thingies");
  //   console.log(choosenArray); ---> this is all i need now to retreive the array of images pathway values now

  return (
    <div>
      <EventPopulate array={events} className={"threshold"} randomPos={true} />
      <EventPopulate array={[1, 2, 3, 4, 5, 6]} randomPos={false} />
      <EventPopulate
        array={ArrayOptions("thingies")}
        className={"line"}
        randomPos={true}
      />
      <EventPopulate
        array={ArrayOptions("thingies")}
        className={"easeLarger"}
        randomPos={true}
        image={true}
      />
      <EventPopulate
        array={ArrayOptions("boundthingies")}
        className={"easeLarger"}
        randomPos={true}
        image={true}
      />
      <EventPopulate
        array={events}
        className={"defaultTxt"}
        randomPos={true}
        text={true}
      />
      <EventPopulate
        array={ArrayOptions("testArray")}
        className={"defaultTxt"}
        randomPos={true}
        text={true}
      />
    </div>
  );
}

export default Thingies;
