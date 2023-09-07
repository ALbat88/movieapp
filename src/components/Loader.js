import React from "react";
import { CircularProgress } from "@mui/material";
import {styled} from "@mui/system";

const Loader =()=>{

const LoaderWrapper = styled("div")(({theme})=>({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3)
}))

    return(
        <LoaderWrapper>
            <CircularProgress/>
        </LoaderWrapper>
    )
};

export default Loader;