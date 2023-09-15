import { expect, test, describe } from "bun:test";
import testserver from "./testserver";

describe("get", () => {
    test( "get " + globalThis.url, async () => {
        await testserver();
        fetch( globalThis.url ).then( response => {
            expect( response ).toBe( "local test = 1" );
        }).catch( error => {
            //console.error( error );
        });
    });
});