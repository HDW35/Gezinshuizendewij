import {
  Building2,
  Camera,
  Circle,
  Contact,
  Home,
  Users,
} from "~/icons";

/**
 * Icon Component
 *
 * For automated icon display with name props.
 * Works by mapping the name string with like a switch case.
 * Only used when need to determine icon based on the item name from data.
 */

export const iconMaps = {
  default: <Circle />,
  home: <Home />,
  building: <Building2 />,
  users: <Users />,
  camera: <Camera />,
  contact: <Contact />
};

export function lookupIcon(lookupObject: any, defaultCase = "default") {
  return (expression: string | number) => {
    return lookupObject[expression] || lookupObject[defaultCase];
  };
}

export const iconSwitch = lookupIcon(iconMaps, "default");

export function Icon({ name = "default" }: { name?: string }) {
  return iconSwitch(name);
}
