import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: ({ feature, searchTerm }) => {
        // Start with the base query
        let queryString = `/books?`;

        // Add the featured filter if provided
        if (feature !== undefined) {
          queryString += `featured_like=${feature ? "true" : ""}&`;
        }

        // Add the search term if provided
        if (searchTerm) {
          queryString += `title_like=${searchTerm}&`; // 'q' is typically used for search
        }

        // Remove trailing '&' if necessary
        queryString = queryString.slice(0, -1);

        return queryString;
      },
      keepUnusedDataFor: 5,
      providesTags: ["books"],
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useAddBookMutation,
  useEditBookMutation,
  useGetBookQuery,
  useDeleteBookMutation,
} = apiSlice;
