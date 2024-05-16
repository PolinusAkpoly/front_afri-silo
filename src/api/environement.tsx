export let request: string

if(process.env.NODE_ENV === "production"){
    request = "https://api.afc-tours.com/"
}else{
    request = "http://localhost:58964/"
}