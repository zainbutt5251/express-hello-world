const express= require("express")
const router= express.Router()

//load controller 
const HomeController=require("../controllers/HomeController")

router.get("/",HomeController.homepage)
router.get("/login",HomeController.login)
router.get("/Dashboard",HomeController.Dashboard)
router.get("/getBlogs",HomeController.getBlogs) 
router.get("/Blogs",HomeController.Blogs) 
router.get("/getArticle",HomeController.getArticle) 
router.get("/Article",HomeController.Article) 
module.exports=router