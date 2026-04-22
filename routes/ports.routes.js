import { Router } from "express";
const router = Router();
import { getAllPorts, getPortByCode, createPort, deletePort} from "../controllers/ports.controller.js";

router.get('/',(req,res)=>{
  getAllPorts(req, res);
})

router.get('/:code',(req,res)=>{
   getPortByCode(req, res);
 });

router.post("/",(req,res)=>{
  createPort(req,res);
});

router.delete("/:code",(req,res)=>{
   deletePort(req,res);
})

export default router;
