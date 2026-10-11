import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseUrl } from "../../baseurl";

export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BaseUrl}blog?page=1&limit=3`);

      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const response = await res.json();

      const blogsArray = Array.isArray(response)
        ? response
        : response?.data || [];

      return blogsArray
        .sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .slice(0, 3);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

interface BlogState {
  blogs: any[];
  loading: boolean;
  activeBlogCategoryTab?: string;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
  activeBlogCategoryTab: "View All",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setActiveBlogCategoryTab: (state, action: PayloadAction<string>) => {
      state.activeBlogCategoryTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Failed to fetch blogs";
      });
  },
});

export const { setActiveBlogCategoryTab } = blogSlice.actions;

export default blogSlice.reducer;
