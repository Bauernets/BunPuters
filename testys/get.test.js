import { expect, test, describe } from "bun:test";
import testserver from "./testserver";

describe("get", () => {
    test( "get " + globalThis.url, async () => {
        testserver();
        fetch( globalThis.url, {verbose: true} ).then( response => {
            console.log( "RESPONSE: " + response );
            expect( true ).toBe( true );
        }).catch( error => {
            console.error( error );
            expect( false ).toBe( true );
        });
    });
});