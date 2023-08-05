import {legacy_createStore as createStore} from "redux"
import { counterReducer } from "./counterReducer"

//! store' u oluşturduk
export const store = createStore(counterReducer)



