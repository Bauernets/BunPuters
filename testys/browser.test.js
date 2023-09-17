import { expect, test, describe } from "bun:test";
import TestServerF from "./testserver";


describe("browser", () => {
    test( "browser get " + globalThis.url, async () => {
        const server = new TestServerF();
        server.start();
        
        await new Promise(resolve => setTimeout(resolve, globalThis.time/2));

        const response = fetch( globalThis.url, {verbose: false} )

        await response.then( response => {
            expect( response.status ).toBe( 200 );
        }).catch( error => {
            //console.log( error );
            expect( error ).toBe( null );
        });

        server.stop();
    });
}, globalThis.time);