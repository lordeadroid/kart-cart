import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
});

export const Sidebar = (): React.JSX.Element => {
  return (
    <div className="sidebar">
      <input type="radio" name="Low To High" id="" />
      <input type="radio" name="High To Low" id="" />
    </div>
  );
};
