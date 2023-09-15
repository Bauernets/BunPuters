import { expect, test, describe } from "bun:test";
import TestServerF from "./testserver";

const time = 1000;

describe("get", () => {
    test( "get " + globalThis.url, () => {
        const server = new TestServerF();
        server.start();
        
        fetch( globalThis.url, {verbose: true} ).then( response => {
            console.log( "RESPONSE: " + response );
            expect( true ).toBe( true );
        }).catch( error => {
            console.error( error );
            expect( false ).toBe( true );
        });
        
        server.stop();
    });
}, time);