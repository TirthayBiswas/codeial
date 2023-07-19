const express =require('express');

const router=express.Router();
const homeController=require('../controllers/home.controller');


//use express outer
//app.use
console.log('router loaded');
router.get('/', homeController.home);
router.use('/users',require('./users'));

//for any further routes ,acess from here
//router.use('/routerName ',require('./routerfile));

module.exports=router;