import React, { useEffect, useState } from 'react';
import { URL } from '../utils/constants';
import { FetchCategory } from '../utils/interfaces';
import Card from '../components/Card';

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

  const page: React.JSX.Element[] = Object.entries(data).map(
    ([productId, element]) => {
      return <Card key={productId} data={element} productId={productId} />;
    }
  );

  return <>{page}</>;
};

export default Categories;
