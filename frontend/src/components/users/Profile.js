import axios from "axios";
import { useState, useEffect } from "react";
import { Statistic, Row, Col, Form, Input, Button, Radio } from 'antd';
// const {  Statistic, Row, Col, Button  } = antd;
import UpdateWallet from './Wallet';

const Profile = (props) => {
  const [usertype, setUserType] = useState([]);
  const [editdetails, setDetails] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (localStorage.getItem("usertype") === "buyer") {
      setUserType("buyer");
    } else {
      setUserType("vendor");
    }
  }, []);

  const UpdateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [age, setAge] = useState("");
  const [batch_name, setBatchName] = useState("");
  const [shop_name, setShopName] = useState("");
  const [canteen_opening_time, setCanteenOpeningTime] = useState("");
  const [canteen_closing_time, setCanteenClosingTime] = useState("");
  const [wallet, setWallet] = useState("");

  // set the variables to user data by default
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setContactNumber(user.contact_number);
    setAge(user.age);
    setBatchName(user.batch_name);
    setShopName(user.shop_name);
    setCanteenOpeningTime(user.canteen_opening_time);
    setCanteenClosingTime(user.canteen_closing_time);
    setWallet(user.wallet);
  }, []);


  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeWallet = (event) => {
    setWallet(event.target.value);
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
    setWallet("");
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
      wallet: wallet,
      // date: Date.now(),
    };

    axios
      .post("api/user/update/buyer/" + user._id, newBuyer)
      .then((response) => {
        if(response.data.status == 800){
          alert(response.data.message);
        }
        else{
          alert("Updated\t" + response.data.name);
          // update the user in local storage
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
        }
      });
    // resetInputs();

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
      .post("api/user/update/vendor/" + user._id, newVendor)
      .then((response) => {
        if(response.data.status == 800){
          alert(response.data.message);
        }
        else{
          alert("Updated\t" + response.data.name);
          // update the user in local storage
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
        }
      });

    // resetInputs();

    // window.location = "/";
  };
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const user = JSON.parse(localStorage.getItem("user"));




    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout);
    };
  
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: {
              span: 4,
            },
            wrapperCol: {
              span: 14,
            },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: {
              span: 14,
              offset: 4,
            },
          }
        : null;
    if (usertype == "buyer")
    return (
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Name">
          <Input placeholder={user.name} value={name} onChange={onChangeUsername} defaultValue={user.name} />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder={user.email} value={email} onChange={onChangeEmail} defaultValue={user.email} />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder={user.password} value={password} onChange={onChangePassword} defaultValue={user.password} />
        </Form.Item>
        <Form.Item label="Contact Number">
          <Input placeholder={user.contact_number} value={contact_number} onChange={onChangeContactNumber} defaultValue={user.contact_number} />
        </Form.Item>
        <Form.Item label="Age">
          <Input placeholder={user.age} value={age} onChange={onChangeAge} defaultValue={user.age} />
        </Form.Item>
        <Form.Item label="Batch Name">
          <Input placeholder={user.batch_name} value={batch_name} onChange={onChangeBatchName} defaultValue={user.batch_name}/>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" onClick={onSubmitBuyer}>Edit</Button>
        </Form.Item>
      </Form>
    );
    else
    return (
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Name">
          <Input placeholder={user.name}  value={name} onChange={onChangeUsername} defaultValue={user.name}/>
        </Form.Item>
        <Form.Item label="Shop Name">
          <Input placeholder={user.shop_name} value={shop_name} onChange={onChangeShopName} defaultValue={user.shop_name}/>
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder={user.email} value={email} onChange={onChangeEmail} defaultValue={user.email}/>
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder={user.password} value={password} onChange={onChangePassword} defaultValue={user.password}/>
        </Form.Item>
        <Form.Item label="Contact Number">
          <Input placeholder={user.contact_number} value={contact_number} onChange={onChangeContactNumber} defaultValue={user.contact_number}/>
        </Form.Item>
        <Form.Item label="Opening Time">
          <Input placeholder={user.canteen_opening_time} value={canteen_opening_time} onChange={onChangeCanteenOpeningTime} defaultValue={user.canteen_opening_time}/>
        </Form.Item>
        <Form.Item label="Closing Time">
          <Input placeholder={user.canteen_closing_time} value={canteen_closing_time} onChange={onChangeCanteenClosingTime} defaultValue={user.canteen_closing_time}/>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" onClick={onSubmitVendor}>Edit</Button>
        </Form.Item>
      </Form>
    );
    
  };

  const Details = (props) => {
    if (usertype == "vendor") 
    // return all the profile details
    return (
      <div>
        <h1>Vendor Profile</h1>
        <p>Name: {user.name}</p>
        <p>Shop Name: {user.shop_name}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Contact Number: {user.contact_number}</p>
        <p>Canteen Opening Time: {user.canteen_opening_time}</p>
        <p>Canteen Closing Time: {user.canteen_closing_time}</p>
      </div>
    );
    else
    // return all the profile details
    return (
      <div>
        <UpdateWallet />
        <h1>Buyer Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Contact Number: {user.contact_number}</p>
        <p>Age: {user.age}</p>
        <p>Batch Name: {user.batch_name}</p>
      </div>
    );
  }
  if(editdetails) {
    return (
      <div>
        <UpdateForm />
        <button onClick={() => setDetails(false)}>Return to Profile</button>
      </div>
    );
  }
  else {
    return (
      <div>
        <Details />
        <button onClick={() => setDetails(true)}>Edit Details</button>
      </div>
    );
  }
};

export default Profile;
//filteredValue: [non_veg_filter],
//onFilter: (value, record) => (!value || record.veg === true)


  // useEffect(() => {
  //   axios
  //     .get("api/profile") // unimplemented
  //     .then((response) => {
  //       setDetails(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);