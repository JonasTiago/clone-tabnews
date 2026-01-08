function status(request, response){
    response.status(200).send({"chave": "acima da media"});
}

export default status;