import supabase from "../supabase";

export const getDashboardCourses = async () => {
    const {data, error} = await supabase.from('courses')
        .select(`
            id, 
            title, 
            description, 
            grade, 
            lessons(count), 
            created_at
            `);
        
        if(error){
            throw new Error(error.message);
        }

        return data;
}

export const getCourseLessons = async (courseId: string) => {
    const {data, error} = await supabase.from('courses')
        .select(`
            title,
            description,
            lessons(
                id,
                title
            )
            `).eq("id", courseId)
        
        if(error){
            throw new Error(error.message);
        }

        return data;
}