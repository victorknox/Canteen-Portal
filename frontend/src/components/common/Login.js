import { useState } from "react";
import {BrowserRouter as Redirect, useNavigate} from 'react-router-dom';
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import { Form, Input, Button, Checkbox, Select } from 'antd';
// const { Option } = Select;
import Select from '@mui/material/Select';

// const Login = (props) => {
//     const [usertype, setUserType] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [redirect, setRedirect] = useState(false);
//     const UserId = localStorage.getItem("userId");
//     const navigate = useNavigate();
//     const onChangeEmail = (event) => {
//         setEmail(event.target.value);
//     }

//     const onChangePassword = (event) => {
//         setPassword(event.target.value);
//     }
    
//     const UserTypeChange = (event) => {
//         setUserType(event.target.value);
//     }

//     const onSubmitBuyer = (event) => {
//         event.preventDefault();

//         const buyer = {
//             email: email,
//             password: password
//         };

//         axios.post("api/user/login/buyer", buyer)
//             .then((res) => {
//                 alert("Logged in as " + res.data.name);
//                 const user = res.data;
//                 localStorage.setItem("user", JSON.stringify(user));
//                 localStorage.setItem("usertype", "buyer");
//                 setRedirect(true);
//                 navigate("/profile");
//                 console.log(res.data);
//             });

//         // 
//     };

//     const onSubmitVendor = (event) => {
//         event.preventDefault();

//         const vendor = {
//             email: email,
//             password: password
//         };

//         axios.post("api/user/login/vendor", vendor)
//             .then((res) => {
//                 alert("Logged in as " + res.data.name);
//                 const user = res.data;
//                 localStorage.setItem("user", JSON.stringify(user));
//                 localStorage.setItem("usertype", "vendor");
//                 setRedirect(true);
//                 navigate("/profile");
//                 console.log(res.data);
//             });

//         // window.location = "/";
//     };

  
//     const onFinishFailed = (errorInfo) => {
//       console.log('Failed:', errorInfo);
//     };
  
//     return (
//       <Form
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={usertype ? onSubmitBuyer : onSubmitVendor}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           name="UserType"
//           label="User Type"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Select
//             placeholder="Are you a Buyer or a Vendor?"
//             value={usertype}
//             onChange={UserTypeChange}
//             allowClear
//           >
//             <Option value={false}>Vendor</Option>
//             <Option value={true}>Buyer</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           label="Email"
//           name="email"
//           value={email}
//           onChange={onChangeEmail}
//           rules={[
//             {
//               required: true,
//               message: 'Please input your username!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
  
//         <Form.Item
//           label="Password"
//           name="password"
//           value={password}
//           onChange={onChangePassword}
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>
  
//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             Login
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   };

const Login = (props) => {
    const [usertype, setUserType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const UserId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }
    
    const UserTypeChange = (event) => {
        setUserType(event.target.value);
    }

    const onSubmitBuyer = (event) => {
        event.preventDefault();

        const buyer = {
            email: email,
            password: password
        };

        axios.post("api/user/login/buyer", buyer)
            .then((res) => {
                alert("Logged in as " + res.data.name);
                const user = res.data;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("usertype", "buyer");
                setRedirect(true);
                navigate("/profile");
                console.log(res.data);
            });

        // 
    };

    const onSubmitVendor = (event) => {
        event.preventDefault();

        const vendor = {
            email: email,
            password: password
        };

        axios.post("api/user/login/vendor", vendor)
            .then((res) => {
                alert("Logged in as " + res.data.name);
                const user = res.data;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("usertype", "vendor");
                setRedirect(true);
                navigate("/profile");
                console.log(res.data);
            });

        // window.location = "/";
    };


return (
    <div style={{ textAlign: "center" }}>
        <h3>Login</h3>
        <form onSubmit={usertype ? onSubmitBuyer : onSubmitVendor}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
            <FormControl sx={{ m: 1, minWidth: 500 }}>
            <InputLabel>User Type</InputLabel>
            <Select
                value={usertype}
                label="User Type"
                variant="outlined"
                onChange={UserTypeChange}
            >
                <MenuItem value={false}>Vendor</MenuItem>
                <MenuItem value={true}>Buyer</MenuItem>
            </Select>
            </FormControl>
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
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
        
    </div>
);
};

export default Login;