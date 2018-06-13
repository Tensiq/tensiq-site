import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Color from 'color';

import colors from './colors';
// export { default as elevations } from './elevation';

export const radiis = [0, 2, 4];

export const fontweights = {
  regular: '400',
  bold: '700',
};

export const fonts = {
  normal: {
    fontFamily: 'OpenSans',
    fontWeight: fontweights.regular,
  },
  bold: {
    fontFamily: 'OpenSans',
    fontWeight: fontweights.bold,
  },
  mono: {},
  tensiq: {
    fontFamily: 'Tensiq',
    fontWeight: fontweights.regular,
  },
  // fontFamily: 'Roboto' }
};

// 1em = 16px
const EM = 16;
// 352, 400, 640, 832, 1024
export const breakpoints = [22 * EM, 25 * EM, 40 * EM, 52 * EM, 64 * EM];

export const bp = value => breakpoints[Math.min(value, breakpoints.length)];

export const lineheights = [1, 1.35, 1.5, 1.75, 2];

export const lh = value =>
  lineheights[Math.min(value, lineheights.length)] * EM;

const GS = 8;
export const spaces = [
  0,
  1 / 2 * GS,
  1 * GS,
  2 * GS,
  3 * GS,
  4 * GS,
  5 * GS,
  6 * GS,
  7 * GS,
  8 * GS,
  9 * GS,
  10 * GS,
  11 * GS,
  12 * GS,
  13 * GS,
  14 * GS,
  15 * GS,
  16 * GS,
];
export const sp = value => spaces[value];

const FI = 2;
export const fontsizes = [
  EM - 2 * FI,
  EM - 1 * FI,
  EM,
  EM + 2 * FI,
  EM + 4 * FI,
  EM + 3 * FI,
  EM + 4 * FI,
  EM + 5 * FI,
  EM + 6 * FI,
];
export const fs = value => fontsizes[Math.min(value, fontsizes.length)];

export const shadow = Platform.select({
  default: {
    shadowColor: '#00000088',
    shadowRadius: 30,
  },
  android: {
    elevation: 6,
  },
});

