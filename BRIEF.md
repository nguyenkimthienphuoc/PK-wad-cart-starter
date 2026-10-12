# Implementation Brief — cartTotal

## 1. Task

Implement `cartTotal(items, options)` in `src/cart.js`.

The project uses plain JavaScript with no external dependencies.

## 2. Functional Requirements

- Calculate the subtotal as the sum of `price × qty` for all items.
- Calculate VAT by applying `options.vatRate` to the subtotal.
- Apply free shipping when `subtotal >= options.freeShipFrom`; otherwise, charge `options.shipFee`.
- Return the subtotal plus VAT and shipping, rounded to the nearest whole đồng, as a JavaScript number.
- Return `0` for an empty cart, without VAT or shipping.
- Throw `RangeError` when an item has a negative price or a quantity that is not a positive integer.

**Input scope:** Assume inputs follow the documented structure unless the README explicitly requires validation. Do not add extra validation rules for prices, options, or missing fields without approval.

## 3. Test Scenarios

### Shipping Boundaries

Use `vatRate = 0`, `freeShipFrom = 500000`, and `shipFee = 30000`.

| Test | Subtotal | Expected Total |
|---|---:|---:|
| Below threshold | 499999 | 529999 |
| Exactly at threshold | 500000 | 500000 |
| Above threshold | 500001 | 500001 |

These cases verify that the free-shipping threshold is inclusive.

### Empty Cart

- An empty items array must return the number `0`, even when VAT and shipping options are nonzero.
- Example: `items = []`, `vatRate = 0.08`, `freeShipFrom = 500000`, `shipFee = 30000` → `0`.

### Input Validation

- Negative price → `RangeError`.
- Quantity of `0` → `RangeError`.
- Negative quantity → `RangeError`.
- Fractional quantity → `RangeError`.
- Zero price with a positive integer quantity → valid input.

Quantity must be a positive integer, not merely a value that can be converted into one.

### Rounding

For a subtotal of `10000`, zero shipping, and different VAT rates:

| VAT Rate | Total Before Rounding | Expected Result |
|---|---:|---:|
| 0.00002 | 10000.2 | 10000 |
| 0.00005 | 10000.5 | 10001 |
| 0.00008 | 10000.8 | 10001 |

Additional example:

- Subtotal `15001`, `vatRate = 0.00004`, zero shipping → `15002`.

Round the final total rather than intermediate amounts.

The rounding examples assume conventional rounding for non-negative totals. The README does not explicitly prescribe a rounding algorithm.

### Worked Example from README

Given:

- Items: `2 × 180000` and `1 × 45000`.
- Subtotal: `405000`.
- VAT rate: `0.08`.
- Free-shipping threshold: `500000`.
- Shipping fee: `30000`.

Expected result:

`405000 + 32400 + 30000 = 467400`

## 4. Constraints and Workflow

- Use plain JavaScript without external dependencies.
- Follow the existing project conventions and `RULES.md`.
- Preserve the existing exported function interface.
- Do not introduce validation rules beyond the documented requirements without approval.
- First propose an implementation and testing plan. Wait for my approval before modifying any files.
- Only modify files relevant to the approved implementation and tests. Do not change unrelated files without approval.

## 5. Acceptance Criteria

- All specified behaviors are implemented.
- The function returns a JavaScript number for valid inputs.
- Invalid prices and quantities produce the required `RangeError`.
- The documented test scenarios are covered by automated tests.
- `npm test` passes.
- `npm run check` passes.
- I will review the code diff and verify the test results before accepting the implementation.