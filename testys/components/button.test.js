import { expect, test, describe } from "bun:test";

//the button component makes a button
import Button from "../../components/button.jsx";

describe("button", () => {
    test("button " + globalThis.button, async () => {
        expect(Button).not.toBe(null);
    });
});