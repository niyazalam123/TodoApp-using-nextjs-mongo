/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains:["via.placeholder.com","www.braintastic.in"]
    },
    redirects : async()=>{
        return[
            {
                source:"/",
                destination:"/todolist",
                permanent:false
            },
        ]
    }
}

module.exports = nextConfig
