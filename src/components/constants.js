export default {
  defaultPrimaryColor: 'rgba(0, 0, 0, 0.4)',
  darkPrimaryColor: 'rgba(0, 0, 0, 0.6)',
  almostBlack: 'rgba(0, 0, 0, 0.9)',
  colorSuccess: '#66BB6A',
  colorDanger:  '#ff4c4c',
  colorBlue:    '#6BF',
  colorMuted:   '#727272',
  colorYelor:   '#FFAB40',
  colorGolden:  '#e5c100',
  colorBlueMuted: 'rgba(102, 187, 255, 0.3)',
  colorYelorMuted: 'rgba(255, 171, 64, 0.3)',
  // TODO convert this properly
  colorMutedLight:   'color(var(--colorMuted) lightness(70%))',
  primaryLinkColor: '#6BF',
  textColorPrimary:     '#F5F5F5',
  primaryTextColor:     '#F5F5F5',
  textColorSecondary:   '#212020',
  secondaryTextColor:   '#212020',
  primarySurfaceColor: 'rgb(46, 47, 64)',
  secondarySurfaceColor: 'rgb(39, 39, 58)',
  tableHeaderSurfaceColor: 'rgba(0, 0, 0, .3)',
  tableRowOddSurfaceColor: 'rgba(255, 255, 255, .019)',
  tableRowEvenSurfaceColor: 'rgba(0, 0, 0, .019)',
  sliderTicksColor: '#757575',
  sliderTicksColorActive: '#337AB7',
  dividerColor: 'rgb(52, 50, 50)',

  fontFamily: `
      -apple-system, BlinkMacSystemFont,
      "Segoe UI",
      Roboto, "Droid Sans",
      Ubuntu, Cantarell,
      "Fira Sans",
      Helvetica, Arial, sans-serif`,

  fontWeightLight:  '300',
  fontWeightNormal: '400',
  fontWeightMedium: '500',
  fontSizeCommon: '16px',
  fontSizeMedium: '14px',
  fontSizeSmall:  '12px',
  fontSizeTiny:   '10px',

  navDrawerWidth: '256px',
  normalTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  linearTransition: 'all 300ms linear',
  // TODO convert these
  /*
  black4: var(--defaultPrimaryColor);
  black6: var(--darkPrimaryColor);
  black9: var(--almostBlack);
  red:      var(--colorDanger);
  green:    var(--colorSuccess);
  blue:     var(--colorBlue);
  golden:   var(--colorGolden);
  gray:      var(--colorMuted);
  grey:      var(--colorMuted);
  lightGray: var(--colorMutedLight);
  yelor:           var(--colorYelor);
  yellowOrange:    var(--colorYelor);
  blueMuted:  var(--colorBlueMuted);
  yelorMuted: var(--colorYelorMuted);
  textColorPrimary:    var(--textColorPrimary);
  primaryTextColor:    var(--textColorPrimary);
  textColorSecondary:  var(--textColorSecondary);
  secondaryTextColor:  var(--textColorSecondary);
  dividerColor: var(--dividerColor);
  fontFamily: var(--fontFamily);
  fontWeightLight: var(--fontWeightLight);
  fontWeightNormal: var(--fontWeightNormal);
  fontWeightMedium: var(--fontWeightMedium);
  fontSizeCommon: var(--fontSizeCommon);
  fontSizeMedium: var(--fontSizeMedium);
  fontSizeSmall: var(--fontSizeSmall);
  primarySurfaceColor: var(--primarySurfaceColor);
  secondarySurfaceColor: var(--secondarySurfaceColor);
  textSuccess: var(--colorSuccess)
  textDanger: var(--colorDanger)
  textMuted: var(--colorMuted)
  */
};
/*
@custom-media --tiny (width < 400px);
@custom-media --small (width < 660px);
@custom-media --medium (width < 900px);
*/

/* TODO move these somewhere else
.imgSmall {
  height: 30px;
}

.iconButton {
  margin: 0 5px 4px;

  & svg {
    width: auto !important;
    height: 16px;
    vertical-align: middle;
    fill: var(--primaryTextColor);
    margin: 0 6px;
    transition: var(--normalTransition);
  }

  &:hover svg {
    opacity: 0.6;
  }
}

.overrideHelpIcon {
  &[data-tip="true"] {
    cursor: pointer;
  }
}

.tooltipContainer {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  margin: -8px -12px;

  & > * {
    margin: 0 5px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  & > div {
    margin: 0;
    color: var(--colorMutedLight);
  }
}
*/