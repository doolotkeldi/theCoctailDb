// fetchCocktails.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetchCocktails() {
  const cocktails = [];
  for (let i = 0; i < 10; i++) {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      cocktails.push(response.data.drinks[0]);
      await new Promise(resolve => setTimeout(resolve, 10000));
    } catch (error) {
      console.error('Ошибка при получении данных:', error); // Изменили вывод ошибки
    }
  }
  return cocktails;
}

async function saveToJSON(cocktails) {
  try {
    const filePath = path.join(__dirname, 'cocktails.json');
    await fs.promises.writeFile(filePath, JSON.stringify(cocktails, null, 2));
    console.log('Данные о коктейлях сохранены в cocktails.json');
  } catch (error) {
    console.error('Ошибка при сохранении в JSON:', error);
  }
}

async function main() {
  const cocktailsData = await fetchCocktails();
  await saveToJSON(cocktailsData);
}

main();
