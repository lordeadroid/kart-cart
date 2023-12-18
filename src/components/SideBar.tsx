import { ChangeEvent } from 'react';

export const Sidebar = (): React.JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    console.log(event.target.value);
  };

  return (
    <div className="w-1/4 flex flex-col h-fit pl-10 text-xl">
      <label htmlFor="sort-button" className="text-3xl mb-2">
        Sort
      </label>
      <select className="w-60" onChange={handleChange}>
        <option value="">--</option>
        <option value="asc">Low To High</option>
        <option value="des">High To Low</option>
      </select>
    </div>
  );
};
