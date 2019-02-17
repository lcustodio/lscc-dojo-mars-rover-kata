type Facing = "N" | "S" | "E" | "W";

type Turn = "L" | "R";
type Move = "F" | "B";
type Action = Turn | Move;

interface World {
  width: number;
  facing: Facing;
  height: number;
  x: number;
  y: number;
}
//declare function f<T extends boolean>(x: T): T extends true ? string : number;

// export const stateIs = <T extends State>(tags: StateTag[]) => (
//     state: State
// ): state is T => R.any(tag => state.tag === tag, tags);

function isTurn(x: Action): x is Turn {
  return x === "L" || x === "R";
}

function isMove(x: Action): x is Move {
    return x === "F" || x === "B";
}

function turn(x: Turn) {
  return true;
}

function doMove(x: Move) {
  return true;
}

export const mission = (world: World) => (moves: Action[]) => {
  const newWorld = moves.reduce((result, move) => {
    const { x, y } = result;

    if (isMove(move)) {
        doMove(move)
    }

    if (isTurn(move)) {
      return result;
    }

    switch (result.facing) {
      case "N":
    }

    switch (move) {
      case "F":
        switch (result.facing) {
          case "N":
            return { ...result, y: y + 1 };
        }
      case "B":
        switch (result.facing) {
          case "N":
            return { ...result, y: y - 1 };
        }
    }
    return result;
  }, world);

  return { x: newWorld.x, y: newWorld.y };
};
