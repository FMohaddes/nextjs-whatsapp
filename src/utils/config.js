
export const baseUrl = 'http://45.156.186.239:8080';
export const baseUrlApi = 'http://45.156.186.239:8080/api/v1/';
// Define a fetcher function
export function myLoader({ src, width, quality,fallback }) {
   return `${baseUrl}/${src}?w=${width}&q=${quality || 75}`;
}
export function isValidJson(data) {
   try {
      JSON.parse(data);
      return true;
   } catch {
      return false;
   }
}

// Function to validate response and return an empty object for invalid JSON
export function validateResponse(result) {
   if (!isValidJson(result.value)) {
      return {};
   }
   return result.value;
}

