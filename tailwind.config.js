const defaultTheme = require( "tailwindcss/defaultTheme" )
const xs = "360px"

module.exports = {
  mode: 'jit',
  content : [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}" ,
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}" ,
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}" ,
  ] ,
  theme   : {
    fontFamily: {
      iranSansLight: ['var(--font-iranSansLight)'],
      iranSansBold: ['var(--font-iranSansBold)'],
      iranSans: ['var(--font-iranSans)']
    } ,
    extend     : {
      
      colors          : {
        "primaryColorLight" : "#8696a0" ,
        "primaryColor" : "#202c33" ,
        "primaryColorDark"      : "#111b21" ,
        "primaryColorDarker"      : "#0b141a" ,
        "secondaryColor"    : "#1f8e81" ,
        "gray100"           : "#EEE" ,
        "gray150"           : "#D4D2D2" ,
        "gray200"           : "#939393" ,
        "gray250"           : "#707070" ,
        "gray300"           : "#515151" ,
        "gray400"           : "#414141" ,
        "successLight"      : "#E6FBE5" ,
        "success"           : "#09d261" ,
        "warning"           : "#f3c41e" ,
        "danger"           : "#c1000b" ,
        "infoLight"         : "#ECF4FF" ,
        "info"              : "#37c9fd" ,
      } ,
      backgroundImage : {} ,
      boxShadow       : {
        "primaryShadow" : "0px 3px 10px #00000" ,
      } ,
      
    } ,
    screens    : {
      "xs" : xs ,
      ...defaultTheme.screens ,
    } ,
  } ,
  plugins : [] ,
}

const { sm , md , lg , xl } = defaultTheme.screens
const xxl = defaultTheme.screens[ "2xl" ]

module.exports.xs = xs.replace( "px" , "" ) * 1;
module.exports.sm = sm.replace( "px" , "" ) * 1;
module.exports.md = md.replace( "px" , "" ) * 1;
module.exports.lg = lg.replace( "px" , "" ) * 1;
module.exports.xl = xl.replace( "px" , "" ) * 1;
module.exports.xxl = xxl.replace( "px" , "" ) * 1;
module.exports.breakpoints = {
  "xs" : xs ,
  ...defaultTheme.screens ,
}