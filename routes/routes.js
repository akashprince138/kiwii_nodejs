var cors = require("cors");
module.exports = (app) => {
  const tokenVerify = require("../auth/token-verify.js");
  // const verifySuperAdmin = require("../auth/verify_super_admin.js");
  const Login = require("../controller/login.controller.js");
  const Signup = require("../controller/signup.controller.js");
  const ChangePassword = require("../controller/change_password.controller.js");
  const UpdateUser = require("../controller/update_user.controller.js");
  const Users = require("../controller/users.controller.js");
  const ProfilePic = require("../controller/profile_pic.controller.js");

  const Business = require("../controller/business.controller.js");
  const Customers = require("../controller/customers.controller.js");
  const Menu = require("../controller/menu.controller.js");
  const Orders = require("../controller/orders.controller.js");
  const Expenses = require("../controller/expense.controller.js");
  const Purchase = require("../controller/purchase.controller.js");
  const Payment = require("../controller/payment.controller.js");
  const Referral = require("../controller/referral.controller.js");
  const Reports = require("../controller/reports.controller.js");

  
  app.post("/login", cors(), Login.create);
  app.post("/signup", cors(), Signup.create);
  app.post("/send-otp", cors(), Login.createOTP);
  app.post("/verify-otp", cors(), Login.verifyOTP);
  app.post("/add_member",  cors(), Signup.create);
  app.post("/change_password",  cors(), ChangePassword.create);
  app.post("/forget_password", cors(), ChangePassword.sendOTP);
  app.post("/reset_password", cors(), ChangePassword.resetPassword);
  app.get("/users",   Users.findAll);
  app.get("/user/:id",  Users.findOne);
  app.put("/update_user",  cors(), UpdateUser.update);
  app.post("/profile_pic",  cors(), ProfilePic.create);

  app.post("/create_business",  cors(), Business.create);
  app.get("/get_business_list",  cors(), Business.getAll);
  app.get("/get_business_info/:id",  cors(), Business.getById);
  app.put("/update_business_info",  cors(), Business.update);

  app.post("/create_customer",  cors(), Customers.create);
  app.get("/get_customer_list",  cors(), Customers.getAll);
  app.get("/get_customer_info/:id",  cors(), Customers.getById);
  app.put("/update_customer_info",  cors(), Customers.update);

  app.post("/create_menu",  cors(), Menu.create);
  app.get("/get_menu_list",  cors(), Menu.getAll);
  app.get("/get_menu_info/:id",  cors(), Menu.getById);
  app.put("/update_menu_info",  cors(), Menu.update);
  app.delete("/delete_menu_info/:id",  cors(), Menu.delete);
  
  app.post("/create_order", cors(), Orders.create);
  app.get("/get_order_list", cors(), Orders.getAll);
  app.get("/get_order_info/:id",  cors(), Orders.getById);
  app.put("/update_order_info",  cors(), Orders.update);
  app.delete("/delete_order_info/:id",  cors(), Orders.delete);

  app.post("/create_expense",  cors(), Expenses.create);
  app.get("/get_expenses_list",  cors(), Expenses.getAll);
  app.get("/get_expense_info/:id",  cors(), Expenses.getById);
  app.put("/update_expense_info",  cors(), Expenses.update);
  app.delete("/delete_expense_info/:id",  cors(), Expenses.delete);
  
  app.post("/create_purchase",  cors(), Purchase.create);
  app.get("/get_purchases_list",  cors(), Purchase.getAll);
  app.get("/get_purchase_info/:id",  cors(), Purchase.getById);
  app.put("/update_purchase_info",  cors(), Purchase.update);
  app.delete("/delete_purchase_info/:id",  cors(), Purchase.delete);

  app.post("/create_payment",  cors(), Payment.create);
  app.get("/get_payment_list",  cors(), Payment.getAll);
  app.get("/get_payment_info/:id",  cors(), Payment.getById);
  app.put("/update_payment_info",  cors(), Payment.update);
  app.delete("/delete_payment_info/:id",  cors(), Payment.delete);
  
  app.post("/create_referral",  cors(), Referral.create);
  app.get("/get_referral_list",  cors(), Referral.getAll);
  app.get("/get_referral_info/:id",  cors(), Referral.getById);
  app.put("/update_referral_info",  cors(), Referral.update);

  app.get("/sale_reports",  cors(), Reports.getAll);
};
