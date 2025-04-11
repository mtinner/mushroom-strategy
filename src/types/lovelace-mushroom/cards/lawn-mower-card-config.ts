import {ActionsSharedConfig} from "../shared/config/actions-config";
import {LovelaceCardConfig} from "../../homeassistant/data/lovelace";
import {EntitySharedConfig} from "../shared/config/entity-config";
import {AppearanceSharedConfig} from "../shared/config/appearance-config";

export const LAWN_MOWER_COMMANDS = [
  "on_off",
  "start_pause",
  "return_home",
] as const;

export type LawnMowerCommand = (typeof LAWN_MOWER_COMMANDS)[number];

/**
 * Vacuum Card Config.
 *
 * @param {boolean} icon_animation Animate the icon when vacuum is cleaning.
 * @param {LawnMowerCommand[]} commands List of commands to display (start_pause, return_home).
 *
 * @see https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/vacuum.md
 */
export type LawnMowerCardConfig = LovelaceCardConfig &
  EntitySharedConfig &
  AppearanceSharedConfig &
  ActionsSharedConfig & {
  icon_animation?: boolean;
  commands?: LawnMowerCommand[];
};
