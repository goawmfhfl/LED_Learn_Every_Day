function LoudHello() {
  return new Promise((resolve, reject) => {
    const LoudHello = 'Hllow World';
    resolve(LoudHello);
    reject(new Error('this is Error'));
  });
}

async function test() {
  const Loud1 = await LoudHello();
  const Loud2 = `one more loud ${Loud1}`;
  const Loud3 = `Hey !! loud ${Loud1}`;
  console.log(Loud1); // Hllow World
  console.log(Loud2); // one more loud Hllow World
  console.log(Loud3); // Hey !! loud Hllow World
}

test();
