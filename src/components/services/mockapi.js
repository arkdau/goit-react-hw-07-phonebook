const BASE_API_URL = "https://659dfc5f47ae28b0bd350479.mockapi.io/api/v1";

// Timeout a fetch() Request
async function fetchWithTimeout(resource, options) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}

/**
 * Category name to get a list of books in this category.
 * Will receive a collection of 20 books of a certain category
 */
const options = {
  timeout: 6000,
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

async function fetchData(query, id) {
  options.method = query;
  let url_1 = "contacts/";

  switch (query) {
    case "GET":
      break;
    case "DELETE":
      url_1 = `contacts/${id}`;
      break;

    default:
      break;
  }

  try {
    const url = `${BASE_API_URL}/${url_1}`;
    const response = await fetchWithTimeout(
      `${url}`,
      options,
    );
    // ok - shorthand for checking that the status is in the range 2xx (boolean)
    if (!response.ok) {
      throw new Error(
        `Network response was not OK - HTTP error: ${response.status}`,
      );
    }
    const data = await response.json();
    // debugger;
    return data;
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation:",
      error.message,
    );
  }
}

export default fetchData;
