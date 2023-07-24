
export const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: " WebLight - Assignment  -- FMCG Commercial App API",
      version: "1.0.0",
      description: "API documentation for FMCG Commercial App",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./routes/crudRoute.js"],
  paths: {
    "/": {
      get: {
        summary: "This API is used to check if the GET method is working or not.",
        description: "This API is used to check if the GET method is working.",
        responses: {
          200: {
            description: "To test the GET method.",
          },
        },
      },
    },
    "/": { 
      get: {
        tags: ["Users"],
        summary: "Get all users",
        description: "Get a list of all users.",
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/{_Id}": { 
      get: {
        tags: ["Users"],
        summary: "Get a user by ID",
        description: "Get a user by their ID.",
        parameters: [
          {
            name: "_Id",
            in: "path",
            description: "User ID",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          404: {
            description: "User not found",
          },
        },
      },
    },
    "/search/{key}": { 
      get: {
        tags: ["Users"],
        summary: "Search users",
        description: "Search users based on a keyword.",
        parameters: [
          {
            name: "key",
            in: "path",
            description: "Keyword to search for",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/": { 
      post: {
        tags: ["Users"],
        summary: "Create a new user",
        description: "Create a new user.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
      },
    },
    "/{_Id}": { 
      put: {
        tags: ["Users"],
        summary: "Update a user",
        description: "Update an existing user by their ID.",
        parameters: [
          {
            name: "_Id",
            in: "path",
            description: "User ID",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          404: {
            description: "User not found",
          },
        },
      },
    },
    "/{_Id}": { 
      delete: {
        tags: ["Users"],
        summary: "Delete a user",
        description: "Delete an existing user by their ID.",
        parameters: [
          {
            name: "_Id",
            in: "path",
            description: "User ID",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          404: {
            description: "User not found",
          },
        },
      },
    },
  },
};