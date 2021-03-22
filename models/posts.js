export default{
    posts: [

    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({ id: genereteID(),title, description})
    },

    //Adicionar depois
    deletePost(id){

    }
    
}

function genereteID(){
    return Math.random().toString(36).substring(2, 9)
}