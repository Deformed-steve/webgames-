! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "70b55356-7ee7-410a-a852-769d81959968", e._sentryDebugIdIdentifier = "sentry-dbid-70b55356-7ee7-410a-a852-769d81959968")
  } catch (i) {}
}();
var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
  "_sentryBundlerPluginAppKey:@rbitrary-golden-pumpkin": !0
});
import "./pixi.js-DlquM4wl.js";
const t = {
  selection: {
    status: {
      cancelAction: "Cancel"
    },
    variants: {
      adjacentTilesDirectional: {
        selectOrigin: "Choose the first tile",
        selectTarget: "Pick a neighboring tile"
      },
      bomb: {
        selectTile: "Place the bomb"
      },
      byValue: {
        selectValue: "Choose a number"
      },
      multipleTile: {
        twoTiles: {
          selectFirst: "Choose the first tile",
          selectSecond: "Choose the second tile"
        }
      },
      singleTile: {
        selectTile: "Choose a tile"
      },
      rotation: {
        selectDirection: "Choose a direction"
      },
      singleCell: {
        selectCell: "Pick a place on the board"
      },
      tileAndEmptyCell: {
        selectTile: "Choose a tile",
        selectEmptyCell: "Pick an empty spot on the board"
      }
    }
  },
  powerup: {
    powerupsUsed: "{count} {{powerup|powerups}} used:",
    usesLeft: "{usesRemaining} {{use|uses}} left",
    usesLeftLong: "{usesRemaining} {{undo|undos}} left",
    obtainByCreatingTile: "Make a {tile} tile to get more uses",
    variants: {
      undo: {
        title: "Undo",
        description: "Go back one move or cancel the last powerup"
      },
      teleportTileToEmptyCell: {
        title: "Teleport a tile",
        description: "Move a tile to an empty cell"
      },
      rotateOuterRingOfBoard: {
        title: "Rotate the outer ring",
        description: "Turn the outer ring of the board"
      },
      swapTwoTiles: {
        title: "Swap two tiles",
        description: "Exchange the positions of two tiles"
      },
      mergeAnyTwoAdjacentTiles: {
        title: "Join tiles",
        description: "Pick  tiles that are next to each other regardless of their values"
      },
      removeTilesByValue: {
        title: "Delete tiles by number",
        description: "Remove all tiles with a specific value"
      },
      bomb: {
        title: "Bomb",
        description: "Remove all tiles in a 3x3 area"
      }
    }
  }
};
export {
  t as
  default
};