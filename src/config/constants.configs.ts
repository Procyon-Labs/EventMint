const basePath = "/api/v1";
const DATABASES = {
  PRODUCT: "Product",
  EVENT: "Event",
  TRANSACTION: "transaction",
};

const MESSAGES = {
  DATABASE: {
    CONNECTED: "Connection to database has been established successfully",
    ERROR: "Unable to connect to database:",
  },

  UNEXPECTED_ERROR: "An unexpected error occured.",
};

export { MESSAGES, DATABASES };
