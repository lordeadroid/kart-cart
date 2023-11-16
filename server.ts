import createApp from "./app";

const main = () => {
  const app = createApp();

  const PORT: Number = +process.env.PORT || 9000;

  app.listen(PORT, () => {
    const TIME: string = new Date().toTimeString();
    console.log('Listening on PORT:', PORT, TIME);
  });
};

main();
