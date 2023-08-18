import { Router } from "express";
//import { postInitRoute } from "./Productos.js";
import { getInitRoute } from "./Productos.js";

const initRoutes = () => {
  const router = Router();
  //router.use("/post", postInitRoute());
  router.use("/get", getInitRoute());
  return router;
};

export { initRoutes };