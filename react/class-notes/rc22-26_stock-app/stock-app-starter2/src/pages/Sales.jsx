import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"

const Sales = () => {

const {getStockData}= useStockCall()

useEffect(()=> {
getStockData("sales")
},[])

  return <div>Sales</div>
}

export default Sales
