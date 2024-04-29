const Contact=()=>{
    return(
        <div>
            <div className="flex  justify-between px-10 py-4 bg-slate-900 text-slate-400">
                <div className="flex flex-col items-center gap-2">
                    <span className="mb-4 text-2xl font-semibold">COMPANY</span>
                    <a href="">About</a>
                    <a href="">Careers</a>
                    <a href="">Brand Centre</a>
                    <a href="">blog</a>
                </div>
                <div className="flex flex-col items-center gap-2">
                <span className="mb-4 text-2xl font-semibold">HELP CENTER</span>
                    <a href="">Discord server</a>
                    <a href="">Twitter</a>
                    <a href="">Facebook</a>
                    
                </div>
                <div className="flex flex-col items-center gap-2">
                <span className="mb-4 text-2xl font-semibold">LEGAL</span>
                    <a href="">Privay Policy</a>
                    <a href="">Licensing</a>
                    <a href="">Terms & condition</a>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="mb-4 text-2xl font-semibold">DOWNLOAD</span>
                    <a href="">IOS</a>
                    <a href="">Android</a>
                    <a href="">Windows</a>
                    <a href="">MacOS</a></div>
            </div>
            <div className="bg-slate-800">
                <span className="px-10 text-slate-300">@ 2023 Online Book Store</span>
            </div>
        </div>
    )
}
export default Contact;