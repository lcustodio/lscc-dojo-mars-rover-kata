import { mission } from "./index";

/*
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.
Implement commands that move the rover forward/backward (f,b).
Implement commands that turn the rover left/right (l,r).
Implement wrapping from one edge of the grid to another. (planets are spheres after all)
Implement obstacle detection before each move to a new square.
  If a given sequence of commands encounters an obstacle,
  the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

* */
describe("a mission in a simple world", () => {
  const executeMission = mission({
    width: 1,
    height: 1,
    facing: "N",
    x: 0,
    y: 0
  });

  it("should be able to move forward and come back", () => {
    expect(executeMission(["F", "B"])).toEqual({ x: 0, y: 0 });
  });

  it('should move 1 space forward', () => {
    expect(executeMission(["F"])).toEqual({ x: 0, y: 1 });

  })

  // xit("should be able to move forward", () => {
  //   expect(executeMission("RFRFRFRF")).toEqual({ x: 0, y: 0 });
  // });
});
