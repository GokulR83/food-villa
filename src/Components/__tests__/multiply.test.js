import { multiply } from "../multiply"

test("multiply function should return the proper answer",()=>{
    const res = multiply(2,3);
    expect(res).toBe(6);
});