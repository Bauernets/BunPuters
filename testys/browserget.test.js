import { expect, test, describe } from "bun:test";
import TestServerF from "./testserver";

const time = 1000;

describe("browse", () => {
    test( "browse " + globalThis.url, async () => {
        const server = new TestServerF();
        server.start();
        
        const response = fetch( globalThis.url, {verbose: false} )

        await new Promise(resolve => setTimeout(resolve, time/2));

        await response.then( response => {
            //response should be html
            console.log(response);
        }).catch( error => {
            expect( false ).toBe( true );
        });

        server.stop();
    });
}, time);