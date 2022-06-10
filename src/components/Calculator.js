import React from 'react';
import { Inputs, Calculate } from './Inputs.js';
import { Api } from './Api.js';
import './style2.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrincipalTokenAmountChange = this.handlePrincipalTokenAmountChange.bind(this);
    this.handlePrincipalTokenPriceChange = this.handlePrincipalTokenPriceChange.bind(this);
    this.handleCurrentTokenPriceChange = this.handleCurrentTokenPriceChange.bind(this);
    this.handleCurrentTokenYieldChange = this.handleCurrentTokenYieldChange.bind(this);
    this.handleDaysStakedChange = this.handleDaysStakedChange.bind(this);
    this.state = { 
        principalTokenAmount: '',
        principalTokenPrice: '',
        currentTokenPrice: '',
        currentTokenYield: '',
        daysStaked: ''
     };
  }

  handlePrincipalTokenAmountChange(principalTokenAmount) {
    this.setState({ principalTokenAmount });
  }

  handlePrincipalTokenPriceChange(principalTokenPrice) {
      this.setState({ principalTokenPrice });
  }

  handleCurrentTokenPriceChange(currentTokenPrice) {
      this.setState({ currentTokenPrice });
  }

  handleCurrentTokenYieldChange(currentTokenYield) {
      this.setState({ currentTokenYield });
  }

  handleDaysStakedChange(daysStaked) {
      this.setState({ daysStaked });
  }

  render() {
    const principalTokenAmount = this.state.principalTokenAmount;
    const principalTokenPrice = this.state.principalTokenPrice;
    const currentTokenPrice = this.state.currentTokenPrice;
    const currentTokenYield = this.state.currentTokenYield;
    const daysStaked = this.state.daysStaked;
    return (
    <div>
    <fieldset>
    <legend>REBASE TOKEN COMPOUND INTEREST CALCULATOR</legend>
    <p><h3>Current Price: </h3></p>
    <div class="grid-container">
    <div class="calculator-container">
    <Api />
        <div class="input-output-container">
        <div class="input-container">
        <Inputs
            principalTokenAmount={principalTokenAmount} 
            principalTokenPrice={principalTokenPrice} 
            currentTokenPrice={currentTokenPrice}
            currentTokenYield={currentTokenYield}
            daysStaked={daysStaked}
            onPrincipalTokenAmountChange={this.handlePrincipalTokenAmountChange} 
            onPrincipalTokenPriceChange={this.handlePrincipalTokenPriceChange}
            onCurrentTokenPriceChange={this.handleCurrentTokenPriceChange}
            onCurrentTokenYieldChange={this.handleCurrentTokenYieldChange}
            onDaysStakedChange={this.handleDaysStakedChange} />
        </div>     
        <div class="output-container">  
        <Calculate
            principalTokenAmount={parseFloat(principalTokenAmount)} 
            principalTokenPrice={parseFloat(principalTokenPrice)}    
            currentTokenPrice={parseFloat(currentTokenPrice)}
            currentTokenYield={parseFloat(currentTokenYield)}
            daysStaked={parseFloat(daysStaked)}
            />
        </div>
        </div>
    </div>
    </div>
    </fieldset>
    </div>
    )
  }
}

export default Calculator;