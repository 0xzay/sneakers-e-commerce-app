import axios from 'axios';

export async function getUsdPrice() {
  try {
    const response = await axios.get(
      'https://www.cbr-xml-daily.ru/daily_json.js'
    );
    return response.data.Valute.USD.Value;
  } catch (error) {
    console.error(error);
  }
}
