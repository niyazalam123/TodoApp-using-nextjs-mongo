"use client"
export default function LoadingStyle() {
    // Or a custom loading skeleton component
    return (
        <>
            <style jsx>{`
        .paren1{
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background:rgba(0,0,0,.8);
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:9999;
        }
        .parent2{
            max-width:500px;
            height:300px;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .loader {
            width: 60px;
            height: 60px;
            border: 5px solid #FFF;
            border-bottom-color: #FF3D00;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
            }
        
            @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
            } 
        `}</style>
            <div className="paren1">
                <div className="parent2">
                    <span className="loader"></span>
                </div>
            </div>
        </>
    )
}