const styles = {
  headerLinkOuterContainer: {
    normal: StyleSheet.create({
      0: {
        marginHorizontal: 2,
        justifyContent: 'center',
      },
    }),
  },
  footerLinkOuterContainer: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        marginHorizontal: 2,
      },
    }),
  },
  footerLinkContent: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
  footerLinkText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: 16,
        fontWeight: fontweights.bold,
        color: colors('text'),
        paddingHorizontal: sp(1),
        paddingVertical: sp(2),
      },
    }),
  },
  headerOuterContainer: {
    normal: StyleSheet.create({
      0: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          default: {
            paddingBottom: 10,
          },
          web: {
            paddingBottom: 8,
          },
        }),
      },
    }),
  },
  headerInnerContainer: {
    normal: StyleSheet.create({
      0: {
        width: '100%',
        maxWidth: 960,
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: sp(2),
      },
    }),
  },
  headerColor: {
    normal: StyleSheet.create({
      0: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: colors('header'),
        opacity: 0,
        ...shadow,
      },
    }),
  },
  footerOuterContainer: {
    normal: StyleSheet.create({
      0: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 35,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        ...Platform.select({
          default: {
            paddingBottom: 10,
          },
          web: {
            paddingBottom: 8,
          },
        }),
      },
    }),
  },
  footerColor: {
    normal: StyleSheet.create({
      0: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: colors('footer'),
        opacity: 1,
        ...shadow,
      },
    }),
  },
  footerInnerContainer: {
    normal: StyleSheet.create({
      0: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        maxWidth: 960,
        height: '100%',
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: sp(2),
      },
    }),
  },
  textHeader: {
    1: StyleSheet.create({
      0: {
        ...fonts.normal,
        marginTop: 6,
        fontWeight: fontweights.bold,
        fontSize: fs(4),
      },
    }),
    2: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontWeight: fontweights.bold,
        marginTop: sp(3),
        fontSize: fs(2),
      },
    }),
    3: StyleSheet.create({
      0: {
        ...fonts.normal,
        marginTop: 6,
        fontWeight: fontweights.bold,
        fontSize: fs(1),
      },
    }),
  },
  list: {
    normal: StyleSheet.create({
      0: { flex: 1 },
    }),
  },
  listItem: {
    normal: StyleSheet.create({
      0: { flex: 1 },
    }),
  },
  listParagraph: {
    normal: StyleSheet.create({
      0: { flex: 1, flexDirection: 'row', marginTop: sp(1) },
      1: { flex: 1, flexDirection: 'row', marginTop: sp(2) },
      2: { flex: 1, flexDirection: 'row', marginTop: sp(3) },
      3: { flex: 1, flexDirection: 'row', marginTop: sp(4) },
      4: { flex: 1, flexDirection: 'row', marginTop: sp(5) },
    }),
    text: StyleSheet.create({
      0: { ...fonts.normal, marginTop: sp(0) },
    }),
  },
  text: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: 14,
        paddingVertical: 4,
        lineHeight: lh(1),
      },
      1: {
        ...fonts.normal,
        fontSize: 14,
        paddingVertical: 4,
        lineHeight: lh(2),
      },
      2: {
        ...fonts.normal,
        fontSize: 14,
        paddingVertical: 4,
        lineHeight: lh(3),
      },
      3: {
        ...fonts.normal,
        fontSize: 14,
        paddingVertical: 4,
        lineHeight: lh(4),
      },
      4: {
        ...fonts.normal,
        fontSize: 14,
        paddingVertical: 4,
        lineHeight: lh(5),
      },
    }),
    em: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: 14,
        fontStyle: 'italic',
        paddingVertical: 4,
        lineHeight: lh(1),
      },
    }),
    strong: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: 14,
        fontWeight: fontweights.bold,
        paddingVertical: 4,
        lineHeight: lh(1),
      },
    }),
  },
  icon: {
    normal: StyleSheet.create({
      0: { fontSize: 18, color: 'purple' },
      1: { fontSize: 22, color: 'red' },
      2: { fontSize: 24, color: 'blue' },
    }),
  },
  paragraph: {
    normal: StyleSheet.create({
      0: { flex: 1, flexDirection: 'row', marginTop: sp(2) },
    }),
    text: StyleSheet.create({
      0: { ...fonts.normal, marginTop: sp(2) },
    }),
  },
  table: {
    normal: StyleSheet.create({
      0: {
        marginVertical: sp(2),
        alignSelf: 'center',
        width: '80%',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        overflow: 'hidden',
      },
    }),
    info: StyleSheet.create({
      0: {
        marginTop: sp(3),
        marginVertical: sp(2),
        alignSelf: 'center',
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: '#7743CE',
        borderBottomWidth: 1,
        borderBottomColor: '#7743CE',
        overflow: 'hidden',
      },
      3: {
        marginTop: sp(3),
        marginVertical: sp(2),
        alignSelf: 'center',
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: '#7743CE',
        borderBottomWidth: 1,
        borderBottomColor: '#7743CE',
        overflow: 'hidden',
      },
    }),
  },
  tableHeader: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
      },
    }),
    info: StyleSheet.create({
      0: {
        flex: 1,
      },
    }),
  },
  tableHeaderCell: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        paddingVertical: sp(1),
        paddingHorizontal: sp(2),
        backgroundColor: 'green',
      },
    }),
    info: StyleSheet.create({
      0: {
        flex: 1,
        paddingVertical: sp(1),
        paddingHorizontal: sp(2),
        backgroundColor: 'white',
      },
    }),
  },
  tableHeaderText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontWeight: fontweights.bold,
      },
    }),
  },
  tableBodyText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontWeight: 'normal',
      },
    }),
  },
  tableRow: {
    normal: StyleSheet.create({
      0: {
        //    borderBottomWidth: 1,
        //    borderColor: '#000000',
        flexDirection: 'row',
      },
    }),
    info: props => {
      const { rowindex, rowcount } = props;
      const row = rowindex + 1;
      if (row && rowcount) {
        return StyleSheet.create({
          0: {
            flexDirection: 'row',
            backgroundColor: Color('#7743CE').lighten(row / rowcount * 0.7),
          },
        });
      }
      return tableRow.normal;
    },
  },
  tableBody: {
    normal: StyleSheet.create({
      0: {},
    }),
  },
  tableBodyCell: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        paddingVertical: sp(1),
        paddingHorizontal: sp(2),
      },
    }),
  },
  ytTitle: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        paddingTop: 5,
        fontWeight: fontweights.bold,
        textAlign: 'center',
      },
    }),
  },
  ytOuterContainer: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        marginVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
      },
    }),
  },
  ytInnerContainer: {
    normal: StyleSheet.create({
      0: {
        width: '80%',
      },
    }),
  },
  aspectRatio: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '28.13%',
        paddingBottom: '28.13%',
      },
    }),
  },
};

const theme = {
  breakpoints,
  bp,
  spaces,
  sp,
  lineheights,
  lh,
  fontsizes,
  fs,
  styles,
  fonts,
  fontweights,
  colors,
};

export default theme;
