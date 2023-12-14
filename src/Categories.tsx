interface Cat {
  category: string;
}

const Categories = (props: Cat): React.JSX.Element => {
  return <p>category && {props.category}</p>;
};

export default Categories;
