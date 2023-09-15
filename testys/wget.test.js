import { expect, test, describe } from "bun:test";

describe("wget", () => {
    test.todo( "wget " + globalThis.url + " should return a lua file if request isnt from a browser", () => {
        response = wget( globalThis.url );
        expect( response ).toBe( "local test = 1" );
    } );
});