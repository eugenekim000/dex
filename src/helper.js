export const extractEvolutions = (evolutionJSON) => {
  let evolutionChain = evolutionJSON.chain;
  let result = [];
  while (evolutionChain.evolves_to.length) {
    let obj = {};
    const { species } = evolutionChain;
    const { evolution_details } = evolutionChain.evolves_to[0];
    const { trigger, min_level, item } = evolution_details[0];

    const urlArray = species.url.split("/");
    const id = urlArray[urlArray.length - 2];

    if (trigger.name === "use-item") trigger.name = replaceHyphen(item.name);

    obj = {
      ...species,
      trigger: replaceHyphen(trigger.name),
      level: min_level,
      id,
    };
    result.push(obj);
    evolutionChain = evolutionChain.evolves_to[0];
  }
  const urlArray = evolutionChain.species.url.split("/");
  const id = urlArray[urlArray.length - 2];
  let finalEvolution = {
    ...evolutionChain.species,
    trigger: false,
    id,
    level: null,
  };
  result = [...result, finalEvolution];

  return result;
};

export function replaceHyphen(string) {
  return string.split("-").join(" ");
}

export function capitalize(string) {
  let newString = string[0].toUpperCase();
  return newString + string.slice(1);
}
