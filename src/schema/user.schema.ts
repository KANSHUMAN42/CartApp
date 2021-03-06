import {object , string, TypeOf} from "zod" ; 


export const createUserSchema = object({
    body : object ({
        name : string({
            required_error :"Name is required " 
        }),
        password : string({
            required_error : "Password is required " 
        }).min(6,"Password too short -min req 6 length"),

        passwordConfirmation :string({
            required_error : "passwordConfirmation is required" 
        }) ,
        email: string({
            required_error: "Email is required" , 
        }).email("Not a valid email") ,
    }).refine((data) => data.password == data.passwordConfirmation,{
        message : "password didnt match" , 
        path : ["passwordConfirmation"] ,
    })

});

export type createUserInput  = TypeOf<typeof createUserSchema>;