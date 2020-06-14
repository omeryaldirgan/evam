export const formReducer=(state,action)=>{
    switch(action.type){
       case 'ADD_FORM':
           return[...state,{
             name:action.form.name,
             description:action.form.description,
             createdAt:action.form.createdAt,
             fields:[
                 {
                     name:action.form.fields1,
                     dataType:action.form.fields1Type,
                     required:action.form.fields1Required
                 },
                 {
                    name:action.form.fields2,
                    dataType:action.form.fields2Type,
                    required:action.form.fields2Required
                 },
                 {
                    name:action.form.fields3,
                    dataType:action.form.fields3Type,
                    required:action.form.fields3Required
                 }
             ]
           }]
          case 'SEARCH':
           const {value}=action
           const post = state.filter(item =>
             {
              return item.name.toLowerCase().includes(value.toLowerCase())
             } 
          );
          console.log(post)
         case 'REMOVE_FORM':
           return state.filter(form => form.name !== action.name);
        default:
            return state;
    }
}