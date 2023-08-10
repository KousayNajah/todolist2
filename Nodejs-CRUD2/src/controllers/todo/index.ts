import { statusCode } from "../../types";
import { addToDo, deleteTodo, getListToDo, EditTodo, addUser, getUser} from "../../services/categories";

import { Request, Response } from "express";

export const getToDoController = async (req: Request, res: Response) => {

  try {
    const result = await getListToDo();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};


export const addToDoController = async (req: Request, res: Response) => {

  try {
    const description = req.body
    const result= await addToDo(description)
    if (result !== undefined) {
      return res
          .status(statusCode.success)
          .json({ error: false, message: "successfully add" });
  } else {
      return res
          .status(statusCode.error)
          .json({ error: true, message: "failed add" });
  }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

export const deleteToDoController = async (req: Request, res: Response) => {
  try {
    const id = req.body    
    const result= await deleteTodo(id)
    if (result !== undefined) {
      return res
          .status(statusCode.success)
          .json({ error: false, message: "successfully deleted" });
  } else {
      return res
          .status(statusCode.error)
          .json({ error: true, message: "failed delete" });
  }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};



export const updateToDoController = async (req: Request, res: Response) => {
  try {
   const {id,description}=req.body
    const result= await EditTodo(id,description)
    if (result !== undefined) {
      return res
          .status(statusCode.success)
          .json({ error: false, message: "successfully update" });
  } else {
      return res
          .status(statusCode.error)
          .json({ error: true, message: "failed update" });
  }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
  
};

export const addUserController = async (req: Request, res: Response) => {
  try {
   const {username,password}=req.body
    const result= await addUser(username,password)
    if (result !== undefined) {
      return res
          .status(statusCode.success)
          .json({ error: false, message: "successfully add"});
  } else {
      return res
          .status(statusCode.error)
          .json({ error: true, message: "failed add" });
  }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
  
};

export const getUserController = async (req: Request, res: Response) => {
  try {
    const username=req.body
    const result = await getUser()
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};


