import React, { useState, useEffect } from "react";
import "./ExpenseManager.css";
import { Category, Description } from "@mui/icons-material";
const ExpenseManager = () => {
  const [ExpenseList, setExpenseList] = useState([]);
  const [total, setTotal] = useState(0);
  const [Budget, setBudget] = useState(0);
  const [AmountLeft, setAmountLeft] = useState(0);

  const [ExpenseData, setExpenseData] = useState({
    Title: "",
    Description: "No Description",
    Category: "",
    Date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...ExpenseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpenseData = ExpenseData;
    setExpenseList([...ExpenseList, newExpenseData]);
  };

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
        <div className="grid-box">
          <div className="input-form">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="title">
                Title <span>*</span>{" "}
              </label>
              <input
                type="text"
                id="title"
                name="Title"
                onChange={handleChange}
                required
              />
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                name="Description"
                id="Description"
                onChange={handleChange}
              />
              <label htmlFor="Category">
                Category <span>*</span>{" "}
              </label>
              <select
                name="Category"
                id="Category"
                onChange={handleChange}
                defaultValue="1"
                required
              >
                <option value="1" disabled>
                  Select Category
                </option>
                <option value="Shopping">Shopping</option>
                <option value="Movies">Movies</option>
                <option value="Education">Education</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Health">Health</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
              <label htmlFor="date">
                date <span>*</span>{" "}
              </label>
              <input
                type="date"
                name="Date"
                id="date"
                onChange={handleChange}
                required
              />
              <input type="submit" value="Add" />
            </form>
          </div>
          <div className="expense-data">
            <table>
              <thead>
                <tr>
                  <td>Sl No:</td>
                  <td>Title</td>
                  <td>Description</td>
                  <td>Category</td>
                  <td>Date</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {ExpenseList.length !== 0 &&
                  ExpenseList.map((elem, idx) => {
                    const { Title, Description, Category, Date } = elem;
                    return (
                      <tr key={Title}>
                        <td>{idx + 1}</td>
                        <td>{Title}</td>
                        <td>{Description}</td>
                        <td>{Category}</td>
                        <td>{Date}</td>
                        <td className="action-buttons">
                          <button className="view">View</button>
                          <button className="delete">Delete</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseManager;
