import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Register = (props) => {
  const [usertype, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [age, setAge] = useState("");
  const [batch_name, setBatchName] = useState("");
  const [shop_name, setShopName] = useState("");
  const [canteen_opening_time, setCanteenOpeningTime] = useState("");
  const [canteen_closing_time, setCanteenClosingTime] = useState("");

  const UserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeContactNumber = (event) => {
    setContactNumber(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeBatchName = (event) => {
    setBatchName(event.target.value);
  };

  const onChangeShopName = (event) => {
    setShopName(event.target.value);
  };

  const onChangeCanteenOpeningTime = (event) => {
    setCanteenOpeningTime(event.target.value);
  };

  const onChangeCanteenClosingTime = (event) => {
    setCanteenClosingTime(event.target.value);
  };


  const resetInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setContactNumber("");
    setAge("");
    setBatchName("");
    setShopName("");
    setCanteenOpeningTime("");
    setCanteenClosingTime("");
    // setDate(null);
  };

  const onSubmitBuyer = (event) => {
    event.preventDefault();

    const newBuyer = {
      name: name,
      email: email,
      password: password,
      contact_number: contact_number,
      age: age,
      batch_name: batch_name,
      wallet: 0,
      // date: Date.now(),
    };

    axios
      .post("api/user/register/buyer", newBuyer)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });
    resetInputs();

    // window.location = "/";
  };

  const onSubmitVendor = (event) => {
    event.preventDefault();

    const newVendor = {
      name: name,
      shop_name: shop_name,
      email: email,
      password: password,
      contact_number: contact_number,
      canteen_opening_time: canteen_opening_time,
      canteen_closing_time: canteen_closing_time,
      // date: Date.now(),
    };

    axios
      .post("api/user/register/vendor", newVendor)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();

    // window.location = "/";
  };

  if(usertype === "buyer"){
  return (
    <Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
      <FormControl sx={{ m: 1, minWidth: 500 }}>
      <InputLabel>User Type</InputLabel>
      <Select
        value={usertype}
        label="User Type"
        variant="outlined"
        onChange={UserTypeChange}
      >
        <MenuItem value={"vendor"}>Vendor</MenuItem>
        <MenuItem value={"buyer"}>Buyer</MenuItem>
      </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contact Number"
          variant="outlined"
          value={contact_number}
          onChange={onChangeContactNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Batch Name"
          variant="outlined"
          value={batch_name}
          onChange={onChangeBatchName}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmitBuyer}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
  }else{
    return (
      <Grid container align={"center"} spacing={2}>
        <Grid item xs={12}>
        <FormControl sx={{ m: 1, minWidth: 500 }}>
        <InputLabel>User Type</InputLabel>
        <Select
          value={usertype}
          label="User Type"
          variant="outlined"
          onChange={UserTypeChange}
        >
          <MenuItem value={"vendor"}>Vendor</MenuItem>
          <MenuItem value={"buyer"}>Buyer</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
            label="Shop Name"
            variant="outlined"
            value={shop_name}
            onChange={onChangeShopName}
        />
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          label="Contact Number"
          variant="outlined"
          value={contact_number}
          onChange={onChangeContactNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
            label="Canteen Opening Time"
            variant="outlined"
            value={canteen_opening_time}
            onChange={onChangeCanteenOpeningTime}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
            label="Canteen Closing Time"
            variant="outlined"
            value={canteen_closing_time}
            onChange={onChangeCanteenClosingTime}
        />
      </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmitVendor}>
            Register
          </Button>
        </Grid>
      </Grid>
    );
  }
};

export default Register;
