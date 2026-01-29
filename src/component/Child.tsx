type Props = {
  name: string;
};
export const Child: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <div>My name is {name}!</div>
    </div>
  );
};
