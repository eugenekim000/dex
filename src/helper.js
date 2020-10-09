export const extractEvolutions = (evolutionJSON) => {
  let evolutionChain = evolutionJSON.chain;
  let result = [];
  while (evolutionChain.evolves_to.length) {
    let obj = {};
    const { species } = evolutionChain;
    const { evolution_details } = evolutionChain.evolves_to[0];
    const { trigger, min_level } = evolution_details[0];

    const urlArray = species.url.split("/");
    console.log(urlArray, "this is the url array");
    const id = urlArray[urlArray.length - 2];

    obj = { ...species, trigger: trigger.name, level: min_level, id };
    result.push(obj);
    evolutionChain = evolutionChain.evolves_to[0];
  }
  let finalEvolution = { ...evolutionChain.species, trigger: null };
  const urlArray = evolutionChain.species.url.split("/");
  const id = urlArray[urlArray.length - 1];
  result = [...result, finalEvolution, id];

  return result;
};
