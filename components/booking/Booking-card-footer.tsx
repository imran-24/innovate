"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Class from "../class";
import { Payment } from "../payment";
import CheckItem from "../check-item";
import Passenger from "../passenger";

const BookingCardFooter = () => {
  const [direct, setDirect] = useState(false);

  return (
    <>
      <div className="flex flex-1 flex-col-reverse gap-y-2 items-start md:items-center  md:flex-row md:justify-between ">
        <div className="w-42">
          <CheckItem
            checked={direct}
            onChange={() => setDirect(!direct)}
            label="Direct flight only"
          />
        </div>
        <div className="flex flex-wrap gap-y-2 items-center gap-x-2">
          <Passenger />
          <Class />
          <Payment />
        </div>
      </div>
      <div className="w-full   sm:w-auto flex justify-end ">
        <Button type="button" size={"sm"} variant={"green"}>
          Search
        </Button>
      </div>
    </>
  );
};

export default BookingCardFooter;
