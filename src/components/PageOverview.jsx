import { useMediaQuery } from 'react-responsive'
import { Chart } from '../atoms/Chart'
import React, { useState, useEffect } from 'react'
import { ShadowContainer } from './ShadowContainer'
import { Select } from '../atoms/Select'
import * as api from '../api/api'

const InfoAggregatedAccountBalance = () => {
  const [aggregatedAccountBalance, setAggregatedAccountBalance] = useState(null)
  useEffect(() => {
    ;(async () => {
      setAggregatedAccountBalance(await api.getAggregatedAccountBalance())
    })()
  }, [])

  return (
    <section>
      <h3
        style={{
          fontSize: '15px',
          fontWeight: 300,
          color: 'var(--text-gray)',
          marginBottom: 0,
        }}
      >
        Aggregated account balance
      </h3>
      {aggregatedAccountBalance === null ? (
        <div>Loading</div>
      ) : (
        <p
          style={{
            color: 'var(--text-blue)',
            fontSize: '22px',
            marginTop: '8px',
          }}
        >
          {aggregatedAccountBalance.amount}
        </p>
      )}
    </section>
  )
}

const InfoLastTrades = () => (
  <section>
    <h3
      style={{
        fontSize: '15px',
        fontWeight: 300,
        color: 'var(--text-gray)',
        marginBottom: 0,
      }}
    >
      Last Trade
    </h3>
    <p>-</p>
    <p>-</p>
    <p>-</p>
  </section>
)

const InfoLastTrade = () => {
  const [lastTrade, setLastTrade] = useState(null)
  useEffect(() => {
    ;(async () => {
      setLastTrade(await api.getLastTrade())
    })()
  }, [])
  return (
    <section>
      <h3
        style={{
          fontSize: '15px',
          fontWeight: 300,
          color: 'var(--text-gray)',
          marginBottom: 0,
        }}
      >
        Last Trade
      </h3>
      {lastTrade === null ? (
        <div>Loading</div>
      ) : (
        <>
          <p
            style={{
              color: 'var(--text-blue)',
              fontSize: '22px',
              marginTop: '8px',
            }}
          >
            {lastTrade.amountInDollar}
          </p>
          <small
            style={{
              display: 'block',
              marginTop: '8px',
              color: 'var(--text-gray)',
            }}
          >
            {lastTrade.amountInNaira}
          </small>
        </>
      )}
    </section>
  )
}

const formatDate = date =>
  date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '/')

const SectionAggregatedTransactions = () => {
  const [dates] = useState({
    start: new Date(),
    end: new Date(),
  })
  const [selectedInterval, setSelectedInterval] = useState('weekly')
  const [aggregatedTransactions, setAggregatedTransactions] = useState(null)
  useEffect(() => {
    ;(async () => {
      setAggregatedTransactions(await api.getAggregatedTransactions())
    })()
  }, [])
  return (
    <section style={{ height: '400px' }}>
      <header
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '12px 0',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2
          style={{
            color: 'var(--text-light-gray)',
            fontSize: '18px',
            fontWeight: 300,
          }}
        >
          Aggregated transactions
        </h2>
        <div>
          <button
            aria-label="Previous"
            style={{
              background: 'var(--background-blue-gray)',
              color: 'var(--text-light-gray)',
              padding: '8px 13px',
              marginRight: '7px',
            }}
            onClick={() => {
              alert('Previous')
            }}
          >
            &lt;
          </button>
          <button
            aria-label="Next"
            style={{
              background: 'var(--background-blue-gray)',
              color: 'var(--text-light-gray)',
              padding: '8px 13px',
              marginRight: '14px',
            }}
            onClick={() => {
              alert('Next')
            }}
          >
            &gt;
          </button>
          <button
            style={{
              background: 'var(--background-blue-gray)',
              color: 'var(--text-blue)',
              padding: '8px',
              marginRight: '14px',
            }}
            onClick={() => {
              alert('Select Date')
            }}
          >
            <time dateTime={dates.start.toISOString()}>
              {formatDate(dates.start)}
            </time>
            <span> </span>
            <span aria-label="to">-</span>
            <span> </span>
            <time dateTime={dates.start.toISOString()}>
              {formatDate(dates.end)}
            </time>
          </button>
          <Select
            ariaLabel="Interval"
            defaultValue={selectedInterval}
            onInput={setSelectedInterval}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </div>
      </header>
      <hr
        style={{
          marginLeft: '-20px',
          marginRight: '-20px',
        }}
      />
      {aggregatedTransactions ? (
        <Chart transactions={aggregatedTransactions} />
      ) : (
        <div>Loading</div>
      )}
    </section>
  )
}

const SectionTitle = () => (
  <section style={{ minHeight: '200px' }}>
    <h2
      style={{
        color: 'var(--text-light-gray)',
        fontSize: '18px',
        fontWeight: 300,
      }}
    >
      This is a title
    </h2>
  </section>
)

export const PageOverview = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      <div
        style={{
          display: 'flex',
          marginBottom: 'var(--gutter-width)',
          flexDirection: isMobile ? 'column' : 'row',
          marginLeft: isMobile ? 0 : '-5px',
          marginRight: isMobile ? 0 : '-5px',
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <ShadowContainer
            style={{
              borderTop: `3px solid var(--orange)`,
              height: '150px',
              marginRight: isMobile ? 0 : 'var(--gutter-width)',
              marginBottom: isMobile ? 'var(--gutter-width)' : 0,
            }}
          >
            <InfoAggregatedAccountBalance />
          </ShadowContainer>
        </div>
        <div style={{ flex: 1 }}>
          <ShadowContainer
            style={{
              borderTop: `3px solid var(--red)`,
              height: '150px',
              marginRight: isMobile ? 0 : 'var(--gutter-width)',
              marginBottom: isMobile ? 'var(--gutter-width)' : 0,
            }}
          >
            <InfoLastTrades />
          </ShadowContainer>
        </div>
        <div style={{ flex: 1 }}>
          <ShadowContainer
            style={{
              borderTop: `3px solid var(--medium-blue)`,
              height: '150px',
            }}
          >
            <InfoLastTrade />
          </ShadowContainer>
        </div>
      </div>
      <div style={{ marginBottom: 'var(--gutter-width)' }}>
        <ShadowContainer style={{ paddingTop: '0' }}>
          <SectionAggregatedTransactions />
        </ShadowContainer>
      </div>
      <div>
        <ShadowContainer
          style={{ background: 'var(--background-lighter-gray)' }}
        >
          <SectionTitle />
        </ShadowContainer>
      </div>
    </>
  )
}
