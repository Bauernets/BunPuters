import { expect, test, describe } from "bun:test";
import TestServerF from "./testserver";

const time = 1000; 

describe("turtle", () => {
    test( "turtle get " + globalThis.url, async () => {
        const server = new TestServerF();
        server.start();
        
        await new Promise(resolve => setTimeout(resolve, time/2));

        const response = fetch( globalThis.url, {verbose: false} )

        await response.then( response => {
            expect( response.status ).toBe( 200 );
        }).catch( error => {
            expect( false ).toBe( true );
        });

        server.stop();
    });
}, time);