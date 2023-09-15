import { expect, test, describe } from "bun:test";
import TestServerF from "./testserver";

const time = 1000;

describe("get", () => {
    test( "get " + globalThis.url, async () => {
        const server = new TestServerF();
        server.start();
        
        const response = fetch( globalThis.url, {verbose: false} )

        await new Promise(resolve => setTimeout(resolve, time/2));

        await response.then( response => {
            expect( response.status ).toBe( 200 );
        }).catch( error => {
            expect( false ).toBe( true );
        });

        server.stop();
    });
}, time);