(async () => {
  await Promise.resolve()
    .then(() => {
      return 3;
    })
    .then((resp) => {
      console.log(resp);
    });
})();
