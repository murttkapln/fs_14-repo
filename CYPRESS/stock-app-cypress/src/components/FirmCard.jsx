import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle } from "../styles/globalStyles"
import useStockCall from "../hooks/useStockCall"
export default function FirmCard({ firm, handleOpen, info, setInfo }) {
  const { deleteStockData } = useStockCall()
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography data-test="firmCardName" gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography data-test="firmCardAdress" variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
      </CardContent>
      <CardMedia
        data-test="firmCardImage"
        sx={{ p: 1, objectFit: "contain", height: 140 }}
        image={firm.image}
        title={firm.name}
        component="img"
      />
      <Typography data-test="firmCardPhone" variant="body2" color="text.secondary">
        {firm.phone}
      </Typography>
      <CardActions>
        <EditIcon
          data-test="editBtn"
          sx={btnStyle}
          onClick={() => {
            handleOpen()
            setInfo(firm)
          }}
        />
        <DeleteOutlineIcon
          data-test="deleteBtn"
          sx={btnStyle}
          onClick={() => deleteStockData("firms", firm.id)}
        />
      </CardActions>
    </Card>
  )
}