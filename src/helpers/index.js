import supabase from "./supabase.js";

const {
    VITE_ROUTE_HOME: urlHome
} = import.meta.env;

const getAllData = async (tableName = "Comments") => {
    try {
        const {data, error} = await supabase.from(tableName).select();
        if (error) throw new Error(error);
        return data;
    } catch (err) {
        console.log(err);
    }
}

const getUserData = async () => {
    try{
        let res = await supabase.auth.getUser();
        console.log(res);
        const response = await supabase.from("likedPost").eq('userId', userId);
        console.log(response);
    }catch(err) {
        console.error(err);
    }
}

const signIn = async (email, route = urlHome) => {
    try {
        const {data, error} = await supabase.auth.signInWithOtp({
            email
        })
        if (error) throw new Error(error);
        let res = await supabase.auth.getUser();
        console.log(res);
        window.location.href = route;
        return data;
    }catch(err) {
        console.log(err);
    }
} 

const insert = async (table = "Comments", values) => {
    try {
        const {data, error} = await supabase.from(table).insert(values);
        if(error) throw new Error(error);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export {
    getAllData,
    insert,
    signIn,
    getUserData
} ;