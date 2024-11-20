interface Owner{
    account_id:number;
    reputation:number;
    user_id:number;
    user_type:string;
    profile_image:string;
    display_name:string;
    link:string;
}


export interface Question{
    question_id:number;
    title: string;
    view_count: number;
    answer_count: number;
    score: number;
    creation_date: number;
    tags:string[];
    is_answered:boolean;
    last_edit_date:number;
    last_activity_date:number;
    owner:Owner;

}