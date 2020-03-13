export interface IStudent{
  id:number;
  name:string;
  age:number;
  subject:string;
  education:string;
  professor:IProfessor;
}

export interface IProfessor{
  id:number;
  name:string;
  faculty:string;
  subject:string;
}



