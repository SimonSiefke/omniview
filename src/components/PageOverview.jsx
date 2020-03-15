import { useMediaQuery } from 'react-responsive'
import { Layout } from 'element-react'
import { Chart } from '../atoms/Chart'
import React from 'react'
import { ShadowContainer } from './ShadowContainer'
import { Select } from '../atoms/Select'

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
              <p>₦1.314.395.760</p>
            </section>
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
          </ShadowContainer>
        </div>
        <div style={{ flex: 1 }}>
          <ShadowContainer
            style={{
              borderTop: `3px solid var(--medium-blue)`,
              height: '150px',
            }}
          >
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
              <p>$ 8.332,00</p>
              <p>2.965.836.000 NGN</p>
            </section>
          </ShadowContainer>
        </div>
      </div>
      <Layout.Row style={{ marginBottom: 'var(--gutter-width)' }}>
        <ShadowContainer style={{ paddingTop: '0' }}>
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
                  aria-label="Previous week"
                  style={{
                    background: 'var(--background-blue-gray)',
                    color: 'var(--text-light-gray)',
                    padding: '8px 13px',
                    marginRight: '7px',
                  }}
                  onClick={() => {
                    alert('Previous Week')
                  }}
                >
                  &lt;
                </button>
                <button
                  aria-label="Next week"
                  style={{
                    background: 'var(--background-blue-gray)',
                    color: 'var(--text-light-gray)',
                    padding: '8px 13px',
                    marginRight: '14px',
                  }}
                  onClick={() => {
                    alert('Next Week')
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
                  <time dateTime="2018-09-20">20/09/2018</time>
                  <span> </span>
                  <span aria-label="to">-</span>
                  <span> </span>
                  <time dateTime="2018-09-27">27/09/2018</time>
                </button>
                <Select ariaLabel="Interval" defaultValue="weekly">
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
            <Chart />
          </section>
        </ShadowContainer>
      </Layout.Row>
      <Layout.Row>
        <ShadowContainer
          style={{ background: 'var(--background-lighter-gray)' }}
        >
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
        </ShadowContainer>
      </Layout.Row>
    </>
  )
}
