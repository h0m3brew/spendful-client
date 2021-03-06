import React, { Component } from 'react';
// import config from '../config'
// import TokenService from '../services/token-service'

const DataContext = React.createContext({
  incomes: [],
  expenses: [],
  categories: [],
  errors: [],

  setAllIncomes: () => {},
  setAllExpenses: () => {},
  setCategories: () => {},
  setReports: () => {},

  updateIncome: () => {},
  updateExpense: () => {},
  deleteIncome: () => {},
  deleteExpense: () => {},

  setError: () => {},
  clearError: () => {}
});

export default DataContext;

export class DataProvider extends Component {
  state = {
    incomes: [],
    expenses: [],
    categories: [],
    errors: []
  }

  setAllIncomes = (incomes) => {
    this.setState({incomes})
  }

  setAllExpenses = (expenses) => {
    this.setState({expenses})
  }

  setCategories = (categories) => {
    this.setState({categories})
  }

  updateIncome = (id, updatedData) => {

  }

  updateExpense = (id, updatedData) => {

  }

  deleteIncome = (id) => {
    let newIncomesList = this.state.incomes.filter(income => income.id !== id); 
    this.setState({
      incomes: newIncomesList
    })
  }

  deleteExpense = (id) => {
    let newExpenseList = this.state.expenses.filter(expense => expense.id !== id); 
    this.setState({
      expenses: newExpenseList
    })
  }

  setReports = (report) => {
    this.setState({
      incomes: report.incomes,
      expenses: report.expenses
    })
  }

  setError = (errors) => {
    this.setState({errors})
  }

  clearError = () => {
    this.setError([])
  }

  render() {
    const value = {
      incomes: this.state.incomes,
      expenses: this.state.expenses,
      categories: this.state.categories,
      errors: this.state.errors,
      setAllIncomes: this.setAllIncomes,
      setAllExpenses: this.setAllExpenses,
      setCategories: this.setCategories,
      setReports: this.setReports,

      updateIncome: this.updateIncome,
      updateExpense: this.updateExpense,
      deleteIncome: this.deleteIncome,
      deleteExpense: this.deleteExpense,

      setError: this.setError,
      clearError: this.clearError
    };

    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}