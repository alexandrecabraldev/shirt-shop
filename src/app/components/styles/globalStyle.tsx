import { globalTheme } from "./globalTheme";

export const globalStyles = globalTheme.globalCss({
    '*':{
        margin:0,
        padding:0,
        boxSizing:'border-box',
    },
    
    body:{
        backgroundColor:'$dark',
        color:'$gray100',
    },
});