import { expect, test, describe } from "bun:test";

//the time component takes props.time and puts in a hello world
import Time from "../../components/time.jsx";

describe("time", () => {
    test( "time " + globalThis.time, async () => {
        expect( Time ).not.toBe( null );
    });
});