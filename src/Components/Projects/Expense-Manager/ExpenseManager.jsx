import React, { useState, useEffect } from "react";
import "./ExpenseManager.css";
import { Category, Description } from "@mui/icons-material";
const ExpenseManager = () => {
  const [ExpenseList, setExpenseList] = useState([])

  const [ExpenseData, setExpenseData] = useState({
    Description : "",
    Category : "",
    date : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({...ExpenseData, [name] : value});
  };

  const handleSubmit = () => {
    setExpenseList(...ExpenseList, ExpenseData)
  }

  return (
    <>
      <div className="expense-manager">
        <h1>Expense Manager</h1>
        <div className="price-card">
          <div className="total-expense">
            <p>Total Expense</p>
          </div>
          <div className="budget">
            <p>Budget</p>
          </div>
          <div className="amt-left">
            <p>Amount Left</p>
          </div>
        </div>
        <div className="input-form">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              name="Description"
              id="Description"
              onChange={handleChange}
            />
            <label htmlFor="Category">category</label>
            <select name="Category" id="Category">
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="shopping">shopping</option>
              <option value="">Movies</option>
              <option value="">Education</option>
              <option value="">Miscellaneous</option>
            </select>
            <label htmlFor="date">date</label>
            <input type="date" name="date" id="date" />
            <input type="submit" placeholder="Add" />
          </form>
        </div>
        <div className="expense-data">
          <table>
            <thead>
              <tr>
                <td>Sl No:</td>
                <td>Description</td>
                <td>Category</td>
                <td>Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExpenseManager;
