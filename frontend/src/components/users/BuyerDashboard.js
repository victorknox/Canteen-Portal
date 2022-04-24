import { useState, useEffect } from 'react';
import axios from "axios";
import fuzzy from 'fuzzy'
import { Form, Input, Button, InputNumber, message, Table, Tag, Row, Col, Checkbox, Slider, Switch, Modal} from 'antd';
import { useNavigate } from 'react-router';
import Item from 'antd/lib/list/Item';

const BuyerDashboard = () => {
  const [selectedTagsList, setlkjlk] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0,500]);
  const [ItemList, setItemList] = useState([]);
  const [VendorList, setVendorList] = useState([]);
  const [TagList, setTagList] = useState([]);
  const [isveg, setVeg] = useState(true);
  const [FilteredVendors, setFilteredVendors] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  
  const toggleVeg = () => {
    if (isveg) setVeg(false);
    else setVeg(true); 
  }

// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }
  const onChange = (pagination, filters, sorter, extra) => {
    setFilteredVendors(filters.shop_name);
    setFilteredTags(filters.tags);
    console.log('params', pagination, filters, sorter, extra);
  }
  const updateSearch = (props) => {
    setSearchTerm(props.target.value);
}    
  useEffect((async) => {

      axios.get("api/user/vendor")
      .then(res => {
          // console.log(res.data)
          let allitems = []
          let allshops = []
          let alltags = []
          let keyno = 0
          res.data.forEach(vendor => {
              allshops.push(vendor.shop_name)
              vendor.items.forEach(item => {
                const newItem = {
                  name: item.name,
                  price: item.price,
                  rating: item.rating,
                  tags: item.tags,
                  shop_name: vendor.shop_name,
                  id: item._id,
                  isveg: item.isveg,
                  key: keyno
                }
                allitems.push(newItem)
                newItem.tags.forEach(tag => {
                  if(alltags.indexOf(tag) === -1) alltags.push(tag)
                })
                keyno += 1
              })
              // ItemList.push(vendor.items)
              
          })
          setItemList(allitems)
          // console.log(allitems)
          setVendorList(allshops)
          setTagList(alltags)
          // console.log(alltags)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])

  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      filteredValue: [searchTerm],
      onFilter: (value, record) => record.name.includes(value)
    },
    {
        title: 'Shop Name',
        dataIndex: 'shop_name',
        key: 'shop_name',
        filters: VendorList,
        filteredValue: FilteredVendors,
        onFilter: (value, record) => record.name.includes(value),
        width: '20%',
      },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      filteredValue: priceRange,
      onFilter: (value, record) => {
          return record.price >= priceRange[0] && record.price <= priceRange[1]
      },
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Veg/Non-Veg',
      dataIndex: 'isveg',
      filteredValue: [isveg],
      render: (isveg) => {
        return <>{isveg ? "Veg" : "Non-Veg"}</>
      },
      width: '10%',
      onFilter: (value, record) => (value === 'true' || record.isveg),
    },
    {
        title: "Rating",
        dataIndex: "rating",
        width:'10%',
        sorter: (a, b) => a.rating - b.rating,
        // render: (rating) => {return rating.toFixed(2)}
    },
    {
        title: "Tags",
        dataIndex: 'tags',
        key: 'tags',
        filters: TagList,
        width:'10%',
        filteredValue: filteredTags,
        onFilter: (value, record) => record.tags.indexOf(value) !== -1,
        render: (tags) => {
            return <>
            {
                tags.map((tag) => {
                    return <Tag>{tag}</Tag>;
                })
            }
            </>
        }
    },
  ];


    return (
        <div>
          <Col>
        <Row>
        <Input.Search placeholder="maggi" onChange={updateSearch}/>
        </Row>
        <br/>
        <Row>
        <Checkbox check={isveg} onChange={toggleVeg}>
            Veg-only
        </Checkbox> 
        </Row>
        <br/>
        <Row>
        <p>Price Range:</p>
        <Slider style={{ width:600, marginLeft:20}} range min={0} max={500} defaultValue={[0,100]} onChange={param => setPriceRange(param)}/>
        </Row>
        </Col>
        <Table columns={columns} dataSource={ItemList} onChange={onChange} />
        </div>
    )
}
export default BuyerDashboard;
