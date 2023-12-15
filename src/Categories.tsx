import React, { useEffect, useState } from 'react';
import { URL } from './constants';
import { Category, CategoryData, FetchCategory } from './interfaces';

const Categories = ({ category }: { category: string }): React.JSX.Element => {
  const url = `${URL.category}/${category}`;
  const [data, setData] = useState<{} | FetchCategory>({});

  useEffect(() => {
    fetch(url)
      .then((res: Response): Promise<FetchCategory> => res.json())
      .then((resData: FetchCategory): void => {
        setData(resData);
      });
  }, []);

  const Card = ({ data, productId }: CategoryData) => {
    const [foreImage, backImage] = data.images;
    return (
      <>
        <img src={foreImage} alt="" />
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
