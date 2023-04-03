import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CategoryModal from '../components/CategoryModal'
import { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
];

export default function Categories() {
  const { getBlogData } = useBlogCall();
  const { categories } = useSelector((state) => state.blog);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(categories);

  useEffect(() => {
    getBlogData("categories");
    // getNewsData();
  }, []);

  return (
    <>
    <Button
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={handleOpen}
        >
          Add Category
        </Button>
        <CategoryModal open={open} setOpen={setOpen} handleClose={handleClose} />
      <div style={{ height: "85vh", width: "100%" }}>
        <DataGrid
          rows={categories}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
