import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import { useSelector } from "react-redux"
import { Typography } from "@mui/material"

const Purchases = () => {
const {getStockData} = useStockCall()
const{purchases} = useSelector((state)=> state.stock)


useEffect(()=> {
getStockData("purchases")
},[])

console.log(purchases);


  return <Typography>Purchases</Typography>
}

export default Purchases
