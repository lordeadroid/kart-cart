import React, { useEffect, useState } from 'react';
import { URL } from './constants';
import { Category, CategoryData} from './interfaces';

const Categories = ({ category }: { category: string }): React.JSX.Element => {
  const [data, setData] = useState<{} | Category>({});
  useEffect(() => {
    const url = `${URL.category}/${category}`;

    fetch(url)
      .then((res: Response): Promise<Category> => res.json())
      .then((resData: Category): void => {
        setData(resData);
      });
  }, []);

  const Card = ({ data, productId }: CategoryData) => {
    console.log(data.images[0]);
    return (
      <>
        <img src={data.images[0]} alt="" />
        <p>{productId}</p>
      </>
    );
  };

  const page: React.JSX.Element[] = Object.entries(data).map(
    ([productId, element]: [string, Category], index: number) => {
      return <Card key={index} data={element} productId={productId} />;
    }
  );

  return <>{page}</>;
};

export default Categories;
