var express = require('express');
var router = express.Router();
const userModel = require('./users');
/* GET home page. */
router.get('/', function (req, res) {
  req.session.ban = true; //here we are setting a session variable.here ban is the session variable
  res.render('index', { title: 'Express' });
});
// Here we are working with session variable. we can check the session variable by using this route. Start.
router.get("/checkban", function(req,res){
  req.session.ban == true ? console.log("You are banned"): console.log("You are not banned");
});
//this we can delete the session variable.destroy() method is used to delete the session variable
router.get("/deleteban", function(req,res){
  req.session.destroy((err) => {
    if(err) throw err;
    console.log("Session deleted");
  });
});
// End


//******************************Cookie Start******** */
//set cookies.
router.get("/any", function(req,res){
  res.cookie("name", "Yeamin"); //here name is the cookie name and Yeamin is the cookie value
  res.render("index");
});
//read
router.get("/read", function(req,res){
  console.log(req.cookies.name);
  res.send("check");
});
//delete cookies
router.get("/deleteCookie", function(req,res){
  res.clearCookie("name");
  res.send("cookie deleted");
});


//******************************Cookie End******** */
//here we'll do CRUD operations
//create
// router.get('/create', async function (req, res) {
//   try {
//     const createuser = await userModel.create({
//       username: 'Yeamin12',
//       age: 23,
//       name: 'Md.Yeamin Islam'
//     });
//     res.send(createuser);
//   } catch (err) {
//     res.send(err);
//   }
// });

//find() method is used to find all the documents in the collection. fineOne({username: "username"}) method is used to find one document in the collection.
router.get('/allUsers', async function (req, res) {
  try {
    const allUsers = await userModel.find();
    res.send(allUsers);
  } catch (err) {
    res.send(err);
  }
});

//delete
router.get('/delete', async function (req, res) {
  try {
    const deleteUser = await userModel.findOneAndDelete({
      username: 'Yeamin12',
    });
    res.send(deleteUser);
  } catch (err) {
    res.send(err);
  }
});


module.exports = router;
 