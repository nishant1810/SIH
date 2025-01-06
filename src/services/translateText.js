import axios from 'axios';

const translateText = async (text) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://google-translate1.p.rapidapi.com/language/translate/v2/detect`;

  try {
    const response = await axios.post(url, {}, { // Changed `null` to `{}` for the body
      params: {
        q: text,
        target: 'es', // Target language (Spanish in this case)
        key: apiKey,
      },
      
    });
    console.log (response);
    return response.data.data.translations[0].translatedText; // Accessing the correct path
  } catch (error) {
    console.error("Error translating text:", error);
    return null; // Return null or an error message in case of failure
  }
};

export default translateText;
