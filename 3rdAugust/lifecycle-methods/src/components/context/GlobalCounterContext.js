import { createContext } from "react";

export const GlobalCounterContext = createContext({count: {}, dispatchCount: () => {}})