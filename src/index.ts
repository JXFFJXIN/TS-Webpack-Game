import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";
import { SquareGroup } from "./core/SquareGroup";
import { createTeris, LShape } from "./core/Teris";
import { IPoint, MoveDirection } from "./core/Types";
import { TerisRule } from "./core/TerisRule";
import { GamePageViewer } from "./core/viewer/GamePageViewer";
import { Game } from "./core/Game";

new Game(new GamePageViewer());
