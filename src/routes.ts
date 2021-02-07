import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import YAML from "yamljs";
import { initModuleRoutes } from "./modules/index";

const swaggerUiOptions = {
	customCss: ".swagger-ui .topbar { display: none }"
};

const router = Router();
router.use(morgan("combined"));

initModuleRoutes(router);

// Dev routes
if (process.env.NODE_ENV === "development") {
	const apiSpec = YAML.load("./openapi.yaml");
	router.use("/dev/api-docs", swaggerUi.serve);
	router.get("/dev/api-docs", swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
