import { Options } from "swagger-jsdoc";

const SwaggerOptions : Options = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "Api Express Starter",
            version: "1.0.0",
            description: "Starter project for api express",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "mvetois",
                url: "https://mvetois.fr",
                email: "contact@mvetois.fr",
            },
        },
        servers: [
            {
                url: "http://localhost:" + process.env.PORT || "5000" + "/api/",
            },
        ]
    },
    apis: ["src/**/*.ts"],
    swagger: "2.0"
};

export default SwaggerOptions;