import axios from 'axios';
import Swal from 'sweetalert2';

// get All Recipe
export const getRecipe = (setRecipe) => async (dispatch) => {
  try {
    axios.get(`https://izipizy-team.up.railway.app/api/v1/recipe`).then((response) => {
      setRecipe(response.data.data);
    });
    dispatch({ type: 'getAllRecipe', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};

// get Recipe Popular
export const getRecipePopular = (setPopular, counter) => async (dispatch) => {
  try {
    axios.get(`https://izipizy-team.up.railway.app/api/v1/recipe?sortby=likes&sort=asc&limit=100`).then((response) => {
      setPopular(response.data.data);
    });
    dispatch({ type: 'getAllRecipePopular', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};

export const getComment = (setDataComments, id) => async (dispatch) => {
  try {
    axios.get(`https://izipizy-team.up.railway.app/api/v1/comment/recipe/${id}`).then((response) => {
      setDataComments(response.data.data);
    });
    dispatch({ type: 'getComment', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};

// Create Recipe
export const createRecipe = (insertProduct, imageProduct) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    let inputForm = new FormData();
    inputForm.append('name_recipe', insertProduct.name_recipe);
    inputForm.append('ingredients', insertProduct.ingredients);
    inputForm.append('video', insertProduct.video);
    inputForm.append('description', insertProduct.description);
    inputForm.append('image', imageProduct);
    axios
      .post(`https://izipizy-team.up.railway.app/api/v1/recipe/`, inputForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: 'Product Added',
          text: `New product have been added`,
          icon: 'success',
        });
      });
    dispatch({ type: 'createRecipe', payload: 'Recipe Created success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Update Recipe
export const updateRecipe = (detailProduct, image) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('id', detailProduct.id);
    formData.append('name_recipe', detailProduct.name_recipe);
    formData.append('ingredients', detailProduct.ingredients);
    formData.append('video', detailProduct.video);
    formData.append('description', detailProduct.description);
    formData.append('image', image, image.name);
    axios
      .put(`https://izipizy-team.up.railway.app/api/v1/recipe/${detailProduct.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        Swal.fire({
          title: 'Update Product Success',
          icon: 'success',
        });
      });
    dispatch({ type: 'updateRecipe', payload: 'Recipe Updated success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Delete Recipe
export const deleteRecipe = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    axios
      .delete(`https://izipizy-team.up.railway.app/api/v1/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        Swal.fire({
          title: 'Delete Success',
          text: `Your Recipe Delete Success`,
          icon: 'success',
        });
      });
    dispatch({ type: 'deleteRecipe', payload: 'Recipe Deleted success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// get detail recipe
export const getDetailRecipe = (setRecipe, id) => async (dispatch) => {
  try {
    axios.get(`https://izipizy-team.up.railway.app/api/v1/recipe/${id}`).then((response) => {
      setRecipe(response.data.data);
    });
    dispatch({ type: 'getDetailRecipe', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};
