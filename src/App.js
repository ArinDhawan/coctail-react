import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      cocktails:[],
    }
  }


  submithandler= (e)=> {
    e.preventDefault();
  };

  changehandler=(e)=>{
    const letter = e.target.value;
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter
    fetch(url)
      .then((res) => res.json())
      .then((data)=> this.setState({cocktails: data}));
  };

  result=()=>{
    
    const data = this.state.cocktails.drinks
    if (data) {
      return data.map((cocktail)=>(
      <div className='main-card' key = {cocktail.idDrink}>
        <img src = {cocktail.strDrinkThumb} alt = "cocktails" height='200' width = '200'/><br/>
        <h2 className='main-title'>{cocktail.strDrink}</h2>
        <p className='main-ing'>
          Ingredients :<br/> {cocktail.strIngredient1}<br/>{cocktail.strIngredient2}<br/>{cocktail.strIngredient3}
        </p>
        <br/>
      </div>
      ));
    }
  }

  render() {
    return <>
    <div className='search-body'>
    <h1>Enter an alphabet</h1>
    </div>
    <div className='container'>
      <form onSubmit={this.submithandler}>
        <div className='search-container'>
          <input 
          type = 'search' 
          className='search-box'
          onChange={this.changehandler}
          />
          <br/>
        </div>
      </form>
      {this.result()}
    </div>
    </>
  }
}
export default App;