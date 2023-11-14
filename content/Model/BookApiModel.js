import { BookModel } from "./BookModel.js";

const URLName = " http://localhost:8080/";

async function getAPIRequest(endpoint, metadata) {
  return fetch(endpoint, metadata).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return new Error(res.status);
    }
  });
}

async function getAllBooks(page, perPage) {
  const endpoint = `${URLName}getAllBooks?perpage=${perPage}&page=${page}`;
  try {
    const Books = await getAPIRequest(endpoint, {});
    const books = Books.map((book) => new BookModel(book));
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function getAllGenre(genre) {
  const endpoint = `${URLName}getBookByGenre/${genre}`;

  try {
    const Books = await getAPIRequest(endpoint, {});
    const books = Books.map((book) => new BookModel(book));
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function getAllAuthor(author) {
  const endpoint = `${URLName}getBookByAuthor/${author}`;

  try {
    const Books = await getAPIRequest(endpoint, {});
    const books = Books.map((book) => new BookModel(book));
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function getById(id) {
  const endpoint = `${URLName}getBookById/${id}`;

  try {
    const Books = await getAPIRequest(endpoint, {});
    const books = Books.map((book) => new BookModel(book));
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function getMaxId() {
  const endpoint = `${URLName}getMaxId`;

  try {
    const maxId = (await getAPIRequest(endpoint, {})).max;
    console.log(maxId);
    return maxId;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function add(book) {
  const endpoint = `${URLName}addBook`;
  const method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };

  try {
    const message = await getAPIRequest(endpoint, method);
    return message;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function update(book) {
  const endpoint = `${URLName}updateBook/${book.id}`;
  const method = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };
  console.log(endpoint);

  try {
    const message = await getAPIRequest(endpoint, method);
    return message;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function deleteAll() {
  const endpoint = `${URLName}deleteAllBooks`;
  const method = { method: "DELETE" };

  try {
    const message = await getAPIRequest(endpoint, method);
    return message;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function deleteId(id) {
  if (id == "") {
    id = 0;
  }

  const endpoint = `${URLName}deleteBookById/${id}`;
  const method = { method: "DELETE" };

  try {
    const message = await getAPIRequest(endpoint, method);
    return message;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function deleteGenre(genre) {
  const endpoint = `${URLName}/deleteAllBooksByGenre/${genre}`;
  const method = { method: "DELETE" };

  try {
    const message = await getAPIRequest(endpoint, method);
    return message;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

export {
  getAllBooks,
  getAllAuthor,
  getAllGenre,
  getById,
  getMaxId,
  add,
  update,
  deleteAll,
  deleteGenre,
  deleteId,
};
