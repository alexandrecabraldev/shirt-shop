import { relative } from "path"
import { globalTheme } from "../styles/globalTheme"
import { transform } from "typescript"

export const ContainerAllAhirts = globalTheme.styled('div',{
    display:'flex',
    flexDirection:'row',
    gap:'3rem',
    
})

export const Description = globalTheme.styled('div',{
    display:'flex',
    padding:'2rem',
    backgroundColor:'$gray400',
    borderRadius:'6px',
    opacity:'0.8',
    right:4,
    left:4,
    bottom:4,

    fontSize:'1.25rem',
    fontWeight:700,

    transform:'translateY(100px)',
    transition: 'transform 0.2s ease-in-out',

    span:{
        marginLeft:'auto',
        color:'$green100',
        fontWeight:700,

    },

    position:'absolute',
})

export const ShirtContainer = globalTheme.styled('div',{
    padding:'5.5rem',
    borderRadius: '8px',
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    boxShadow: '0px 0px 48px 0px rgba(0, 0, 0, 0.90)',

    position:'relative',
    cursor:'pointer',
    overflow:'hidden',

    [`&:hover ${Description}`]:{
        transform:'translateY(0)',
    },

})
