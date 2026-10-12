import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('charges shipping below the free-shipping threshold', () => {
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal([{ price: 499999, qty: 1 }], options), 529999)
})

test('does not charge shipping at the free-shipping threshold', () => {
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal([{ price: 500000, qty: 1 }], options), 500000)
})

test('does not charge shipping above the free-shipping threshold', () => {
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal([{ price: 500001, qty: 1 }], options), 500001)
})

test('returns numeric zero for an empty cart', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal([], options), 0)
  assert.strictEqual(typeof cartTotal([], options), 'number')
})

test('rejects a negative price', () => {
  assert.throws(
    () => cartTotal([{ price: -1, qty: 1 }], {}),
    RangeError,
  )
})

test('rejects a zero quantity', () => {
  assert.throws(
    () => cartTotal([{ price: 1, qty: 0 }], {}),
    RangeError,
  )
})

test('rejects a negative quantity', () => {
  assert.throws(
    () => cartTotal([{ price: 1, qty: -1 }], {}),
    RangeError,
  )
})

test('rejects a fractional quantity', () => {
  assert.throws(
    () => cartTotal([{ price: 1, qty: 1.5 }], {}),
    RangeError,
  )
})

test('accepts zero price with a positive integer quantity', () => {
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 30000 }

  assert.equal(cartTotal([{ price: 0, qty: 2 }], options), 0)
})

test('rounds down when the fractional part is below one half', () => {
  const options = { vatRate: 0.00002, freeShipFrom: 10000, shipFee: 0 }

  assert.equal(cartTotal([{ price: 10000, qty: 1 }], options), 10000)
})

test('rounds up when the fractional part is exactly one half', () => {
  const options = { vatRate: 0.00005, freeShipFrom: 10000, shipFee: 0 }

  assert.equal(cartTotal([{ price: 10000, qty: 1 }], options), 10001)
})

test('rounds up when the fractional part is above one half', () => {
  const options = { vatRate: 0.00008, freeShipFrom: 10000, shipFee: 0 }

  assert.equal(cartTotal([{ price: 10000, qty: 1 }], options), 10001)
})

test('rounds the final total instead of VAT separately', () => {
  const items = [{ price: 10000.4, qty: 1 }]
  const options = { vatRate: 0.00004, freeShipFrom: 20000, shipFee: 0 }

  assert.equal(cartTotal(items, options), 10001)
})

test('rounds the additional subtotal example correctly', () => {
  const items = [{ price: 15001, qty: 1 }]
  const options = { vatRate: 0.00004, freeShipFrom: 15001, shipFee: 0 }

  assert.equal(cartTotal(items, options), 15002)
})
