
"use client";

import React from "react";
import { useCounter } from "./useCounter";

const CounterValue = React.memo(
  ({ value }: { value: string | number }) => {
    const { ref, displayValue } = useCounter(value);

    return (
      <span ref={ref}>
        {displayValue}
      </span>
    );
  }
);

export default CounterValue;
