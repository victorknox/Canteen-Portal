import axios from "axios";
import { useState, useEffect } from "react";
import { List, Avatar, Button } from 'antd';
import { Statistic, Row, Col, Form, Input, Radio, Checkbox } from 'antd';

const FoodMenu = (props) => {
  const [addfood, setAddFood] = useState(false);
  const [editfood, setEditFood] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  // const onChangeaddfood = (event) => {
  //   setAddFood(event.target.value);
  // };

  const AddForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [isveg, setIsVeg] = useState(false);
    const [add_ons, setAddOns] = useState([]);
    const [tags, setTags] = useState("");
  
    // set the variables to food data by default
    // useEffect(() => {
    //   setName(user.items.name);
    //   setPrice(user.items.price);
    //   setIsVeg(user.items.isveg);
    //   setAddOns(user.items.add_ons);
    //   setTags(user.items.tags);
    // }, []);
  
  
    const onChangeItemname = (event) => {
      setName(event.target.value);
    };

    const onChangeItemprice = (event) => {
      setPrice(event.target.value);
    };

    const onChangeItemisveg = (event) => {
      setIsVeg(event.target.checked);
      console.log(event.target.checked);
    };

    const onChangeItemadd_ons = (event) => {
      setAddOns(event.target.value);
    };

    const onChangeItemtags = (event) => {
      setTags(event.target.value);
    };
  
  
    const resetInputs = () => {
      setName("");
      setPrice("");
      setIsVeg(false);
      setAddOns("");
      setTags("");
    };
  
    const onAddItem = (event) => {
      event.preventDefault();
  
      const newItem = {
        name: name,
        price: price,
        isveg: isveg,
        add_ons: [],//[""] []
        tags: tags
      };
      // console.log(user);
      axios
        .post("api/user/vendor/additem/" + user._id, newItem)
        .then((response) => {
          if(response.data.status == 800){
            alert(response.data.message);
          }
          else{
            alert("Added food item\t");
            // update the user in local storage
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data);
          }
        });
  
      resetInputs();
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
          <Form.Item label="Item Name">
            <Input placeholder="maggi" value={name} onChange={onChangeItemname}  />
          </Form.Item>
          <Form.Item label="Item Price(INR)">
            <Input placeholder="30" value={price} onChange={onChangeItemprice} />
          </Form.Item>
          <Form.Item label="Veg">
          <Checkbox onChange={onChangeItemisveg}></Checkbox>
          </Form.Item>
          <Form.Item label="Add ons">
            <Input placeholder="{Extra Cheese, 20}, {Sauce, 20}" value={add_ons} onChange={onChangeItemadd_ons} />
          </Form.Item>
          <Form.Item label="Tags">
            <Input placeholder="{Drink, Sweet, Cold}" value={tags} onChange={onChangeItemtags} />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={onAddItem}>Add Item</Button>
          </Form.Item>
        </Form>
      );
    };

    const EditForm = (props) => {
      const [name, setName] = useState("");
      const [price, setPrice] = useState("");
      const [isveg, setIsVeg] = useState(false);
      const [add_ons, setAddOns] = useState([]);
      const [tags, setTags] = useState("");
    
      const edit_item = JSON.parse(localStorage.getItem("edit_item"));
      // set the variables to food data by default
      useEffect(() => {
        setName(edit_item.name);
        setPrice(edit_item.price);
        setIsVeg(edit_item.isveg);
        // setAddOns(edit_item.add_ons);
        // setTags(edit_item.tags);
      }, []);
    
    
      const onChangeItemname = (event) => {
        setName(event.target.value);
      };
  
      const onChangeItemprice = (event) => {
        setPrice(event.target.value);
      };
  
      // function onChange(e) {
      //   console.log(`checked = ${e.target.checked}`);
      // }
  
      const onChangeItemisveg = (event) => {
        setIsVeg(event.target.checked);
        console.log(event.target.checked);
      };
  
      const onChangeItemadd_ons = (event) => {
        setAddOns(event.target.value);
      };
  
      const onChangeItemtags = (event) => {
        setTags(event.target.value);
      };
    
    
      // const resetInputs = () => {
      //   setName("");
      //   setPrice("");
      //   setIsVeg(false);
      //   setAddOns("");
      //   setTags("");
      // };
    
      const onEditItem = (event) => {
        event.preventDefault();
    
        const newItem = {
          shop_id: user._id,
          name: name,
          price: price,
          isveg: isveg,
          add_ons: [],//[""] []
          tags: tags
        };
        // console.log(user);
        axios
          .post("api/user/vendor/edit_item/" + user._id + "/" + edit_item._id, newItem)
          .then((response) => {
            if(response.data.status === 800){
              alert(response.data.message);
            }
            else{
              alert("Edited food item\t");
              // update the user in local storage
              localStorage.setItem("user", JSON.stringify(response.data));
              console.log(response.data);
            }
          });
    
        // resetInputs();
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
            <Form.Item label="Item Name">
              <Input value={name} defaultValue={edit_item.name} onChange={onChangeItemname} />
            </Form.Item>
            <Form.Item label="Item Price(INR)">
              <Input placeholder="30" value={price} defaultValue={edit_item.price} onChange={onChangeItemprice} />
            </Form.Item>
            <Form.Item label="Veg">
            <Checkbox onChange={onChangeItemisveg} defaultChecked={edit_item.isveg}></Checkbox>
            </Form.Item>
            <Form.Item label="Add ons">
              <Input placeholder={edit_item.add_ons} value={add_ons} onChange={onChangeItemadd_ons} />
            </Form.Item>
            <Form.Item label="Tags">
              <Input placeholder={edit_item.tags} value={tags} onChange={onChangeItemtags} />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary" onClick={onEditItem}>Edit Item</Button>
            </Form.Item>
          </Form>
        );
      };

  const data = user.items;

  const EditItem = item => (event) => {
    event.preventDefault();
    setEditFood(true);
    localStorage.setItem("edit_item", JSON.stringify(item));
    console.log(item);
  };
  
  const DeleteItem = item => (event) => {
    event.preventDefault();

    // make an axios delete request to delete the item
    axios
      .delete("api/user/vendor/deleteitem/" + user._id + "/" + item._id)
      .then((response) => {
        if(response.data.status == 800){
          alert(response.data.message);
        }
        else{
          alert("Deleted food item");
          // update the user in local storage
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
        }
      });

    console.log(item);
  };

  if(addfood){
    return (
      <div>
        <AddForm />
        <Button type="primary" onClick={() => setAddFood(false)}>Back to FoodMenu</Button>
      </div>
    )
  }
  else{
    if(editfood){
      return (
        <div>
          <EditForm />
          <Button type="primary" onClick={() => setEditFood(false)}>Back to FoodMenu</Button>
        </div>
      )
    }
    else
    return (
    <div>
    <Button type="primary" onClick={() => setAddFood(true)}>Add Food Item</Button>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta 
              avatar={<Avatar src="https://e7.pngegg.com/pngimages/422/318/png-clipart-thai-cuisine-sina-weibo-japanese-cuisine-food-ginger-qq-avatar-food-cooking.png" />}
              title={item.name}
              // display price and addons as description
              description={"Price: " + item.price + " Rs,\n Tags: " + item.tags}
            />
            <Button onClick={EditItem(item)}>Edit</Button>
            <Button onClick={DeleteItem(item)}>Delete</Button>
          </List.Item>
        )}
      />
    </div>
  );
  }
  
};

export default FoodMenu;