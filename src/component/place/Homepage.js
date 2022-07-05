import React, { useState, useEffect } from "react";
import "./card.css";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import IconButton from "@mui/material/IconButton";

import Data from "./example_data.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

const options = ["restaurant", "cafe", "bakery"];

export default function HomepageCard() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [n, setN] = useState("");

  function search (rows) {
    return rows.filter((rows) => rows.name.toLowerCase(n).indexOf)
  }

  return (
    <div>
   
      <div className="head-search">
        <div></div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
            height: 40,
          }}
          renderInput={(params) => <TextField {...params} />}
        />

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            height: 40,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"  onChange={(e)=> {
            setN(e.target.value);
          }} />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <div className="card-container">
        { Data &&
           Data.map((data) => {
            return (
                
              <Card sx={{ maxWidth: 400, maxHeight: 225 }} key={data.id}>
                <CardHeader
                  avatar={
                    <img
                      src={data.profile_image_url}
                      height="60"
                      width="60"
                      style={{ borderRadius: "10px", marginLeft: "0.25rem" }}
                    ></img>
                  }
                  title={data.name}
                  subheader={
                    data.operation_time &&
                    data.operation_time.map((timedata) => {
                      if (timedata.day == "Monday") {
                        return (
                          <div>
                            {timedata.time_open} AM - {timedata.time_close} PM{" "}
                            <span>&nbsp;&nbsp;</span> {data.rating}
                          </div>
                        );
                      }
                    })
                  }
                />

                <div style={{ borderRadius: "10px" }}>
                  <div className="card-img">
                    {data.images &&
                      data.images.map((imgData) => {
                        return (
                          <div>
                            <img
                              src={imgData}
                              height="120"
                              width="120"
                              style={{ borderRadius: "5px" }}
                            ></img>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
