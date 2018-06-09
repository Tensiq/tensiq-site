import { createResponsiveStyleSheets } from './theme'

const elementAttributes = {
  m: [1, 2, 3, 4],
  p: [1, 2, , 3],
  w: [4, 4, 5, 6, 7],
  f: [1, , 2],
}

const expectedStyleSheets = {
  0: {
    m: 1,
    p: 1,
    w: 4,
    f: 1,
  },
  1: {
    m: 2,
    p: 2,
    w: 4,
    f: 1,
  },
  2: {
    m: 3,
    p: 2,
    w: 5,
    f: 2,
  },
  3: {
    m: 4,
    p: 3,
    w: 6,
    f: 2,
  },
  4: {
    m: 4,
    p: 3,
    w: 7,
    f: 2,
  },
}

test('create responsive stylesheets', () => {
  expect(createResponsiveStyleSheets(elementAttributes)).toEqual(
    expect.objectContaining(expectedStyleSheets)
  )
})
