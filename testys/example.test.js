
// import { expect, test, describe } from "bun:test";

// typeof globalThis.describe; // "undefined"
// typeof describe; // "function"


// describe("examples", () => {
//   test("2 + 2", () => {
//     expect(2 + 2).toBe(4);
//   });

//   test("2 * 2", done => {
//     Promise.resolve(2 * 2).then(result => {
//       expect(result).toEqual(4);
//       done();
//     });
//   });

//   // test.skip("wat", async () => {
//   //   const data = await slowOperation();
//   //   expect(data).toBe(42);
//   // }, 500); // test must run in <500ms

//   // test.todo("fix this", () => {
//   //   myTestFunction();
//   // });

//   test("test #1", () => {
//     // does not run
//   });

//   test.only("test #2", () => {
//     // runs
//   });

//   //bun test --only
//   describe.only("only", () => {
//     test("test #3", () => {
//       // runs
//     });
//   });

//   const macOS = process.arch === "darwin";
//   test.if(macOS)("runs on macOS", () => {
//     // runs if macOS
//     console.log("macOS");
//   });

//   const windows = process.arch === "win32";
//   test.if(windows)("runs on Windows", () => {
//     // runs if Windows
//     console.log("windows");
//   });

// });

// 🟢	.not
// 🟢	.toBe()
// 🟢	.toEqual()
// 🟢	.toBeNull()
// 🟢	.toBeUndefined()
// 🟢	.toBeNaN()
// 🟢	.toBeDefined()
// 🟢	.toBeFalsy()
// 🟢	.toBeTruthy()
// 🟢	.toContain()
// 🟢	.toStrictEqual()
// 🟢	.toThrow()
// 🟢	.toHaveLength()
// 🟢	.toHaveProperty()
// 🔴	.extend
// 🟢	.anything()
// 🟢	.any()
// 🔴	.arrayContaining()
// 🔴	.assertions()
// 🔴	.closeTo()
// 🔴	.hasAssertions()
// 🔴	.objectContaining()
// 🟢	.stringContaining()
// 🟢	.stringMatching()
// 🔴	.addSnapshotSerializer()
// 🟢	.resolves()
// 🟢	.rejects()
// 🟢	.toHaveBeenCalled()
// 🟢	.toHaveBeenCalledTimes()
// 🔴	.toHaveBeenCalledWith()
// 🔴	.toHaveBeenLastCalledWith()
// 🔴	.toHaveBeenNthCalledWith()
// 🔴	.toHaveReturned()
// 🔴	.toHaveReturnedTimes()
// 🔴	.toHaveReturnedWith()
// 🔴	.toHaveLastReturnedWith()
// 🔴	.toHaveNthReturnedWith()
// 🟢	.toBeCloseTo()
// 🟢	.toBeGreaterThan()
// 🟢	.toBeGreaterThanOrEqual()
// 🟢	.toBeLessThan()
// 🟢	.toBeLessThanOrEqual()
// 🟢	.toBeInstanceOf()
// 🔴	.toContainEqual()
// 🟢	.toMatch()
// 🟢	.toMatchObject()
// 🟢	.toMatchSnapshot()
// 🔴	.toMatchInlineSnapshot()
// 🔴	.toThrowErrorMatchingSnapshot()
// 🔴	.toThrowErrorMatchingInlineSnapshot()