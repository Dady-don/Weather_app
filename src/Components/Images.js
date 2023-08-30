import broken_clouds from "../Images/broken clouds.jpg";
import clear_sky from "../Images/clear sky.jpg";
import few_clouds from "../Images/few clouds.jpg";
import haze from "../Images/haze.avif";
import mist from "../Images/mist.jpg";
import overcast_clouds from "../Images/overcast clouds.jpg";
import scattered_clouds from "../Images/scattered clouds.jpg";
import light_rain from "../Images/light rain.avif";
import thunder_storm_with_light_rain from "../Images/thunderstorm with light rain.avif";
import smoke from "../Images/smoke.avif";
import moderate_rain from "../Images/moderate rain.avif";

const bg = {
  BROKEN_CLOUDS: "broken clouds",
  CLEAR_SKY: "clear sky",
  FEW_CLOUDS: "few clouds",
  HAZE: "haze",
  MIST: "mist",
  OVERCAST_CLOUDS: "overcast clouds",
  SCATTERED_CLOUDS: "scattered clouds",
  LIGHT_RAIN: "light rain",
  THUNDERSTORM_WITH_LIGHT_RAIN: "thunderstorm with light rain",
  SMOKE: "smoke",
  MODERATE_RAIN: "moderate rain",
};

export const bgToComponent = {
  [bg.BROKEN_CLOUDS]: broken_clouds,
  [bg.CLEAR_SKY]: clear_sky,
  [bg.FEW_CLOUDS]: few_clouds,
  [bg.HAZE]: haze,
  [bg.MIST]: mist,
  [bg.OVERCAST_CLOUDS]: overcast_clouds,
  [bg.SCATTERED_CLOUDS]: scattered_clouds,
  [bg.LIGHT_RAIN]: light_rain,
  [bg.THUNDERSTORM_WITH_LIGHT_RAIN]: thunder_storm_with_light_rain,
  [bg.SMOKE]: smoke,
  [bg.MODERATE_RAIN]: moderate_rain,
};
