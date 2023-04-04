import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CategoryModal from "../components/modals/CategoryModal";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Categories() {
  const { getBlogData } = useBlogCall();
  const { categories } = useSelector((state) => state.blog);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deleteBlogData, editBlogData } = useBlogCall();
  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    getBlogData("categories");
    // getNewsData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Category Name", width: 300 },
    {
      field: "edit",
      headerName: "Edit",
      width: 120,
      renderCell: (params) => (
        <Button
          startIcon={<EditIcon />}
          size="small"
          onClick={() => handleEdit(params.row)}
        ></Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
      renderCell: (params) => (
        <Button
          startIcon={<DeleteIcon />}
          size="small"
          onClick={() => handleDelete(params.id)}
        ></Button>
      ),
    },
  ];
console.log(category)
  const handleEdit = (id) => {
    console.log(id);
    setOpen(true);
    setCategory(id)
    console.log(category)
    console.log(`Editing category with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
    deleteBlogData("categories", id);
    console.log(`Deleting category with ID ${id}`);
  };

  return (
    <>
      <Button variant="contained" sx={{ margin: "1rem" }} onClick={handleOpen}>
        Add Category
      </Button>
      <CategoryModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        category={category}
        setCategory={setCategory}
      />
      <div style={{ height: "75vh", width: "100%" }}>
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
