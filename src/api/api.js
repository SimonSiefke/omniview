export const getUser = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    firstName: 'C',
    lastName: 'K',
  }
}

export const getAggregatedAccountBalance = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    amount: '₦1.314.395.760',
  }
}

export const getLastTrade = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    amountInDollar: '$ 8.332,00',
    amountInNaira: '2.965.836.000 NGN',
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
