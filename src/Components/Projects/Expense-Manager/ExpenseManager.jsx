import React, {useState, useEffect} from 'react'
import './ExpenseManager.css'
const ExpenseManager = () => {
    const [ExpenseData, setExpenseData] = useState([])
    
    return (
        <>
        <div className="expense-manager">
            <h1>Expense Manager</h1>
            <div className="price-card">
                <div className="total-expense"></div>
                <div className="budget"></div>
                <div className="amt-left"></div>
            </div>
            <div className="input-form">
                <form action="">
                    <label htmlFor="Description">Description</label>
                    <input type="text" name='Description' id='Description'/>
                    <label htmlFor="category">category</label>
                    <select name="category" id="category">
                        <option value="" disabled>Select Category</option>
                        <option value="shopping">shopping</option>
                        <option value="">Movies</option>
                        <option value="">Education</option>
                        <option value="">Miscellaneous</option>
                    </select>
                    <label htmlFor="date">date</label>
                    <input type="date" name='date' id='date' />
                    <input type="submit" value="" placeholder='Add' />
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
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default ExpenseManager
