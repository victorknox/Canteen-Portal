var express = require("express");
var router = express.Router();

// Load vendor model
const Vendor = require("../models/Vendors");
// Load buyer model
const Buyer = require("../models/Buyers");
// Load Item model
const Item = require("../models/Items");


// // GET request 
// // Getting all the users
// router.get("/", function(req, res) {
//     User.find(function(err, users) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(users);
// 		}
// 	})
// });

// GET request
// Getting all the buyers
router.get("/buyer", function(req, res) {
    Buyer.find(function(err, buyers) {
        if (err) {
            console.log(err);
        } else {
            res.json(buyers);
        }
    })
});

// GET request
// Getting the list of all vendors
router.get("/vendor", function(req, res) {
    Vendor.find(function(err, vendors) {
        if (err) {
            console.log(err);
        } else {
            res.json(vendors);
        }
    })
});

// // NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// // POST request 
// // Add a user to db
// router.post("/register", (req, res) => {
//     const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         date: req.body.date
//     });

//     newUser.save()
//         .then(user => {
//             res.status(200).json(user);
//         })
//         .catch(err => {
//             res.status(400).send(err);
//         });
// });

// POST request
// Add a buyer to db
router.post("/register/buyer", (req, res) => {
    Buyer.findOne({ email: req.body.email }).then(buyer => {
        if (buyer) {
            res.send({ message: 'Email already exists!', status: 800 });
        }
        else {
            const newBuyer = new Buyer({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,                
                contact_number: req.body.contact_number,
                age: req.body.age,
                batch_name: req.body.batch_name
            });
        
            newBuyer.save()
                .then(buyer => {
                    res.status(200).json(buyer);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
    });
});

// POST request
// Add a vendor to db
router.post("/register/vendor", (req, res) => {
    Vendor.findOne({ email: req.body.email }).then(vendor => {
        if (vendor) {
            res.send({ message: 'Email already exists!', status: 800 });
        }
        else {
            const newVendor = new Vendor({
                name: req.body.name,
                shop_name: req.body.shop_name,
                email: req.body.email,
                password: req.body.password,
                contact_number: req.body.contact_number,
                canteen_opening_time: req.body.canteen_opening_time,
                canteen_closing_time: req.body.canteen_closing_time
            });
        
            newVendor.save()
                .then(vendor => {
                    res.status(200).json(vendor);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
    });
});


router.post("/update/buyer/:id", (req, res) => {
    console.log(req.params.id);
    Buyer.findById(req.params.id)
    .then(buyer => {
        
        buyer.name = req.body.name;
        buyer.password = req.body.password;
        if(buyer.email != req.body.email) {
        Buyer.findOne({ email: req.body.email }).then(buyer => {
            if (buyer) {
                res.send({ message: 'Email already exists!', status: 800 });
            }
            else {
                buyer.email = req.body.email;
            }
        });
        }
        buyer.contact_number = req.body.contact_number;
        buyer.age = req.body.age;
        buyer.batch_name = req.body.batch_name;
        buyer.wallet = req.body.wallet;

        console.log(buyer);
        buyer.save()
        .then(() => {
            console.log("updated");
            res.status(200).send(buyer);    
        })
        .catch(err => {
            console.log("HUH")
            res.status(200).send(err);    
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(200).send(err);
    })
});

router.post("/update/buyer/wallet/:id", (req, res) => {
    console.log(req.params.id);
    Buyer.findById(req.params.id)
    .then(buyer => {
        buyer.wallet = req.body.wallet;
        console.log(buyer);
        console.log(req.body);
        buyer.save()
        .then(() => {
            console.log("updated");
            res.status(200).send(buyer);
        })
        .catch(err => {
            console.log("HUH")
            res.status(800).send(err);
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(200).send(err);
    })
});

router.post("/update/vendor/:id", (req, res) => {
    console.log(req.params.id);
    Vendor.findById(req.params.id)
    .then(vendor => {

        vendor.name = req.body.name;
        vendor.shop_name = req.body.shop_name;
        if(vendor.email != req.body.email) {
        Vendor.findOne({ email: req.body.email }).then(vendor => {
            if (vendor) {
                res.send({ message: 'Email already exists!', status: 800 });
            }
            else {
                vendor.email = req.body.email;
            }
        });
        }
        vendor.password = req.body.password;
        vendor.contact_number = req.body.contact_number;
        vendor.canteen_opening_time = req.body.canteen_opening_time;
        vendor.canteen_closing_time = req.body.canteen_closing_time;

        // console.log(buyer);
        vendor.save()
        .then(() => {
            // console.log("updated");
            res.status(200).send(vendor);
        })
        .catch(err => {
            // console.log("HUH")
            res.status(200).send(err);
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(200).send(err);
    })
});

router.post("/vendor/additem/:id", (req, res) => {
    // Add item to items schema
    const newItem = new Item({
        shop_id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        isveg: req.body.isveg,
        add_ons: req.body.add_ons,
        tags: req.body.tags.split(','),
        rating: 0
    });
    console.log(newItem);
    newItem.save()
        .then(item => {
            console.log(item);
            // res.status(200).json(item);
        })
        .catch(err => {
            console.log(err);
            res.status(800).send(err);
        });

    console.log(req.params.id);
    Vendor.findById(req.params.id)
    .then(vendor => {
        const newItem = {
            // shop_id : req.body.shop_id,
            name: req.body.name,
            price: req.body.price,
            isveg: req.body.isveg,
            add_ons: req.body.add_ons,
            tags: req.body.tags.split(','),
            rating: 0
        };
        vendor.items.push(newItem);
        console.log(vendor);
        vendor.save()
        .then(() => {
            res.status(200).send(vendor);
        })
        .catch(err => {
            res.status(600).send(err);
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(800).send(err);
    })
});

// post request to edit item
router.post("/vendor/edit_item/:vendorid/:itemid", (req, res) => {
    console.log(req.params.vendorid);
    console.log(req.params.itemid);
    console.log(req.body);
    Vendor.findById(req.params.vendorid)
    .then(vendor => {
        console.log(vendor);
        const item = vendor.items.id(req.params.itemid);
        // item.shop_id = req.body.shop_id;
        item.name = req.body.name;
        item.price = req.body.price;
        item.isveg = req.body.isveg;
        item.add_ons = req.body.add_ons;
        item.tags = req.body.tags.split(',');
        // item.rating = 0;
        vendor.save()
        .then(() => {
            res.status(200).send(vendor);
        })
        .catch(err => {
            res.status(800).send(err);
            console.log("HUH");
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(600).send(err);
    })
});
    

router.delete("/vendor/deleteitem/:vendorid/:itemid", (req, res) => {
    console.log(req.params.vendorid);
    // console.log(req.params.itemid);
    Vendor.findById(req.params.vendorid)
    .then(vendor => {
        console.log(vendor);
        const item = vendor.items.id(req.params.itemid);
        item.remove();
        vendor.save()
        .then(() => {
            res.status(200).send(vendor);
        })
        .catch(err => {
            res.status(600).send(err);
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(800).send(err);
    })
});

   

// // POST request 
// // Login
// router.post("/login", (req, res) => {
// 	const email = req.body.email;
// 	// Find user by email
// 	User.findOne({ email }).then(user => {
// 		// Check if user email exists
// 		if (!user) {
// 			return res.status(404).json({
// 				error: "Email not found",
// 			});
//         }
//         else{
//             res.send("Email Found");
//             return user;
//         }
// 	});
// });

// POST request
// Login for buyer
router.post("/login/buyer", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    Buyer.findOne({ email }).then(buyer => {
        // Check if user email exists
        if (!buyer) {
            return res.status(404).json({
                error: "Email not found",
            });
        }
        else{
            if(buyer.password == password){
                res.status(200).json(buyer);
                // return buyer;
            }
            else{
                res.send("Wrong Password");
            }
        }
    });
});

// POST request
// Login for vendor
router.post("/login/vendor", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    Vendor.findOne({ email }).then(vendor => {
        // Check if user email exists
        if (!vendor) {
            return res.status(404).json({
                error: "Email not found",
            });
        }
        else{
            if(vendor.password == password){
                res.status(200).json(vendor);
                // return vendor;
            }
            else{
                res.send("Wrong Password");
            }
        }
    });
});

module.exports = router;

// "name": "voms",
// "email": "pengo@gmail.com",
// "contact_number": "7995661511",
// "age": "18",
// "batch_name": "UG2"