import React, { useEffect, useState } from 'react';
import { URL } from './constants';

interface Cat {
  category: string;
}

const Categories = (props: Cat): React.JSX.Element => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${URL.category}/men`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      });
  }, []);

  const Card = (props: any) => {
    return <p>props</p>;
  };

  const page: React.JSX.Element[] = data.map((element, index) => {
    return <Card key={index} data={element} />;
  });

  return <>{page}</>;
};

export default Categories;
