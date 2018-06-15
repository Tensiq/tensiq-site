import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import color, { gradient } from './colors';
// export { default as elevations } from './elevation';

export const radiis = [0, 2, 4, 8, 16];

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

export const headerHeightMax = 120;
export const headerHeightMin = 50;

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

export const fontsizes = [
  0.75 * EM,
  0.875 * EM,
  1.0 * EM,
  1.25 * EM,
  1.5 * EM,
  1.75 * EM,
  2.0 * EM,
  2.5 * EM,
  3.0 * EM,
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

const rawStyles = {
  contentBlock: {
    normal: {
      width: '100%',
      paddingTop: sp(1),
      paddingBottom: sp(3),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  contentBlockInnerContainer: {
    normal: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: sp(3),
      paddingHorizontal: sp(3),
    },
    tight: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: sp(2),
      paddingHorizontal: sp(2),
    },
    slim: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: sp(1),
      paddingHorizontal: sp(1),
    },
  },
};

const props = {
  rocketIconLeft: {
    display: ['none', null, 'flex'],
  },
  rocketIconCenter: {
    display: ['flex', null, 'none'],
  },
  contentColumn3: {
    width: [1, 1, 1 / 2, 1 / 3, 1 / 3],
    pr: [0, 0, 3, 3, 3],
    mb: [3, 3, 0],
  },
  headerInnerContainer: {
    justifyContent: ['center', null, 'space-between'],
  },
  contentBlockBoxLeftText: {
    width: [1, 1, 1, 1 / 2, 1 / 2],
    pb: [6, 6, 6, 0, 0],
    alignItems: ['center', null, null, 'flex-end'],
  },
  contentBlockBoxLeftImage: {
    width: [1, 1, 1, 1 / 2, 1 / 2],
    pb: [6, 6, 6, 0, 0],
    alignItems: ['center'],
  },
  contentBlockBoxRightText: {
    width: [1, 1, 1, 1 / 2, 1 / 2],
    pt: [6, 6, 6, 0, 0],
    alignItems: ['center', null, null, 'flex-start'],
  },
  contentBlockBoxRightImage: {
    width: [1, 1, 1, 1 / 2, 1 / 2],
    pt: [6, 6, 6, 0, 0],
    alignItems: ['center'],
  },
};

