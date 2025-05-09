import {generic} from "./types/strategy/generic";
import StrategyDefaults = generic.StrategyDefaults;

/**
 * Default configuration for the mushroom strategy.
 */
export const configurationDefaults: StrategyDefaults = {
  areas: {
    undisclosed: {
      floor_id: null,
      aliases: [],
      area_id: "undisclosed",
      name: "Undisclosed",
      picture: null,
      hidden: false,
    }
  },
  debug: false,
  domains: {
    _: {
      hide_config_entities: false,
    },
    default: {
      title: "Miscellaneous",
      showControls: false,
      hidden: false,
    },
    light: {
      title: "Lights",
      showControls: true,
      iconOn: "mdi:lightbulb",
      iconOff: "mdi:lightbulb-off",
      onService: "light.turn_on",
      offService: "light.turn_off",
      hidden: false,
    },
    fan: {
      title: "Fans",
      showControls: true,
      iconOn: "mdi:fan",
      iconOff: "mdi:fan-off",
      onService: "fan.turn_on",
      offService: "fan.turn_off",
      hidden: false,
    },
    cover: {
      title: "Covers",
      showControls: true,
      iconOn: "mdi:arrow-up",
      iconOff: "mdi:arrow-down",
      onService: "cover.open_cover",
      offService: "cover.close_cover",
      hidden: false,
    },
    switch: {
      title: "Switches",
      showControls: true,
      iconOn: "mdi:power-plug",
      iconOff: "mdi:power-plug-off",
      onService: "switch.turn_on",
      offService: "switch.turn_off",
      hidden: false,
    },
    camera: {
      title: "Cameras",
      showControls: false,
      hidden: false,
    },
    lock: {
      title: "Locks",
      showControls: false,
      hidden: false,
    },
    climate: {
      title: "Climates",
      showControls: false,
      hidden: false,
    },
    media_player: {
      title: "Media Players",
      showControls: false,
      hidden: false,
    },
    sensor: {
      title: "Sensors",
      showControls: false,
      hidden: false,
    },
    binary_sensor: {
      title: "Binary Sensors",
      showControls: false,
      hidden: false,
    },
    number: {
      title: "Numbers",
      showControls: false,
      hidden: false,
    },
    vacuum: {
      title: "Vacuums",
      showControls: true,
      hidden: false,
    },
    lawn_mower: {
      title: "Lawn Mower",
      showControls: true,
      hidden: false,
    },
  },
  home_view: {
    hidden: [],
  },
  views: {
    home: {},
    light: {},
    fan: {},
    cover: {},
    switch: {},
    climate: {},
    camera: {},
    vacuum: {},
    lawn_mower: {},
    binary_sensor: {},
  }
};
