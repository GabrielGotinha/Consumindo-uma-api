
import Header from "../../components/header/header"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'

import './post.css'

const validationPost = yup.object().shape({
    title:  yup.string().required().max(40, "O titulo Precisa ter menos de 40 Caracteres"),
    description: yup.string().required().max(150, "A descriçao precisa ter menos de 150 caracteres"),
    content: yup.string().required().max(500, "O Conteudo precisa ter menos de 500 caracteres")
})

function Post(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
            resolver: yupResolver(validationPost)
      })

    const addPost = data => axios.post()

    return (
    <div>
       <Header/>
        
        <main>
            <div className="card-post">

                <h1>Create Post</h1>
                <div className="line-post"></div>
                <div className="card-body-post">
                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="fields">
                            <label>Title</label>
                            <input type="text" name="title" {...register("title")}/>
                            <p className="error-message">{errors.title?.message}</p>
                        </div>
                        <div className="fields" >
                            <label>Description</label>
                            <input type="text" name="description" {...register("description")}/>
                            <p className="error-message">{errors.description?.message}</p>
                        </div>
                        <div className="fields">
                            <label>Content</label>
                            <textarea type="text" name="content" {...register("content")}></textarea>
                            <p className="error-message">{errors.content?.message}</p>
                        </div>
                        <div className="btn-post">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>

            </div>
        </main>

    </div>
    )

}

export default Post