const styles = {
  cardTitle: {
    normal: StyleSheet.create({
      0: { height: 70 },
    }),
  },
  cardTextBody: {
    normal: StyleSheet.create({
      0: {
        paddingHorizontal: sp(5),
      },
    }),
  },
  cardGoIcon: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: sp(3),
        paddingHorizontal: sp(3),
      },
    }),
  },
  githubIcon: {
    normal: StyleSheet.create({
      0: {
        fontSize: fs(2),
        color: color('lightText'),
      },
    }),
  },
  goIcon: {
    normal: StyleSheet.create({
      0: {
        fontSize: fs(7),
        color: color('darkText'),
      },
    }),
  },
  aboutIcon: {
    normal: StyleSheet.create({
      0: {
        fontSize: 70,
        color: color('darkText'),
      },
    }),
  },
  teaserIcon: {
    normal: StyleSheet.create({
      0: {
        fontSize: 140,
        color: color('lightText'),
      },
      1: {
        fontSize: 180,
        color: color('lightText'),
      },
      4: {
        fontSize: 140,
        color: color('lightText'),
      },
    }),
  },
  contentColumn3: {
    normal: StyleSheet.create({
      0: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
    }),
  },
  contentCard3: {
    normal: StyleSheet.create({
      0: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        maxWidth: 280,
      },
    }),
  },
  contentColumnTitle: {
    normal: StyleSheet.create({
      2: { height: 70 },
    }),
  },
  teaserBlock: {
    normal: StyleSheet.create({ 0: {} }),
  },
  teaserTitleText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.bold,
        fontSize: fs(5),
        color: color('lightText'),
        paddingHorizontal: sp(0),
        paddingVertical: sp(0),
      },
      1: {
        ...fonts.bold,
        fontSize: fs(7),
        color: color('lightText'),
        paddingHorizontal: sp(0),
        paddingVertical: sp(0),
      },
    }),
  },
  teaserText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: fs(3),
        color: color('lightText'),
        paddingHorizontal: sp(0),
        paddingVertical: sp(0),
      },
    }),
  },
  teaserButtonContainer: {
    normal: StyleSheet.create({
      0: {
        ...shadow,
        marginTop: sp(3),
        width: 21 * sp(1),
        height: 5 * sp(1),
        overflow: 'hidden',
        borderRadius: radiis[2],
      },
    }),
  },
  teaserButtonText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: fs(3),
        fontWeight: fontweights.bold,
        color: color('darkText'),
        paddingRight: sp(0),
      },
    }),
  },
  teaserButtonContent: { normal: StyleSheet.create({ 0: { flex: 1 } }) },
  contentBlock: {
    normal: StyleSheet.create({
      0: rawStyles.contentBlock.normal,
    }),
    first: StyleSheet.create({
      0: {
        ...rawStyles.contentBlock.normal,
        paddingTop: headerHeightMax,
      },
    }),
  },
  contentBlockInnerContainer: {
    normal: {
      0: {
        ...rawStyles.contentBlockInnerContainer.slim,
      },
      1: {
        ...rawStyles.contentBlockInnerContainer.tight,
      },
      2: {
        ...rawStyles.contentBlockInnerContainer.normal,
      },
    },
    leftCentered: {
      0: {
        ...rawStyles.contentBlockInnerContainer.normal,
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    },
    rightCentered: {
      0: {
        ...rawStyles.contentBlockInnerContainer.normal,
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
    },
    allCentered: {
      0: {
        flex: 1,
        ...rawStyles.contentBlockInnerContainer.normal,
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
  contentBlockOuterContainer: {
    normal: {
      0: {
        width: '100%',
        maxWidth: 960,
        flexWrap: 'wrap',
        flexDirection: 'row',
      },
    },
  },
  headerLogoLinkOuterContainer: {
    normal: StyleSheet.create({
      0: {
        height: 50,
        marginHorizontal: sp(1),
        justifyContent: 'center',
      },
    }),
  },
  headerLinkOuterContainer: {
    normal: StyleSheet.create({
      0: {
        width: 100,
        height: 50,
        justifyContent: 'center',
      },
    }),
  },
  headerLogoContent: {
    normal: StyleSheet.create({
      0: {
        ...Platform.select({
          default: {
            paddingBottom: 0,
          },
          web: {
            paddingHorizontal: sp(1),
            paddingTop: sp(0),
            paddingBottom: sp(1),
          },
        }),
      },
    }),
  },
  headerLogoIcon: {
    normal: StyleSheet.create({
      0: {
        ...fonts.tensiq,
        paddingBottom: sp(0),
        fontSize: fs(8),
        color: color('lightText'),
      },
    }),
  },
  headerLogoText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: fs(6),
        fontWeight: fontweights.bold,
        color: color('lightText'),
        paddingRight: sp(0),
      },
    }),
  },
  headerMenuContainer: {
    normal: StyleSheet.create({
      0: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginLeft: sp(3),
        marginRight: sp(4),
      },
    }),
  },
  headerLinkText: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: fs(3),
        color: '#f5f5f5ff',
        paddingHorizontal: sp(0),
        paddingVertical: sp(0),
      },
    }),
  },
  footerLinkOuterContainer: {
    normal: StyleSheet.create({
      0: {
        flex: 1,
        marginHorizontal: 0,
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
        fontSize: fs(3),
        fontWeight: fontweights.normal,
        color: color('lightText'),
        paddingHorizontal: sp(0),
        paddingVertical: sp(1),
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
            paddingBottom: sp(0),
          },
          web: {
            paddingBottom: 0,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
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
        backgroundColor: color('header'),
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
            paddingBottom: sp(0),
          },
          web: {
            paddingBottom: sp(0),
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
        backgroundColor: color('footer'),
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
        paddingHorizontal: sp(1),
      },
    }),
  },
  textHeader: {
    1: props => {
      const { light, centered } = props;
      const textColor = light ? 'lightText' : 'darkText';
      return StyleSheet.create({
        0: {
          textAlign: centered ? 'center' : 'left',
          color: color(textColor).string(),
          ...fonts.normal,
          marginTop: sp(0),
          fontWeight: fontweights.bold,
          fontSize: fs(7),
        },
      });
    },
    2: props => {
      const { light, centered } = props;
      const textColor = light ? 'lightText' : 'darkText';
      return StyleSheet.create({
        0: {
          textAlign: centered ? 'center' : 'left',
          color: color(textColor).string(),
          fontWeight: fontweights.bold,
          marginTop: sp(2),
          fontSize: fs(4),
        },
      });
    },
    3: props => {
      const { light, centered } = props;
      const textColor = light ? 'lightText' : 'darkText';
      return StyleSheet.create({
        0: {
          textAlign: centered ? 'center' : 'left',
          color: color(textColor).string(),
          marginTop: 6,
          fontWeight: fontweights.bold,
          fontSize: fs(3),
        },
      });
    },
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
      0: { ...fonts.normal, marginTop: 0 },
    }),
  },
  text: {
    normal: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontSize: fs(2),
        paddingVertical: 4,
        lineHeight: lh(3),
      },
    }),
    em: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontStyle: 'italic',
        fontSize: fs(2),
        paddingVertical: 4,
        lineHeight: lh(3),
      },
    }),
    strong: StyleSheet.create({
      0: {
        ...fonts.normal,
        fontWeight: fontweights.bold,
        fontSize: fs(2),
        paddingVertical: 4,
        lineHeight: lh(3),
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
  props,
  fonts,
  fontweights,
  color,
  gradient,
  headerHeightMax,
  headerHeightMin,
};

export default theme;
