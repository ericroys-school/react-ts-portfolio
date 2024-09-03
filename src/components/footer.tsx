import { footerLinks } from "../data/navMetaData"
import { StyledNav } from "./navbar"


export const Footer = ()=> {

    return (
        <footer className="fixed bottom-0 w-full bg-redish text-center h-24 content-center">
            <div className="flex justify-center">
            <StyledNav links={footerLinks}/>
            </div>
        </footer>
    ) 
}