import { footerLinks } from "../data/navMetaData"
import { StyledNav } from "./navbar"


export const Footer = ()=> {

    return (
        <footer className=" bg-redish text-center h-25">
            <div className="flex justify-center">
            <StyledNav links={footerLinks}/>
            </div>
        </footer>
    ) 
}