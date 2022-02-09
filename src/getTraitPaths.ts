import * as fs from "fs";

const traitsBasePath = "./public/traits";
const traitsRemotePath = "/traits"

type path = string;
interface Traits { [traitType: string]: path[] }

export default function getTraitPaths() {
  const traits: Traits = {};
  const traitTypes = fs.readdirSync(traitsBasePath);
  traitTypes.forEach((traitType) => {
      traits[traitType] = fs.readdirSync(`${traitsBasePath}/${traitType}`).map((fileName) => `${traitsRemotePath}/${traitType}/${fileName}` as path);
  });
  return traits;
}