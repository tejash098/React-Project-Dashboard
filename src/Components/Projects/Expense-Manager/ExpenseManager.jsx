import React, { useState } from "react";
import "./ExpenseManager.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const ExpenseManager = () => {
  const [ExpenseList, setExpenseList] = useState([]);
  const [editBudget, setEditBudget] = useState(false);
  const [Budget, setBudget] = useState(0);

  const [ExpenseData, setExpenseData] = useState({
    Title: "",
    Amount: "",
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

  const handleDelete = (idx) => {
    const removedItem = ExpenseList.filter((item, index) => idx !== index);
    setExpenseList(removedItem);
  };

  const total = ExpenseList.reduce((sum, item) => {
    const amt = Number(item.Amount) || 0;
    return sum + amt;
  }, 0);

  return (
    <>
      <div className="expense-manager">
        <h1><AccountBalanceWalletIcon fontSize="large" color="primary"/> Expense Manager</h1>
        <div className="price-card">
          <div className="total-expense">
            <p>Total Expense</p>
            <h2>₹ {total}</h2>
          </div>
          <div className="budget">
            <p>Budget</p>
            {!editBudget ? (
              <>
                <h2>₹ {Budget}</h2>
                <button onClick={()=>setEditBudget(true)}>Edit</button>
              </>
            ) : (
              <>
                <input
                  type="number"
                  value={Budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <button onClick={()=>setEditBudget(false)}>OK</button>
              </>
            )}
          </div>
          <div className="amt-left">
            <p>Amount Left</p>
            <h2>₹ {Budget - total}</h2>
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
                // required
              />
              <label htmlFor="Amount">
                Amount <span>*</span>{" "}
              </label>
              <input
                type="text"
                name="Amount"
                id="Amount"
                onChange={handleChange}
                // required
              />
              <label htmlFor="Category">
                Category <span>*</span>{" "}
              </label>
              <select
                name="Category"
                id="Category"
                onChange={handleChange}
                defaultValue="1"
                // required
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
                // required
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
                  <td>Amount</td>
                  <td>Category</td>
                  <td>Date</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {ExpenseList.length !== 0 &&
                  ExpenseList.map((elem, idx) => {
                    const { Title, Amount, Category, Date } = elem;
                    return (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td style={{textTransform:"capitalize", fontWeight:"bold"}}>{Title}</td>
                        <td>₹ {Amount}</td>
                        <td>{Category}</td>
                        <td>{Date}</td>
                        <td className="action-buttons">
                          <button className="view">View</button>
                          <button
                            className="delete"
                            onClick={() => handleDelete(idx)}
                          >
                            Delete
                          </button>
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
