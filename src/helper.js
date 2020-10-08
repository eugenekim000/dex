console.log(json.chain.evolves_to[0]);
const extractEvolutions = (evolutionJSON) => {
  let evolutionChain = evolutionJSON.chain;
  let result = [];
  while (evolutionChain.evolves_to.length) {
    let obj = {};
    const { species } = evolutionChain;
    const { evolution_details } = evolutionChain.evolves_to[0];
    const { trigger, min_level } = evolution_details[0];

    obj = { ...species, trigger: trigger.name, level: min_level };
    result.push(obj);
    evolutionChain = evolutionChain.evolves_to[0];
  }
  let finalEvolution = { ...evolutionChain.species, trigger: null };
  result = [...result, finalEvolution];

  return result;
};
