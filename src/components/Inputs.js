import React from 'react';
import './style2.css';

export class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrincipalTokenAmountChange = this.handlePrincipalTokenAmountChange.bind(this);
    this.handlePrincipalTokenPriceChange = this.handlePrincipalTokenPriceChange.bind(this);
    this.handleCurrentTokenPriceChange = this.handleCurrentTokenPriceChange.bind(this);
    this.handleCurrentTokenYieldChange = this.handleCurrentTokenYieldChange.bind(this);
    this.handleDaysStakedChange = this.handleDaysStakedChange.bind(this);
  }

  handlePrincipalTokenAmountChange(e) {
    this.props.onPrincipalTokenAmountChange(e.target.value);
  }

  handlePrincipalTokenPriceChange(e) {
    this.props.onPrincipalTokenPriceChange(e.target.value);
  }

  handleCurrentTokenPriceChange(e) {
    this.props.onCurrentTokenPriceChange(e.target.value);
  }

  handleCurrentTokenYieldChange(e) {
      this.props.onCurrentTokenYieldChange(e.target.value);
  }

  handleDaysStakedChange(e) {
      this.props.onDaysStakedChange(e.target.value);
  }

  render() {
    const principalTokenAmount = this.props.principalTokenAmount;
    const principalTokenPrice = this.props.principalTokenPrice;
    const currentTokenPrice = this.props.currentTokenPrice;
    const currentTokenYield = this.props.currentTokenYield;
    const daysStaked = this.props.daysStaked;
    return (
        <div>
            <label>Tokens Purchased: </label>
            <input value={principalTokenAmount} onChange={this.handlePrincipalTokenAmountChange} />
            <p></p>
            <label>Purchase Token Price: </label>
            <input value={principalTokenPrice} onChange={this.handlePrincipalTokenPriceChange} />
            <p></p>
            <label>Current Token Price: </label>
            <input value={currentTokenPrice} onChange={this.handleCurrentTokenPriceChange} />
            <p></p>
            <label>Current Yield %: </label>
            <input value={currentTokenYield} onChange={this.handleCurrentTokenYieldChange} />
            <p></p>
            <label>Days Staked: </label>
            <input value={daysStaked} onChange={this.handleDaysStakedChange} />
            <p></p>
        </div>
    )
  }
}

export function Calculate(props) {

var currentInvestment = props.principalTokenAmount*props.currentTokenPrice;
var principalInvestment = props.principalTokenPrice*props.principalTokenAmount;
var yieldPerRebase = props.currentTokenYield*0.01;
var rebasePeriodsStaked = props.daysStaked*3;
var amountArray = [];

for (let i=0; i<=rebasePeriodsStaked; i++){
    if(i === 0){
        amountArray.push(props.principalTokenAmount);
    }
    else {
        amountArray.push(amountArray[i - 1]+(amountArray[i - 1]*yieldPerRebase));
    }
}

let potentialValueUSD = parseFloat(amountArray[rebasePeriodsStaked]*props.currentTokenPrice).toFixed(2);
let tokenRewardsEstimation = parseFloat(amountArray[rebasePeriodsStaked] - props.principalTokenAmount).toFixed(2);
    return (
        <div>
        <label>Initial Investment: </label>
            <output>{
                principalInvestment
            }</output>
        <p></p>
        <label>Potential Value in USD: </label>
            <output>{
                potentialValueUSD
            }</output>
        <p></p>
        <label>Token Rewards Estimation: </label>
            <output>{
                tokenRewardsEstimation
            }</output>
        <p></p>
        <label>Current Token Value: </label>
            <output>{
                currentInvestment
            }</output>
        <p></p>
        </div>
    )
  }