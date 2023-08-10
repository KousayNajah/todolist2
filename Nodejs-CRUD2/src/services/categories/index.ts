import  { executeSQLQuery } from "../../database";

export const getListToDo = async () => {
    const query = "SELECT * FROM public.todolist";
    const result = await executeSQLQuery(query);
    return result.rows;
};

export const addToDo=async (description:any)=>{
        
        const query=`INSERT INTO public.todolist(description) VALUES ('${description.description}') returning id`
        const result = await executeSQLQuery(query);
        return result;
};

export const deleteTodo = async(id:any)=>{    
    const query = `DELETE  FROM public.todolist WHERE id='${id.id}' returning id`
    const result= await executeSQLQuery(query);
    return result ;}


export const EditTodo = async(id: any,description:any)=>{        
    const query = `UPDATE public.todolist SET description='${description}' WHERE id='${id}' returning description`
    const result= await executeSQLQuery(query);
    return result ;}
    

export const addUser=async (username:any,password:any)=>{
        
        const query=`INSERT INTO public.myuser(username,password) VALUES ('${username}','${password}') returning username`
        const result = await executeSQLQuery(query);
        return result;
};

export const getUser = async () => {
    const query = "SELECT * FROM public.myuser";
    const result = await executeSQLQuery(query);
    return result.rows;
};