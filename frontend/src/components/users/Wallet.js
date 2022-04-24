import axios from "axios";
import { useState, useEffect } from "react";
import { Statistic, Row, Col, Form, Input, Button, Radio } from 'antd';
// const {  Statistic, Row, Col, Button  } = antd;
import { InputNumber } from 'antd';
import { useScrollTrigger } from "@mui/material";

const UpdateWallet = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [wallet, setWallet] = useState("");
  const [recharge, setRecharge] = useState("");

  useEffect(() => {
    setWallet(user.wallet);
  }, []);

  function onSubmit() {
    setWallet(user.wallet + recharge);
    const newBalance = {
      wallet: user.wallet + recharge,
    };
    axios
      .post("api/user/update/buyer/wallet/" + user._id, newBalance)
      .then((response) => {
        if(response.data.status == 800){
          alert(response.data.message);
        }
        else{
          // alert("Updated wallet balance to:" + response.data.wallet);
          // update the user in local storage
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
        }
      });
    console.log('changed', wallet);
  }

  function onRecharge(value) {
    setRecharge(value);
    console.log('changed', recharge);
  }

  return (
    <Row gutter={16}>
        <Col span={12}>
          {/* <Statistic title="Account Balance" value={wallet} precision={2}/> */}
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance" value={wallet} precision={2} />
          <InputNumber defaultValue="0" value={recharge} onChange={onRecharge} />
          <Button style={{ marginTop: 16 }} type="primary" onClick={onSubmit}>
            Recharge
          </Button>
        </Col>
      </Row>
  );
};

export default UpdateWallet;