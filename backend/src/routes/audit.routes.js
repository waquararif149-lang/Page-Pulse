import express from "express"
import auditControler from "../controler/audit.controler.js";

const auditcontroler=new auditControler();

const auditRouter=express.Router();

auditRouter.post("/",auditcontroler.auditWebsite.bind(auditcontroler))

export default auditRouter;