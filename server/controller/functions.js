let post = []
module.exports={
    read: (req, res) =>{
        res.status(200).send(post)
    },
    create: (req, res) =>{
        let {name, price, imageUrl} = req.body

        newPost={
            name: name,
            price: +price,
            imageUrl: imageUrl
        }
        post.push(newPost)
        res.status(200).send(post)
    },
    delete: (req, res) => {
        const deletePost = req.params.name
        postIndex = post.findIndex((post)=>{post.name == deletePost})
        post.splice(postIndex, 1)
        res.status(200).send(post)
    }
}