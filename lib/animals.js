const fs = require('fs');
const path = require('path');

function validateAnimal(animal) {
    // check to make sure the values are filled and they're strings
    if (!animal.name || typeof animal.name !== 'string') {
      return false;
    }
    if (!animal.species || typeof animal.species !== 'string') {
      return false;
    }
    if (!animal.diet || typeof animal.diet !== 'string') {
      return false;
    }
    if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
      return false;
    }
    return true;
  }
  
  function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];
    let filteredResults = animalsArray;
    if (query.personalityTraits) {
      if (typeof query.personalityTraits === "string") {
        personalityTraitsArray = [query.personalityTraits];
      } else {
        personalityTraitsArray = query.personalityTraits;
      }
      personalityTraitsArray.forEach((trait) => {
        filteredResults = filteredResults.filter(
          (animal) => animal.personalityTraits.indexOf(trait) !== -1
        );
      });
    }
  
    if (query.species) {
      filteredResults = filteredResults.filter(
        (animal) => animal.species === query.species
      );
    }
  
    if (query.name) {
      filteredResults = filteredResults.filter(
        (animal) => animal.name === query.name
      );
    }
    return filteredResults;
  }
  
  function findById(id, animalsArray) {
      const result = animalsArray.filter(animal => animal.id === id)[0];
      return result;
  }
  
  function createNewAnimal(body, animalsArray) {
    const animal = body;
    animalsArray.push(animal);
    fs.writeFileSync(
      // join two paths to a file
      // __dirname is the directory of the file we execute the code in
      path.join(__dirname, '../data/animals.json'),
      // stringify the animalsArray
      // 2nd argument edits existing values (null does not change anything)
      // 3rd argument is for whitespace
      JSON.stringify({ animals: animalsArray }, null, 2)
    );
    
    return animal;
  }

  module.exports = {
      filterByQuery,
      findById,
      createNewAnimal,
      validateAnimal
  };