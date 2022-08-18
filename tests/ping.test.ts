import supertest, { Response } from "supertest";
import { expect } from "chai";
import { describe, it } from "mocha";

import app from "../src/index";

describe("GET - Ping", () => {
    it("server is online", async () => {
        const response: Response = await supertest(app).get("/api");

        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("API is running");
    });
});