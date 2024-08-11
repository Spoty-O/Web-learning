interface ITaskAttributes {
  id: string;
  name: string;
  text: string;
  userId: number;
}

interface ITaskCreationAttributes {
  id?: string;
  name: string;
  text: string;
  userId: number;
}

export { ITaskAttributes, ITaskCreationAttributes };
