export const getAccountData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    userName: 'C K',
  }
}

export const getAggregatedAccountBalance = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    amount: '1314395760',
  }
}

export const getLastTrade = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    amountInDollar: '833200',
    amountInNaira: '2965835000',
  }
}

export const getAggregatedTransactions = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    {
      positiveTransactionsNumber: 6,
      positiveTransactionsAmountInNaira: '5765736000',
      negativeTransactionsNumber: 2,
      negativeTransactionsWorth: '12000000',
    },
    {
      positiveTransactionsNumber: 6,
      positiveTransactionsAmountInNaira: '5765736000',
      negativeTransactionsNumber: 2,
      negativeTransactionsAmountInNaira: '12000000',
    },
    {
      positiveTransactionsNumber: 6,
      positiveTransactionsAmountInNaira: '5765736000',
      negativeTransactionsNumber: 2,
      negativeTransactionsAmountInNaira: '12000000',
    },
  ]
}
