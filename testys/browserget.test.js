import { expect, test, describe } from "bun:test";

describe("request", () => {
    test.todo( "browser request " + globalThis.url + " should return content-type/html", () => {
        response = wget( globalThis.url );
        expect( response ).toBe( "local test = 1" );
    } );
});